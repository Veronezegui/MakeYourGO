import axios from 'axios';

const placesApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyBZiE0Km9C0u-GUWPzVum5dMQAOlrRoCYk'
});

export { placesApi };
