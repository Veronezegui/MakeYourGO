import axios from 'axios';

const uber = axios.create({
  baseURL: 'https://api.uber.com/v1.0',
  headers: {
    client_secret: 'Onf2wpz3Tg8eQoyQSuUCoIaouO6AEvJd2X_igqaW',
    Authorization: 'Bearer IA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAGgAAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAdAAAABwAAAAEAAAAEAAAAOY8wilkbKds6188MVQMgrJOAAAAuWN32-XJlolJeS4o81UTIVfUZHvBmm-vO3fDAXdOBnlqU6KEGHT-JxcRPO5qKlPbzJSfXTc-2AMrnEXCPJm3ezGNSVF1j2kR1hDEQS-YAAAMAAAA24ezzPoXCu_4w8ScJAAAAGIwZDg1ODAzLTM4YTAtNDJiMy04MDZlLTdhNGNmOGUxOTZlZQ',
    client_id: 'agBBuTEc_jVekcVWgfCE5Q9yT04Oo15Y',
    scope: 'profile'
  }
});

export { uber };
