import React, { useEffect, useState } from 'react'
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { StripeLinkAuthenticationElementChangeEvent } from '@stripe/stripe-js'
import { SButton } from '../../portal/button/basic/styled'
import Loading from '../../loading/form'
import { SContainerLoading } from './styled'

const CheckoutForm: React.FC = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret')

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (event: React.ChangeEvent<{ value: unknown }>) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.REACT_APP_PATH}success`
      }
    })

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: 'tabs'
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(event: StripeLinkAuthenticationElementChangeEvent) =>
          setEmail(event?.target?.value)
        }
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      {isLoading ? (
        <>
          <SContainerLoading>
            <Loading />
          </SContainerLoading>
        </>
      ) : (
        <SButton disabled={isLoading || !stripe || !elements} id="submit">
          Pagar agora
        </SButton>
      )}
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm
