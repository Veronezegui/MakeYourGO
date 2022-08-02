/* eslint-disable no-unused-vars */
import { v4 as uuidV4 } from 'uuid'

class User {
  id?: string
  name: string
  email: string
  senha: string
  created_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { User }
