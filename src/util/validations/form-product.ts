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

export function fieldValidate(name: string, value: string) {
  let message: string = ''
  const regex = /^[0-9]+$/;

  switch (name) {
    case 'title':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Acima de 4 caracteres!'
      } else if (value.length >= 40){
        message += 'Abaixo de 40 caracteres!'
      }
      break

    case 'categorySelected':
      if (value === '0') {
        message += 'Selecione uma categoria!'
      }
      break

    case 'deliveryTime':
      if (!regex.test(value)) {
        message += 'Apenas números!'
      } else if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      }
      break

    case 'description':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 5) {
        message += 'Acima de 5 caracteres!'
      } else if (value.length >= 90){
        message += 'Abaixo de 90 caracteres!'
      }
      break
  }

  return message
}
