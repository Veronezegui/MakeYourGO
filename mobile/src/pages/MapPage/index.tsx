
/* eslint-disable no-unused-vars */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import { Modal } from '../../components/Modal';

import * as Location from 'expo-location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewsDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootAuthStackParamList } from '../../routes/AuthStack';
import { Feather } from '@expo/vector-icons';
import { Container, PlaceView, Options, Bottom, Title, CardsOptions, OptionsList, ModalText, ModalDetails, ModalPrice, ModalApp, DrawerOpenButton } from './styles';
import BottomSheet from '@gorhom/bottom-sheet';

import { RidesCard } from '../../components/RidesCard';
// import { calculateEstimates } from '../../services/uberEstimates';

// import * as AuthSession from 'expo-auth-session';
// import * as Linking from 'expo-linking';
// import * as WebBrowser from 'expo-web-browser';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

// import { googleGeocodeAsync } from 'expo-location/build/LocationGoogleGeocoding';

// WebBrowser.maybeCompleteAuthSession();

interface OptionsProps {
  title: string,
  priceEstimate: string,
  timeEstimate: string,
}

interface AddressProps {
  city: string,
  country: string,
  district: string,
  isoCountryCode: string,
  name: string,
  postalCode: string,
  region: string,
  street: string,
  streetNumber: string,
  subregion: string,
  timezone: string,
}

type MapPageProps = NativeStackNavigationProp<RootAuthStackParamList, 'WaitingPage'>;

export function MapPage() {
  /*
   const grantType = 'client_credentials';
   const scopes = 'profile';
   const accessToken = 'IA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAGgAAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAdAAAABwAAAAEAAAAEAAAADezALmQMINlbkhqdMor-cVOAAAA5NuiRSkndWbOM3ObH5YkoiIYy9LExbj7v1HJ5HVooxMzt_Jlpm-MtvdQMwUXDhPa7-c9vU4gpsV4mlKjmDVRVnD_92rz5MI85hXrTX8qAAAMAAAAoTow6Wx0MXOlQhZ2JAAAAGIwZDg1ODAzLTM4YTAtNDJiMy04MDZlLTdhNGNmOGUxOTZlZQ';
   const clientId = 'agBBuTEc_jVekcVWgfCE5Q9yT04Oo15Y';
   const clientSecret = 'Onf2wpz3Tg8eQoyQSuUCoIaouO6AEvJd2X_igqaW';
   const redirectUrl = 'exp://10.0.0.143:19000';

   const discovery = {
     authorizationEndpoint: 'https://login.uber.com/oauth/v2/authorize',
     tokenEndpoint: 'https://login.uber.com/oauth/v2/token'
   };

   const [request, response, promptAsync] = AuthSession.useAuthRequest(
     {
       clientId: 'agBBuTEc_jVekcVWgfCE5Q9yT04Oo15Y',
       redirectUri: 'https://auth.expo.io/@pexe134/mobile'
     },
     discovery
   );
     */
  const [options, setOptions] = useState<OptionsProps[]>([]);
  const [selectedOption, setSelectedOption] = useState<OptionsProps>();

  const [originLatitude, setOriginLatitude] = useState(0);
  const [originLongitude, setOriginLongitude] = useState(0);

  const [addressOrigin, setAddressOrigin] = useState('');

  // Estados que armazenam a latitude e longitude do destino selecionado

  const [destinationLatitude, setDestinationLatitude] = useState(0);
  const [destinationLongitude, setDestinationLongitude] = useState(0);

  const [addressDestiny, setAddressDestiny] = useState('');

  // Estado que valida se há destino selecionado ou não

  const [destinationReady, setDestinationReady] = useState(false);

  // Estados para manipular a latitudeDelta e longitudeDelta

  const [MylatitudeDelta, setMyLatitudeDelta] = useState(0.0143);
  const [MylongitudeDelta, setMyLongitudeDelta] = useState(0.0134);

  const [distance, setDistance] = useState(0);
  // const [uberXPrice, setUberXPrice] = useState(0);

  // const [nineNinePrice, setNineNinePrice] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  const [erroMsg, setErrorMsg] = useState('');
  const sheetRef = useRef<BottomSheet>(null);

  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ['3%', '40%'];

  const mapStyle = [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: 15
        },
        {
          color: '#FFFFFF'
        },
        {
          lightness: 15
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#000000'
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry',
      stylers: [
        {
          color: '#080d18'
        },
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#FFFFFF'
        }
      ]
    },
    {
      featureType: 'administrative.province',
      elementType: 'geometry',
      stylers: [
        {
          color: '#080d18'
        },
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#FFFFFF'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#080d18'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#080d18'
        },
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#080d18'
        }
      ]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#080d18'
        }
      ]
    },
    {
      featureType: 'landscape.natural.landcover',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#080d18'
        },
        {
          visibility: 'on'
        }

      ]
    },
    {
      featureType: 'landscape.natural.terrain',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#080d18'
        },
        {
          visibility: 'on'
        }

      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          lightness: -21
        },
        {
          color: '#0f172a'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#181818'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'simplified'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'simplified'
        },
        {
          color: '#3c3c3c'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          lightness: 29
        },
        {
          weight: 0.2
        }
      ]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [
        {
          color: '#4e4e4e'
        },
        {
          visibility: 'simplified'
        },
        {
          lightness: '-20'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'simplified'
        },
        {
          color: '#373737'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'geometry',
      stylers: [
        {
          lightness: 16
        },
        {
          color: '#313131'
        },
        {
          visibility: 'simplified'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#212121'
        },
        {
          lightness: 19
        },
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          visibility: 'on'
        }
      ]
    }
  ];

  const navigation = useNavigation<MapPageProps>();

  const { signOut } = useAuth();

  async function reverseDestinationGeolocation() {
    const reverseDestinyGeolocation = await Location.reverseGeocodeAsync({
      latitude: destinationLatitude,
      longitude: destinationLongitude
    });
    const address = `${reverseDestinyGeolocation.map(item => item.street)}, ${reverseDestinyGeolocation.map(item => item.district)} - ${reverseDestinyGeolocation.map(item => item.subregion)}`;
    setAddressDestiny(address);
    console.log(reverseDestinyGeolocation);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to acess location was denied');
      }

      const location = await Location.getCurrentPositionAsync({});
      const reverseOriginGeolocation = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });

      // const reverseDestinyGeolocation = await Location.reverseGeocodeAsync({
      //  latitude: destinationLatitude,
      //  longitude: destinationLongitude
      // });

      setAddressOrigin(`${reverseOriginGeolocation.map(item => item.street)}, ${reverseOriginGeolocation.map(item => item.district)} - ${reverseOriginGeolocation.map(item => item.subregion)}`);

      console.log(addressOrigin);

      setOriginLatitude(location.coords.latitude);
      setOriginLongitude(location.coords.longitude);
    })();

    /*
    (async () => {
      try {
        if (response?.type === 'success') {
          const { code } = response.params;
          console.log({ code });
          const token = await axios.post('https://login.uber.com/oauth/v2/token', {
            params: {
              grantType,
              clientId,
              clientSecret,
              scope: 'profile'
            }
          });
          console.log(token);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    */
  }, [addressOrigin, addressDestiny]);
  return (
    <>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <MapView
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1, width: '100%', height: '100%' }}
          region={{
            latitude: originLatitude,
            longitude: originLongitude,
            latitudeDelta: MylatitudeDelta,
            longitudeDelta: MylongitudeDelta
          }}
          showsUserLocation
          loadingEnabled

        >
          <Marker
            pinColor='#F7B538'
            coordinate={{
              latitude: originLatitude,
              longitude: originLongitude
            }}
          />
          <Marker
            pinColor='#F7B538'
            coordinate={{
              latitude: destinationLatitude,
              longitude: destinationLongitude
            }}
          />
          {(destinationReady === true) &&
            <MapViewsDirections
              origin={{
                latitude: originLatitude,
                longitude: originLongitude
              }}
              destination={{
                latitude: destinationLatitude,
                longitude: destinationLongitude
              }}

              apikey='AIzaSyBqmuKCeIVE5UqtGEVh8VjupY-leuye8Vk'
              strokeWidth={6}
              strokeColor={'#F7B538'}
              onStart={(params) => {
                console.log(`Origem: ${params.origin} | Destino: ${params.destination} `);
              }}
              onReady={result => {
                setMyLatitudeDelta(0.1243);
                setMyLongitudeDelta(0.1234);
                setDistance(result.distance);
                setOptions(
                  [{
                    title: 'UberX',
                    priceEstimate: `R$ ${(result.distance * 1.4).toFixed(2).replace('.', ',')}`,
                    timeEstimate: '20 min'
                  },
                  {
                    title: '99 Taxi',
                    priceEstimate: `R$ ${(result.distance * 1.17).toFixed(2).replace('.', ',')}`,
                    timeEstimate: '15 min'
                  },
                  {
                    title: 'Cabify',
                    priceEstimate: `R$ ${(result.distance * 1.3).toFixed(2).replace('.', ',')}`,
                    timeEstimate: '25 min'
                  }
                  ]
                );

                sheetRef.current?.expand();
              }}
            />
          }
        </MapView>

        <PlaceView>
          <GooglePlacesAutocomplete
            placeholder="Para onde?"
            onPress={(data, details = null) => {
              if ((data && details) == null || undefined) {
                console.log('destino não informado!');
              } else {
                if (details) {
                  setDestinationLatitude(details.geometry.location.lat);
                  setDestinationLongitude(details.geometry.location.lng);
                  setDestinationReady(true);
                }
              }
            }}
            query={{
              key: 'AIzaSyBqmuKCeIVE5UqtGEVh8VjupY-leuye8Vk',
              language: 'pt-BR'
            }}
            enablePoweredByContainer={false}
            styles={{
              listView: { height: 300 },
              textInput: {
                height: 50,
                borderWidth: 0.5,
                borderColor: 'black'
              }

            }}
            fetchDetails={true}

          />
        </PlaceView>

        <DrawerOpenButton onPress={() => navigation.toggleDrawer()}>
          <Feather name="menu" size={30} color="#FFFFFFFF" />
        </DrawerOpenButton>

        <BottomSheet
          animateOnMount
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          onClose={() => setIsOpen(false)}
          handleStyle={{
            backgroundColor: '#FFFFFF'
          }}
          handleIndicatorStyle={{
            backgroundColor: '#1b2c52'
          }}
        >
          <Bottom>
            {(destinationReady === true) &&
              <Options>
                <Title>
                  Escolha uma opção
                </Title>
                <CardsOptions>
                  <OptionsList
                    horizontal
                    data={options}
                    renderItem={({ item, index }) => (
                      <RidesCard
                        title={item.title}
                        priceEstimate={item.priceEstimate}
                        timeEstimate={item.timeEstimate}
                        onPress={() => {
                          reverseDestinationGeolocation();
                          setSelectedOption(item);
                          console.log(selectedOption);
                          setModalVisible(true);
                        }

                        }
                      />
                    )}
                  />
                </CardsOptions>
              </Options>
            }
          </Bottom>

        </BottomSheet>

      </Container >

      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        onConfirm={() => {
          navigation.navigate('WaitingPage');
          setModalVisible(false);
        }}
      >

        <ModalText>
          Origem
        </ModalText>
        <GooglePlacesAutocomplete
          placeholder={addressOrigin}
          query={{
            key: 'AIzaSyBqmuKCeIVE5UqtGEVh8VjupY-leuye8Vk',
            language: 'pt-BR'
          }}
          styles={{
            listView: { height: 300 },
            textInput: {
              width: 50,
              height: 50,
              borderWidth: 0.5,
              borderColor: 'black'
            }

          }}
        />
        <ModalText>
          Destino
        </ModalText>
        <GooglePlacesAutocomplete
          placeholder={addressDestiny}
          query={{
            key: 'AIzaSyBqmuKCeIVE5UqtGEVh8VjupY-leuye8Vk',
            language: 'pt-BR'
          }}
          styles={{
            listView: { height: 300 },
            textInput: {
              width: 50,
              height: 50,
              borderWidth: 0.5,
              borderColor: 'black'
            }

          }}
        />
        <ModalDetails>
          <ModalText>
            Opção
          </ModalText>
          <ModalText>
            Valor
          </ModalText>
        </ModalDetails>

        <ModalDetails>
          <ModalApp>
            {selectedOption?.title}
          </ModalApp>
          <ModalPrice>
            {selectedOption?.priceEstimate}
          </ModalPrice>
        </ModalDetails>
      </Modal>
    </>
  );
}
