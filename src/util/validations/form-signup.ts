import * as moment from 'moment'
import { TypeSignUp } from './types'

export function isNotValid(form: any, formValidate: TypeSignUp) {
  const inputs = [
    'name',
    'username',
    'email',
    'cpf',
    'birthDate',
    'country',
    'phone',
    'description',
    'password',
    'confirmPassword'
  ]
  const invalid = (label: any) =>
    !Object.keys(form).includes(label) || form[label]?.length === 0

  const validations =
    Object.values(formValidate).filter((item) => item !== '').length > 0

  return inputs.some((item) => invalid(item)) || validations
}

export function fieldValidate(name: any, value: any, form: any) {
  let message: string = ''
  let regex;

  switch (name) {
    case 'name':
      regex = /\d/g
      if (regex.test(value)) {
        message += 'Não pode conter números!'
      } else if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 5) {
        message += 'Acima de 4 caracteres!'
      } else if (value.length >= 30) {
        message += 'Abaixo de 30 caracteres!'
      }
      break

    case 'cpf':
      let cpf = value
        .trim()
        .replaceAll('-', '')
        .replaceAll('_', '')
        .replaceAll('.', '')
      if (cpf.length < 11) {
        message += 'CPF inválido!'
      }
      break

    case 'address':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Precisa ter mais que 4 caracteres!'
      }
      break

    case 'phone':
      var phone = value.trim().replaceAll('-', '').replaceAll('_', '')

      regex =
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

      if (!regex.test(phone)) {
        message += 'Número de celular inválido!'
      }
      break

    case 'email':
      regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!regex.test(value)) {
        message += 'E-mail inválido!'
      } else if (value.trim() === '') {
        message += 'Campo em branco!'
      }
      break

    case 'birthDate':
      var dateBirth = value.replaceAll('-', '/')
      var today = moment.default().format('YYYY/MM/DD')

      if (!moment.default(dateBirth).isValid) {
        message += 'Data inválida!'
      } else if (moment.default(dateBirth).isAfter(today)) {
        message += 'Data maior que a atual!'
      } else if (
        moment.default().diff(moment.default(dateBirth), 'years') < 18
      ) {
        message += 'O usuário precisa ter no mínimo 18 anos!'
      }
      break

    case 'password':
      if (value.length < 4) {
        message += 'Acima de 4 caracteres!'
      } else if (value.length >= 20) {
        message += 'Abaixo de 20 caracteres!'
      }
      break

    case 'confirmPassword':
      if (value?.length !== form.password?.length) {
        message += 'Senhas não conferem!'
      } else if (form.password !== value) {
        message += 'Senhas não conferem!'
      }
      break
  }

  return message
}
