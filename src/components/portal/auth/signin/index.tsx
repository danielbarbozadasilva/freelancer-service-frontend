import React, { ChangeEvent } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import {
  SFormSignIn,
  STextForm,
  SColFooter,
  SButtonSignIn,
  STextLink
} from '../styled'
import { PageType } from '../../../types'
import Loading from '../../../loading/form'
import { useAppSelector } from '../../../../hooks'

const SignIn: React.FC<PageType> = ({ submit }) => {
  const loading: boolean = useAppSelector((state) => state.auth.loading)
  const registered: boolean = useAppSelector((state) => state.auth.registered)
  const [form, setForm] = React.useState({ email: '', password: '' })

  React.useEffect(() => {
    if (registered) {
      setForm({ email: '', password: '' })
    }
  }, [registered])

  const handleChange = (props: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    submit(form)
  }

  return (
    <Container>      
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SFormSignIn>
          <STextForm>Login</STextForm>
            <Form.Group className="mb-3">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                disabled={loading}
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={form.email || ''}
                placeholder="Informe o seu e-mail"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                disabled={loading}
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={form.password || ''}
                placeholder="Informe a sua senha"
              />
            </Form.Group>
            {loading ? (
              <Loading />
            ) : (
              <SButtonSignIn type="button" onClick={submitForm}>
                Entrar
              </SButtonSignIn>
            )}
            <SColFooter>
              Esqueceu a senha?{' '}
              <STextLink href="/recovery-password">Redefinir senha</STextLink>
            </SColFooter>
          </SFormSignIn>
        </Col>
      </Row>
    </Container>
  )
}
export default SignIn
