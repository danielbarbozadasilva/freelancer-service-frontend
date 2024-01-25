import * as moment from 'moment';

interface Form {
  [key: string]: string | string[];
}

interface FormValidate {
  [key: string]: string;
}

export function isNotValid(form: Form, formValidate: FormValidate): boolean {
  const inputs = [
    'name',
    'username',
    'email',
    'cpf',
    'birthDate',
    'country',
    'phone',
    'description',
    'password'
  ];

  const invalid = (label: string) =>
    !Object.keys(form).includes(label) || (form[label] as string).length === 0;

  const validations =
    Object.values(formValidate).filter((item) => item !== '').length > 0;

  return inputs.some((item) => invalid(item)) || validations;
}

export function fieldValidate(name: string, value: string): string {
  let message = '';
  let regex = '';

  switch (name) {
    case 'name':
    case 'username':
      regex = /\d/g;
      if (regex.test(value)) {
        message += 'Não pode conter números!';
      } else if (value.trim() === '') {
        message += 'Não pode ser vazio!';
      } else if (value.length <= 4) {
        message += 'Acima de 4 caracteres!';
      }
      break;

    case 'email':
      regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regex.test(value)) {
        message += 'E-mail inválido!';
      } else if (value.trim() === '') {
        message += 'Campo em branco!';
      }
      break;

    case 'cpf':
      let cpf = value
        .trim()
        .replaceAll('-', '')
        .replaceAll('_', '')
        .replaceAll('.', '');
      if (cpf.length < 11) {
        message += 'CPF inválido!';
      }
      break;

    case 'birthDate':
      var datanasc = value.replaceAll('-', '/');
      var dataAtual = moment().format('YYYY/MM/DD');

      if (!moment(datanasc).isValid()) {
        message += 'Data inválida!';
      } else if (moment(datanasc).isAfter(dataAtual)) {
        message += 'Data maior que a atual!';
      } else if (moment().diff(moment(datanasc), 'years') < 18) {
        message += 'O usuário precisa ter no mínimo 18 anos!';
      }
      break;

    case 'phone':
      let phone = value.trim().replaceAll('-', '').replaceAll('_', '');

      regex =
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

      if (!regex.test(phone)) {
        message += 'Número de telefone inválido!';
      }
      break;

    case 'description':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!';
      } else if (value.length <= 4) {
        message += 'Precisa ter mais que 4 caracteres!';
      }
      break;

    case 'country':
      if (value === 'selecione') {
        message += 'Selecione um país!';
      }
      break;
  }

  return message;
}