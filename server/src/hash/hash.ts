import { createHash } from 'crypto'

export function criaHash(senha: string) {
  return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash('123456'))
