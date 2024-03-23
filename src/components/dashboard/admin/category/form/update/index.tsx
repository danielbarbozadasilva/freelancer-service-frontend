import React, { useState, ChangeEvent } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { SBox, SImage, SButton, SButtonUpload, SPreview } from '../styled'
import { useAppSelector } from '../../../../../../hooks'
import { FormCategoryUpdateProps, ICategory } from './types'
import {
  fieldValidate,
  isNotValid
} from '../../../../../../util/validations/form-category'

const FormCategoryUpdate: React.FC<FormCategoryUpdateProps> = ({ submit, data }) => {
  const [preview, setPreview] = useState(data?.picture)
  const [form, setForm] = useState({ ...data })
  const [formValidate, setFormValidate] = useState({} as ICategory)
  const loading: boolean = useAppSelector((state) => state.category.loading)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    const message = fieldValidate(name, value)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    const formData = new FormData()
    formData.append('files', preview[0])

    const newForm: ICategory = {
      name: form.name,
      description: form.description,
      files: true
    }

    Object.keys(newForm).map((k) => formData.append(k, newForm[k]))
    submit(formData)
  }

  const removeImage = () => setPreview([])

  const previewImg = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files && event.target.files[0]
    setPreview(Array(image))
  }

  return (
    <SBox>
      <form noValidate autoComplete="off">
        {preview?.length ? (
          <Grid container direction="row">
            <SPreview>
              {preview?.length === 1 ? (
                <SImage src={URL.createObjectURL(preview[0])} />
              ) : (
                <SImage src={preview || data.picture} />
              )}

              <Button onClick={removeImage} component="label">
                Remover
              </Button>
            </SPreview>
          </Grid>
        ) : (
          ''
        )}

        <Grid container direction="column">
          <SButtonUpload
            variant="contained"
            color="primary"
            size="small"
            component="label"
          >
            Upload Foto
            <input
              accept="image/*"
              type="file"
              name="image"
              hidden
              onChange={previewImg}
              disabled={loading}
            />
          </SButtonUpload>
        </Grid>

        <div>
          <TextField
            autoFocus
            fullWidth
            size="small"
            margin="normal"
            id="standard-error-helper-text"
            label="Nome"
            name="name"
            value={form?.name}
            onChange={handleChange}
            disabled={loading}
            error={!!formValidate.name}
          />
          <div className="mt-1">
            <p className="text-danger">{formValidate.name}</p>
          </div>
        </div>
        
        <div>
          <TextField
            fullWidth
            size="small"
            margin="normal"
            id="standard-error-helper-text"
            label="Descrição"
            name="description"
            value={form?.description}
            onChange={handleChange}
            disabled={loading}
            error={!!formValidate.description}
          />
          <div className="mt-1">
            <p className="text-danger">{formValidate.description}</p>
          </div>
        </div>
        <SButton
          fullWidth
          type="button"
          disabled={isNotValid(form, formValidate, preview)}
          onClick={submitForm}
        >
          Atualizar
        </SButton>
      </form>
    </SBox>
  )
}

export default FormCategoryUpdate
