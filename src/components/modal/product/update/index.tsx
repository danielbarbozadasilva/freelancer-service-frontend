import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  TextField,
  Button,
  Grid,
  Select,
  FormHelperText,
  InputLabel,
  MenuItem
} from '@material-ui/core'
import { SBox, SImage, SButton, SPreview, SFormControl } from '../styled'
import {
  fieldValidate,
  isNotValid
} from '../../../../util/validations/form-product'
import {
  formatPriceField,
  formatObjectURL,
  getMoney
} from '../../../../util/helpers/format'
import { listAllCategoryAction } from '../../../../store/category/category.action'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import {
  ICategoryAll,
  IFormSend,
  IProductById,
  IProps,
  IUser,
  dataServices
} from './types'

const FormUpdateProduct: React.FC<IProps> = ({ data, submit }) => {
  const [preview, setPreview] = useState(data.images)
  const [form, setForm] = useState({ ...data } as IProductById)
  const [formValidate, setFormValidate] = useState({} as IProductById)

  const user: IUser = useAppSelector((state) => state.auth.user)
  const categories: ICategoryAll[] = useAppSelector((state) => state.category.all)
  const loading: boolean = useAppSelector((state) => state.product.loading)

  const dispatch = useAppDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: any) => {
    const { value, name } = event.target
    if (!isNaN(index)) {
      const updatedFeatures = Array.isArray(form.features) ? [...form.features] : [];
      updatedFeatures[index] = value;
      setForm({
        ...form,
        features: updatedFeatures
      })
    } else {
      const message = fieldValidate(name, value)
      setFormValidate({ ...formValidate, [name]: message })
      setForm({
        ...form,
        [name]: value
      })
    }
  }

  const submitForm = () => {
    const formData = new FormData()

    for (let i = 0; i < preview.length; i++) {
      formData.append('files', preview[i])
    }

    const newForm: IFormSend = {
      userId: user.id,
      title: form.title,
      category: form?.categorySelected || form.category._id,
      description: form.description,
      deliveryTime: form.deliveryTime,
      features: form.features,
      price: formatPriceField(form.price),
      files: true
    }

    Object.keys(newForm).map((k) => formData.append(k, newForm[k]))
    
    submit(formData)
  }

  useEffect(() => {
    dispatch(listAllCategoryAction())
  }, [dispatch])

  const removeImage = (remove: string) => {
    const data = preview.filter((item: string) => item !== remove)
    setPreview(data)
  }

  const previewImg = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const image = event.target.files[0]
    const data = preview.length ? preview.concat(image) : [image]
    setPreview(data)
  }

  return (
    <SBox>
      <form noValidate autoComplete='off'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {preview?.length > 0 ? (
              <Grid container spacing={2}>
                {preview?.map((item) => {
                  return (
                    <SPreview>
                      <SImage src={formatObjectURL(item)} />
                      <Button
                        onClick={() => removeImage(item)}
                      >
                        Remover
                      </Button>
                    </SPreview>
                  )
                })}
              </Grid>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={12}>
            <SButton
              fullWidth
              variant='contained'
              color='primary'
              size='small'
              component='label'
            >
              Upload Foto
              <input
                accept='image/*'
                type='file'
                name='image'
                hidden
                onChange={previewImg}
                disabled={loading}
              />
            </SButton>
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              fullWidth
              size='small'
              error={!!formValidate.title}
              margin='normal'
              id='standard-error-helper-text'
              label='Nome'
              name='title'
              value={form.title || ''}
              onChange={handleChange}
              helperText={formValidate.title || ''}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
          <SFormControl error={form?.categorySelected ==='0'}>
              <InputLabel>Categoria</InputLabel>
              <Select
                name='categorySelected'
                label='Categoria'
                inputProps={{
                  name: 'categorySelected',
                  id: 'outlined-native-simple'
                }}
                value={form?.categorySelected || form.category._id }
                onChange={handleChange}
                disabled={loading}
              >
                <MenuItem value='0'>selecione</MenuItem>
                {categories?.map(({ id, name }, i) => (
                  <MenuItem key={i} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText error>
                <>{formValidate.categorySelected || ''}</>
              </FormHelperText>
            </SFormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              size='small'
              maxRows='3'
              error={!!formValidate.description}
              margin='normal'
              name='description'
              label='Descrição'
              type='text'
              id='standard-error-helper-text'
              value={form.description || ''}
              onChange={handleChange}
              helperText={formValidate.description || ''}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={!!formValidate.deliveryTime}
              id='standard-error-helper-text'
              label='Tempo para entrega (dias)'
              name='deliveryTime'
              value={form.deliveryTime || ''}
              onChange={handleChange}
              helperText={formValidate.deliveryTime || ''}
              disabled={loading}
              type='text'
            />
          </Grid>
          {dataServices.map((data, index) => (
            <Grid item xs={12} key={index}>
              <TextField
                fullWidth
                type='text'
                label={`Ferramenta ${index + 1}`}
                name={`feature${index}`}
                placeholder={data}
                value={
                  form.features && form.features[index]
                    ? form.features[index]
                    : ''
                }
                onChange={(event) => handleChange(event, index)}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size='small'
              error={!!formValidate.price}
              margin='normal'
              name='price'
              label='Preço'
              type='text'
              id='standard-error-helper-text'
              inputProps={{ maxLength: 9 }}
              value={form.price || ''}
              onChange={handleChange}
              onKeyUp={(e) => setForm({ ...form, price: getMoney(e) })}
              helperText={formValidate.price || ''}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <SButton
              fullWidth
              type='button'
              disabled={isNotValid(form, formValidate)}
              onClick={submitForm}
            >
              Salvar
            </SButton>
          </Grid>
        </Grid>
      </form>
    </SBox>
  )
}

export default FormUpdateProduct
