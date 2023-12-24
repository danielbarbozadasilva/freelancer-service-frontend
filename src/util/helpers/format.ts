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
