import axios from 'axios';

const uber = axios.create({
  baseURL: 'https://sandbox-api.uber.com/v1.2',
  headers: {
    authorization: 'Bearer IA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAGgAAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAdAAAABwAAAAEAAAAEAAAAIK_FoDyFe9dpo7ySd0Jaj5OAAAAHnQwbLAWiVDxiM7d_nZi7YHjis25ystz9RoKvIzEnD_GBcERl0f8SGK_gtjN1cdCFeqozawBk5kglcYoQcCvn-6JllGfmMGfCDfCBle1AAAMAAAA-yUbyUfbMXxw-BH4JAAAAGIwZDg1ODAzLTM4YTAtNDJiMy04MDZlLTdhNGNmOGUxOTZlZQ'
  }
});

export { uber };
