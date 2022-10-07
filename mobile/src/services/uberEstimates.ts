import axios from 'axios';

export interface EstimatesData {
  app: string,
  startLatitude: number,
  startLongitude: number,
  endLatitude: number,
  endLongitude: number
}

export async function calculateEstimates({ app, startLatitude, startLongitude, endLatitude, endLongitude }: EstimatesData) {
  if (app === 'uber') {
    // const pi = 3.14;

    const routeDetails = await axios.post('https://routes.googleapis.com/directions/v2:computeRoutes?key=AIzaSyBqmuKCeIVE5UqtGEVh8VjupY-leuye8Vk', {
      params: {
        origin: {
          location: {
            latLng: {
              latitude: 37.420761,
              longitude: -122.081356
            }
          }
        },
        destination: {
          location: {
            latLng: {
              latitude: 37.420999,
              longitude: endLongitude
            }
          }
        },
        travelMode: 'DRIVE'

      }
    });

    const km = routeDetails.data.routes.distanceMeters;
    console.log(km);
  } else {
    console.log('error');
  }
}
