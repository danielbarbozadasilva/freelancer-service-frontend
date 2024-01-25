import React, { useEffect, useState, ChangeEvent } from 'react'
import {
  TextField,
  Grid,
  LinearProgress,
  Select,
  Container,
  Button
} from '@material-ui/core'
import { Submit, SignBox, FormStyle, SInputLabel, SButton } from './styled'
import moment from 'moment'
import InputMask from 'react-input-mask'
import {
  fieldValidate,
  isNotValid
} from '../../../../../../util/validations/form-client'
import { SBox, Image, SPreview } from '../styled';
import { useAppSelector } from '../../../../../../hooks';
import { FormClientUpdateProps } from './types';
import ufCountryFile from '../../../../../../util/country.json'

const FormClientUpdate: React.FC<FormClientUpdateProps> = ({ submit, data }) => {
  const [preview, setPreview] = useState(data.picture);
  const [button, setButton] = useState(false)
  const loading = useAppSelector((state) => state.client.loading)
  const selected = useAppSelector((state) => state.client.clientid)
  const [form, setForm] = useState<any>({ ...selected })
  const [formValidate, setFormValidate] = useState<any>({})
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

    const newForm: any = {
      name: form.name,
      username: form.username,
      email: form.email,
      cpf: form.cpf,
      birthDate: form.birthDate,
      country: form.country,
      phone: form.phone,
      description: form.description
    }
    submit(newForm)
  }

  const removeImage = () => setPreview([]);

  const previewImg = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files && event.target.files[0];
    setPreview([image]);
  };

  return (
    <Container component="main" maxWidth="xs">
      <SignBox>
      {preview?.length ? (
          <Grid container direction="row">
            <SPreview>
              {preview?.length === 1 ? (
                <Image src={URL.createObjectURL(preview[0])} />
              ) : (
                <Image src={preview} />
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
          <Button
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
          </Button>
        </Grid>
        <FormStyle noValidate>
          <div>
            <SInputLabel>Nome</SInputLabel>
            <TextField
              fullWidth
              size="small"
              id="standard-error-helper-text"
              name="name"
              value={form.name || ''}
              onChange={handleChange}
              helperText={formValidate.name || ''}
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
              value={form.username || ''}
              onChange={handleChange}
              helperText={formValidate.username || ''}
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
              value={form.email || ''}
              onChange={handleChange}
              helperText={formValidate.email || ''}
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
              value={form.cpf || ''}
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
              name="birth_date"
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
              value={form.phone || ''}
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
              size="small"
              id="standard-error-helper-text"
              name="name"
              value={form.description || ''}
              onChange={handleChange}
              helperText={formValidate.description || ''}
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
                error={!!formValidate.password}
                name="password"
                onChange={handleChange}
                helperText={formValidate.password || ''}
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
            margin="normal"
            onClick={() => setButton(!button)}
          >
            {button ? 'Ocultar campo' : 'Alterar senha'}
          </SButton>

          <Submit>
            {loading ? (
              <Grid container direction="column">
                <LinearProgress variant="determinate" value={percent} />
              </Grid>
            ) : (
              <SButton
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
