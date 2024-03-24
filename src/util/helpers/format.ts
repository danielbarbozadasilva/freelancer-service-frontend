import { ChangeEvent } from 'react'

export function formatPhone(phone: string) {
  return phone
    ?.replace(/\D/g, '')
    ?.replace(/(\d{2})(\d)/, '($1) $2')
    ?.replace(/(\d{5})(\d)/, '$1-$2')
    ?.replace(/(-\d{4})\d+?$/, '$1')
}

export function formatCPF(cpf: string) {
  return cpf
    ?.replace(/\D/g, '')
    ?.replace(/(\d{3})(\d)/, '$1.$2')
    ?.replace(/(\d{3})(\d)/, '$1.$2')
    ?.replace(/(\d{3})(\d)/, '$1-$2')
    ?.replace(/(-\d{2})\d+?$/, '$1')
}

export function formatPriceField(data: any) {
  return data?.replace('R$', '').replace('.', '').replace(',', '.').trim()
}

export function formatPriceBr(data: number): string {
  return Number(data).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

export function formatMoney(data: string): number {
  return Number(
    data.trim().replace('R$', '').replace('.', '').replace(',', '.')
  )
}

export function formatObjectURL(data: any) {
  if (data[0]?.search('localhost') === -1) {
    return data
  }
  return URL.createObjectURL(data)
}

export function getMoney(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const money = event?.target?.value
  const result = money?.replace('R$', '')
  return formatReal(parseInt(result?.replace(/[\D]+/g, '')))
}

export function formatReal(int: Number): string {
  let result = int + ''
  let negative = false
  if (result.indexOf('-') == 0) {
    negative = true
    result = result.replace('-', '')
  }

  if (result.length == 1) result = '0' + result

  result = result.replace(/([0-9]{2})$/g, ',$1')
  if (result.length > 6) {
    result = result.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
  }

  if (result.length > 9) {
    result = result.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3')
  }

  if (result.length > 12) {
    result = result.replace(
      /([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
      '.$1.$2.$3,$4'
    )
  }

  if (result.indexOf('.') == 0) result = result.replace('.', '')
  if (result.indexOf(',') == 0) result = result.replace(',', '0,')

  return negative
    ? '-' + 'R$' + result.replace('NaN', '')
    : 'R$' + result.replace('NaN', '')
}

export function formatCurrency(value: number): string {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return formattedValue
}

export function convertDateToTimestamp(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  date.setDate(date.getDate() + 1)
  return String(date.getTime())
}

export function isTimestamp(date: any): boolean {
  return !isNaN(Date.parse(date))
}
