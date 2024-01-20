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

export function formatPriceBr(data: number) : string{
  return Number(data).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

export function formatMoney(data: string) : Number{
  return Number(
    data.trim().replace('R$', '').replace('.', '').replace(',', '.')
  )
}

export function formatPriceField(data: string) : string{
  return data?.replace('R$', '').replace('.', '').replace(',', '.').trim()
}

export function formatObjectURL(data: any) {
  if (data[0]?.search('localhost') === -1) {
    return data
  }
  return URL.createObjectURL(data)
}

export function getMoney(e: React.ChangeEvent<HTMLInputElement>) {
  const money = e?.target?.value;
  const result = money?.replace('R$', '');
  return formatReal(parseInt(result?.replace(/[\D]+/g, '')) || 0);
}

export function formatReal(int: Number) : string{
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

