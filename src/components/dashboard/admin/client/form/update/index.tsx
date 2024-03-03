import React, { useEffect, useState, ChangeEvent } from 'react'
import { TextField, Grid, LinearProgress, Select, Container, Button } from '@material-ui/core'
import { Submit, SignBox, FormStyle, SInputLabel, SButton, SButtonUpload } from './styled'
import moment from 'moment'
import InputMask from 'react-input-mask'
import { fieldValidate, isNotValid } from '../../../../../../util/validations/form-client'
import { SImage, SPreview } from '../styled';
import { useAppSelector } from '../../../../../../hooks';
import { FormClientUpdateProps, IUser } from './types';
import ufCountryFile from '../../../../../../util/country.json'
import { convertDateToTimestamp } from '../../../../../../util/helpers/format'

const FormClientUpdate: React.FC<FormClientUpdateProps> = ({ submit, data }) => {
  const [preview, setPreview] = useState(data?.picture);
  const [button, setButton] = useState<boolean>(false)
  const loading: boolean = useAppSelector((state) => state.client.loading)
  const [form, setForm] = useState({ ...data })
  const [formValidate, setFormValidate] = useState({} as IUser)
  const [country, setCountry] = useState([{}])

  const handleChange = (props: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value)
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

  const submitForm = () => {
    const formData = new FormData();
    formData.append('files', preview[0]);

    const newForm: IUser = {
      name: form.name,
      username: form.username,
      email: form.email,
      cpf: form.cpf,
      birthDate: convertDateToTimestamp(form.birthDate),
      country: form.country,
      phone: form.phone,
      description: form.description,
      password: form.password,
      isSeller: form.isSeller
    }

    Object.keys(newForm).map((k) => formData.append(k, newForm[k]))
    submit(formData)    
  }

  const removeImage = () => setPreview([]);

  const previewImg = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files && event.target.files[0];
    setPreview(Array(image));
  };

  return (
    <Container component="main" maxWidth="xs">
      <SignBox>
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
        <FormStyle>
          <div>
            <SInputLabel>Nome</SInputLabel>
            <TextField
              fullWidth
              size="small"
              id="standard-error-helper-text"
              name="name"
              value={form.name}
              onChange={handleChange}
              helperText={formValidate.name}
              disabled={loading}
              variant="outlined"
              error={!!formValidate.name}
            />
          </div>
          
          <div>
            <SInputLabel>Username</SInputLabel>
            <TextField
              fullWidth
              size="small"
              id="standard-error-helper-text"
              name="username"
              value={form.username}
              onChange={handleChange}
              helperText={formValidate.username}
              disabled={loading}
              variant="outlined"
              error={!!formValidate.username}
            />
          </div>

          <div>
            <SInputLabel>E-mail</SInputLabel>
            <TextField
              fullWidth
              size="small"
              id="standard-error-helper-text"
              name="email"
              value={form.email}
              onChange={handleChange}
              helperText={formValidate.email}
              disabled={loading}
              variant="outlined"
              error={!!formValidate.email}
            />
          </div>

          <div>
            <SInputLabel>Cpf</SInputLabel>
            <InputMask
              mask="999.999.999-99"
              className="form-control"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              disabled={loading}
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.cpf}</p>
            </div>
          </div>

          <div>
            <SInputLabel>Data de nascimento</SInputLabel>
            <TextField
              fullWidth
              id="standard-error-helper-text"
              name="birthDate"
              type="date"
              value={
                form.birthDate
                  ? moment(form.birthDate)
                      .format('YYYY/MM/DD')
                      .replaceAll('/', '-')
                  : ''
              }
              onChange={handleChange}
              disabled={loading}
              variant="outlined"
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.birthDate}</p>
            </div>
          </div>

          <div>
            <SInputLabel>Pais</SInputLabel>
            <Select
              native
              id="standard-error-helper-text"
              variant="outlined"
              size="small"
              value={form.country}
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
            <div className="mt-1">
              <p className="text-danger">{formValidate.country}</p>
            </div>
          </div>

          <div>
            <SInputLabel>Telefone</SInputLabel>
            <InputMask
              mask="(99)9999-9999"
              className="form-control"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              disabled={loading}
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.phone}</p>
            </div>
          </div>

          <div>
            <SInputLabel>Descrição</SInputLabel>
            <TextField
              fullWidth
              multiline
              rows={3}
              size="small"
              id="standard-error-helper-text"
              name="description"
              value={form.description}
              onChange={handleChange}
              helperText={formValidate.description}
              disabled={loading}
              variant="outlined"
              error={!!formValidate.description}
            />
          </div>
          
          {button ? (
            <div>
              <SInputLabel>Nova senha</SInputLabel>
              <TextField
                fullWidth
                size="small"
                id="standard-error-helper-text"
                name="password"
                onChange={handleChange}
                disabled={loading}
                variant="outlined"
              />
            </div>
          ) : (
            <></>
          )}
          <SButton
            variant="contained"
            fullWidth
            size="small"
            onClick={() => setButton(!button)}
          >
            {button ? 'Ocultar campo' : 'Alterar senha'}
          </SButton>

          <Submit>
            {loading ? (
              <Grid container direction="column">
                <LinearProgress variant="determinate" />
              </Grid>
            ) : (
              <SButton
                variant="contained"
                fullWidth
                size="small"
                type="button"
                onClick={submitForm}
                disabled={isNotValid(form, formValidate)}
              >
                Atualizar
              </SButton>
            )}
          </Submit>
        </FormStyle>
      </SignBox>
    </Container>
  )
}
export default FormClientUpdate
