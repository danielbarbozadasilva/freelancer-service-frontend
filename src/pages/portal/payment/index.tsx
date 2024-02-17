import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useParams } from 'react-router-dom'
import CheckoutForm from '../../../components/form/checkout/index'
import { Helmet } from 'react-helmet'
import { useAppDispatch } from '../../../hooks'
import { createPaymentIntent } from '../../../store/order/order.action'
import { PageTitle } from './types'
import { SContainer, TitlePage } from '../../../assets/styled'
import { useLocation } from 'react-router-dom';

const PayPage: React.FC<PageTitle> = ({ title }) => {
  const location = useLocation()
  const data = location.state?.data

  let stripePromise
  if (process.env.REACT_APP_STRIPE) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE)
  }

  const [clientSecret, setClientSecret] = useState('')
  const dispatch = useAppDispatch()
  const { id, buyerid } = useParams()

  useEffect(() => {
    if (id && buyerid) {
      dispatch(createPaymentIntent({ id, buyerid, data })).then((result: any) => {
        setClientSecret(result.payload.data.data)
      })
    }
  }, [dispatch])

  const appearance = {
    theme: 'stripe'
  }

  const options = {
    clientSecret,
    appearance
  }

  return (
    <>
      <Helmet title={title} />
      <div>
        {clientSecret && (
          <>
            <SContainer>
              <TitlePage>Pagamento</TitlePage>
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </SContainer>
          </>
        )}
      </div>
    </>
  )
}

export default PayPage
