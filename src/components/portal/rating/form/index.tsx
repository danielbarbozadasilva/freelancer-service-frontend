import React, { ChangeEvent, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { SForm, SButton } from './styled'
import {
  fieldValidate,
  isNotValid
} from '../../../../util/validations/form-rating'
import Loading from '../../../loading/form/index'
import { useAppSelector } from '../../../../hooks'
import { ContainerFormProps, FormData, IUser } from './types'

const ContainerForm: React.FC<ContainerFormProps> = ({ id, submit }) => {
  const [form, setForm] = useState({} as FormData)
  const [formValidate, setFormValidate] = useState<Record<string, string>>({})
  const [score, setScore] = useState<number>(4)
  const user: IUser = useAppSelector((state) => state.auth.user)
  const loading: boolean = useAppSelector((state) => state.rating.loading)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    const message = fieldValidate(name, value)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = () => {
    const nform: FormData = {
      name: form.name,
      text: form.text,
      score: score,
      productId: id,
      userId: user.id
    }
    submit(nform)
  }

  return (
    <SForm>
      <Form.Group className="mb-4">
        <Form.Label>Título</Form.Label>
        <Form.Control
          disabled={loading}
          value={form.name || ''}
          type="text"
          onChange={handleChange}
          id="name"
          name="name"
          placeholder="Insira o seu nome"
          isInvalid={!!formValidate.name}
        />
        <Form.Control.Feedback type="invalid">
          {formValidate.name || ''}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Comentário</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          disabled={loading}
          value={form.text || ''}
          onChange={handleChange}
          id="text"
          name="text"
          placeholder="Insira o seu comentário"
          isInvalid={!!formValidate.text}
        />
        <Form.Control.Feedback type="invalid">
          {formValidate.text || ''}
        </Form.Control.Feedback>
      </Form.Group>

      <Typography component="legend" className="mb-2">
        Avaliação
      </Typography>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          newValue && setScore(newValue)
        }}
      />
      {loading ? (
        <Loading />
      ) : (
        <SButton
          type="button"
          onClick={handleSubmit}
          disabled={isNotValid(form, formValidate)}
        >
          Enviar
        </SButton>
      )}
    </SForm>
  )
}

export default ContainerForm
