export function isNotValid(form: any, formValidate: any) {
    const inputs = ['name', 'text']
    const invalid = (label) =>
      !Object.keys(form).includes(label) || form[label]?.length === 0
  
    const validations =
      Object.values(formValidate).filter((item) => item !== '').length > 0
  
    return inputs.some((item) => invalid(item)) || validations
  }
  
  export function fieldValidate(name: string, value: any) {
    let message = ''
    let regex;
  
    switch (name) {
      case 'name':
        regex = /\d/g
        if (regex.test(value)) {
          message += 'Não pode conter números!'
        } else if (value.trim() === '') {
          message += 'Não pode ser vazio!'
        } else if (value.length <= 4) {
          message += 'Acima de 4 caracteres!'
        }
        break
  
      case 'text':
        if (value.trim() === '') {
          message += 'Não pode ser vazio!'
        } else if (value.length <= 10) {
          message += 'Acima de 10 caracteres!'
        }
        break
    }
  
    return message
  }
  