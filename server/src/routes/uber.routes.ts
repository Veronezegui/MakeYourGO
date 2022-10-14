/* eslint-disable space-before-function-paren
import { Router } from 'express'

const Uber = require('node-uber')

const uberRoutes = Router()
const uber = new Uber({
  client_id: 'agBBuTEc_jVekcVWgfCE5Q9yT04Oo15Y',
  client_secret: 'Onf2wpz3Tg8eQoyQSuUCoIaouO6AEvJd2X_igqaW',
  bearer_token: 'IA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAGgAAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAdAAAABwAAAAEAAAAEAAAAOhgITXZRvbsyc7qJ2Vy1ZlOAAAAmHtDNrPty5_H7iZmW4jmZBc1Pp8gzVau8J3FNtyuNybvLG_xIVXOYhCqXgAV0BKgpkv5Ycx74-1mu9K9IQHyMpyvN6504Gg4Qg4h53HVAAAMAAAAES8OJWihhtRassObJAAAAGIwZDg1ODAzLTM4YTAtNDJiMy04MDZlLTdhNGNmOGUxOTZlZQ',
  name: 'MakeYourGO'
})

// Rota para cadastro de usuários
uberRoutes.get('/login', function (request, response) {
  const url = uber.getAuthorizeUrl(['profile'])
  response.redirect(url)
})

uberRoutes.get('/callback', function (request, response) {
  uber.authorizationAsync({ authorization_code: request.query.code })
    .spread(function (accessToken, refreshToken, authorizedScopes, tokenExpiration) {
      // store the user id and associated access_token, refresh_token, scopes and token expiration date
      console.log('New access_token retrieved: ' + accessToken)
      console.log('... token allows access to scopes: ' + authorizedScopes)
      console.log('... token is valid until: ' + tokenExpiration)
      console.log('... after token expiration, re-authorize using refresh_token: ' + refreshToken)

      // redirect the user back to your actual app
      response.status(201).send()
    })
    .error(function (err) {
      console.error(err)
    })
})

export { uberRoutes }
*/
