export function maskCep(value: string, valueBefore: string) {
  if (value.length <= 9) {
    return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
  } else {
    return valueBefore
  }
}
