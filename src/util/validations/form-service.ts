import { IProduct } from './types'

export function isNotValid(form: any, formValidate: IProduct) {
  const inputs = [
   'title',
   'deliveryTime',
   'description'
  ]
  const invalid = (label: any) =>
    !Object.keys(form).includes(label) || form[label]?.length === 0

  const validations =
    Object.values(formValidate).filter((item) => item !== '').length > 0
    return inputs.some((item) => invalid(item)) || validations
}

export function fieldValidate(name: any, value: any, form: any) {
  let message: string = ''
  let regex

  switch (name) {
    case 'title':
      regex = /\d/g
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Acima de 4 caracteres!'
      }
      break

    case 'category':
      if (value === 'selecione') {
        message += 'Selecione uma categoria!'
      }
      break

    case 'deliveryTime':
      regex = /\d/g
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Acima de 4 caracteres!'
      }
      break

    case 'description':
      regex = /\d/g
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Acima de 4 caracteres!'
      }
      break
  }

  return message
}
