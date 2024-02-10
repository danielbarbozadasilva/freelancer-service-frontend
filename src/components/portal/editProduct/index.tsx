import React, { useState, ChangeEvent, useEffect } from 'react'
import { useAppSelector } from '../../../hooks'
import {
  fieldValidate,
  isNotValid
} from '../../../util/validations/form-service'
import { IEditProduct, IProduct, IUser } from './types'
import { formatMoney, getMoney } from '../../../util/helpers/format'
import { Grid, Select } from '@material-ui/core'
import { Col, Form } from 'react-bootstrap'
import {
  SFormSignUp,
  SRow,
  SFormGroup,
  STextForm,
  SImage,
  SButton
} from './styled'

const EditProduct: React.FC<IEditProduct> = ({ submit, product, category }) => {
  const user: IUser = useAppSelector((state) => state.auth.user)
  const [formValidate, setFormValidate] = useState({} as IProduct)
  const [form, setForm] = useState({ ...product })
  const [file, setFile] = useState<string | Blob>('')
  const [categorySelected, setCategorySelected] = useState({ ...category })
  const [preview, setPreview] = useState(product.images?.length ? product.images[0] : '')

  useEffect(() => {
    const result = category.filter((item) => item?.id === form?.category?._id)
    if (result) {
      setCategorySelected(result)
    }
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { value, name } = event.target
    if (index !== undefined) {
      const updatedFeatures = [...form.features]
      updatedFeatures[index] = value
      setForm({
        ...form,
        features: updatedFeatures
      })
    } else {
      const message = fieldValidate(name, value, form)
      setFormValidate({ ...formValidate, [name]: message })
      setForm({
        ...form,
        [name]: value
      })
    }
  }

  const removeImage = () => {
    delete form.images
    setForm(form)
    setPreview('')
  }

  const previewImg = (props: ChangeEvent<any>) => {
    const images = props.target.files[0]
    setFile(images)
    const url = URL.createObjectURL(images)
    setPreview(url)
    setForm({
      ...form,
      images
    })
  }

  const submitForm = () => {
    const formData = new FormData()
    formData.append('files', file)
    const newForm = {
      userId: user.id,
      title: form.title,
      category: form.category._id,
      description: form.description,
      deliveryTime: form.deliveryTime,
      features: form.features,
      price: formatMoney(String(form.price))
    }
    Object.keys(newForm).forEach((key) => {
      formData.append(key, newForm[key])
    })
    submit(formData)
  }

  return (
    <SFormSignUp autoComplete="off">
      <STextForm>Editar Serviço</STextForm>
      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Título:</Form.Label>
          <Form.Control
            type="text"
            id="title"
            value={form?.title || product.title}
            onChange={handleChange}
            name="name"
            placeholder="Insira o seu nome"
            isInvalid={!!formValidate.title}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.title || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Tempo de entrega:</Form.Label>
          <Form.Control
            type="text"
            id="username"
            value={form?.deliveryTime || product.deliveryTime}
            onChange={handleChange}
            name="username"
            placeholder="Insira o tempo de entrega"
            isInvalid={!!formValidate.deliveryTime}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.deliveryTime || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Preço:</Form.Label>
          <Form.Control
            id="description"
            type="text"
            maxLength={12}
            value={form?.price || getMoney(String(product.price))}
            onChange={handleChange}
            name="price"
            placeholder="Insira o preço"
            isInvalid={!!formValidate.price}
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.price || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        {preview?.length > 0 ? (
          <>
            <label htmlFor="">Imagem</label>
            <Grid container direction="column">
              <Grid item sm={1} md={1} xl={1}>
                <SImage src={preview} />
                <SButton onClick={removeImage}>Remover</SButton>
              </Grid>
            </Grid>
          </>
        ) : (
          <input
            accept="image/*"
            type="file"
            multiple
            name="images"
            onChange={previewImg}
          />
        )}
        <SFormGroup as={Col}>
          <Form.Label>*Features:</Form.Label>
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="text"
              name={`feature${index}`}
              value={
                form.features && form.features[index]
                  ? form.features[index]
                  : ''
              }
              onChange={(event) => handleChange(event, index)}
            />
          ))}
          <Form.Control.Feedback type="invalid">
            {formValidate.features || ''}
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
          />
          <Form.Control.Feedback type="invalid">
            {formValidate.picture || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Categoria:</Form.Label>
          <Select
            native
            id="standard-error-helper-text"
            value={form?.category || product.category}
            onChange={handleChange}
            inputProps={{
              name: 'category',
              id: 'outlined-native-simple'
            }}
          >
            <option
              value={categorySelected?.length ? categorySelected[0].id : ''}
            >
              {categorySelected?.length ? categorySelected[0].name : ''}
            </option>
            {categorySelected?.length
              ? category?.map((item) =>
                  categorySelected[0].id !== item?.id ? (
                    <option key={item?.id} value={item?.name}>
                      {item?.name}
                    </option>
                  ) : (
                    ''
                  )
                )
              : ''}
          </Select>
          <Form.Control.Feedback type="invalid">
            {formValidate.category || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>*Descrição:</Form.Label>
          <Form.Control
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

      <SButton
        type="button"
        onClick={submitForm}
        disabled={isNotValid(form, formValidate)}
      >
        Salvar
      </SButton>
    </SFormSignUp>
  )
}

export default EditProduct
