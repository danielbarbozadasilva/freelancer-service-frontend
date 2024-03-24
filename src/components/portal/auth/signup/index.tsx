import React, { useState, useEffect, ChangeEvent } from 'react'
import { useAppSelector } from '../../../../hooks'
import * as moment from 'moment'
import { Col, Form } from 'react-bootstrap'
import { Select } from '@material-ui/core'
import { SFormSignUp, SRow, SFormGroup, STextForm, SButton } from '../styled'
import Loading from '../../../loading/form/index'
import { fieldValidate, isNotValid } from '../../../../util/validations/form-signup'
import { formatPhone, formatCPF } from '../../../../util/helpers/format'
import { PageType, TypeSignUp } from '../../../types'
import ufCountryFile from '../../../../util/country.json'

const SignUp: React.FC<PageType> = ({ submit }) => {
  const loading: boolean = useAppSelector((state) => state.auth.loading)
  const [formValidate, setFormValidate] = useState({} as TypeSignUp)
  const [form, setForm] = useState({} as TypeSignUp)
  const [file, setFile] = useState<string | Blob>('')
  const [country, setCountry] = useState([{}])

  const handleChange = (props: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value, form)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  useEffect(() => {
    const localization = ufCountryFile.map(({ nome }) => ({ nome }))
    setCountry(localization)
  }, [])

  const previewImg = (event: ChangeEvent<HTMLInputElement>) => {
    const picture = event.target.files?.length? event.target.files[0] : ''
    setFile(picture);
  }

  const submitForm = () => {
    const formData = new FormData()
    formData.append('files', file)

    const newForm: TypeSignUp = {
      name: form.name,
      username: form.username,
      email: form.email,
      cpf: form.cpf,
      birthDate: form.birthDate,
      country: form.country,
      phone: form.phone,
      description: form.description,
      isSeller: Boolean(form.isSeller),
      password: form.password,
    }

    Object.keys(newForm).map((k) => formData.append(k, newForm[k]))

    submit(formData)
  }

  return (
    <SFormSignUp autoComplete="off">
      <STextForm>Cadastre-se</STextForm>
      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Nome:</Form.Label>
          <Form.Control
            disabled={loading}
            type="text"
            id="name"
            value={form.name || ''}
            onChange={handleChange}
            name="name"
            placeholder="Insira o seu nome"
            isInvalid={!!formValidate.name}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.name || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Username:</Form.Label>
          <Form.Control
            disabled={loading}
            type="text"
            id="username"
            value={form.username || ''}
            onChange={handleChange}
            name="username"
            placeholder="Insira o username"
            isInvalid={!!formValidate.username}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.username || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*E-mail:</Form.Label>
          <Form.Control
            disabled={loading}
            type="text"
            id="email"
            value={form.email || ''}
            onChange={handleChange}
            name="email"
            placeholder="Insira o seu email"
            isInvalid={!!formValidate.email}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.email || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Cpf:</Form.Label>
          <Form.Control
            disabled={loading}
            type="text"
            id="cpf"
            value={formatCPF(form.cpf) || ''}
            onChange={handleChange}
            name="cpf"
            placeholder="Insira o seu Cpf"
            isInvalid={!!formValidate.cpf}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.cpf || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Data de nascimento:</Form.Label>
          <Form.Control
            disabled={loading}
            type="date"
            id="birthDate"
            value={
              form.birthDate
                ? moment
                    .default(form.birthDate)
                    .format('YYYY/MM/DD')
                    .replaceAll('/', '-')
                : ''
            }
            onChange={handleChange}
            name="birthDate"
            isInvalid={!!formValidate.birthDate}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.birthDate || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Foto:</Form.Label>
          <br />
          <input
              accept="image/*"
              type="file"
              name="picture"
              onChange={previewImg}
              disabled={loading}
            />
          <Form.Control.Feedback type="invalid">
            {formValidate.picture || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*País:</Form.Label>
          <br />
          <Select
              native
              id="standard-error-helper-text"
              value={form.country || ''}
              onChange={handleChange}
              inputProps={{
                name: 'country',
                id: 'outlined-native-simple'
              }}
            >
              <option value="selecione">selecione</option>
              {country?.map(({ nome }, i) => (
                <option key={i} value={nome}>
                  {nome}
                </option>
              ))}
            </Select>
          <Form.Control.Feedback type="invalid">
            {formValidate.country || ''}
          </Form.Control.Feedback>
        </SFormGroup>
        <SFormGroup as={Col}>
          <Form.Label>*Eu sou:</Form.Label>
          <div>
          <Select
              native
              id="standard-error-helper-text"
              value={form.isSeller || ''}
              onChange={handleChange}
              inputProps={{
                name: 'isSeller',
                id: 'outlined-native-simple'
              }}
            >
              <option value="0">Cliente</option>
              <option value="1">Freelancer</option>
            </Select>
          </div>
        </SFormGroup>
        <SFormGroup as={Col}>
          <Form.Label>*Telefone:</Form.Label>
          <Form.Control
            disabled={loading}
            type="text"
            id="phone"
            value={formatPhone(form.phone) || ''}
            onChange={handleChange}
            name="phone"
            placeholder="Informe o seu telefone"
            isInvalid={!!formValidate.phone}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.phone || ''}
          </Form.Control.Feedback>
        </SFormGroup>
        </SRow>

        <SRow>
        <SFormGroup as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>*Descrição:</Form.Label>
          <Form.Control
            disabled={loading}
            as="textarea" 
            rows={3}            
            id="description"
            value={form.description || ''}
            onChange={handleChange}
            name="description"
            placeholder="Insira uma descrição"
            isInvalid={!!formValidate.description}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.description || ''}
          </Form.Control.Feedback>
        </SFormGroup>
        </SRow>

      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Senha:</Form.Label>
          <Form.Control
            disabled={loading}
            type="password"
            id="password"
            value={form.password || ''}
            onChange={handleChange}
            name="password"
            placeholder="Insira a sua senha"
            isInvalid={!!formValidate.password}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.password || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Confirmar senha:</Form.Label>
          <Form.Control
            disabled={loading}
            type="password"
            id="confirmPassword"
            value={form.confirmPassword || ''}
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirme a sua senha"
            isInvalid={!!formValidate.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.confirmPassword || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>
      {loading ? (
        <Loading />
      ) : (
        <SButton
          type="button"
          onClick={submitForm}
          disabled={isNotValid(form, formValidate)}
        >
          Cadastrar
        </SButton>
      )}
    </SFormSignUp>
  )
}

export default SignUp
