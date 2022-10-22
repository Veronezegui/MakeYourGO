/* eslint-disable keyword-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import React, { useEffect, useRef, useState } from "react";

import { Button } from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";

import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewsDirections from "react-native-maps-directions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Container, Bottom, PlaceView, DrawerOpenButton } from "./styles";
import BottomSheet from "@gorhom/bottom-sheet";

import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function MapPage() {
  // Estados que armazenam a latitude e longitude da posição atual do usuário
  const navigation = useNavigation();

  const [originLatitude, setOriginLatitude] = useState(0);
  const [originLongitude, setOriginLongitude] = useState(0);

  // Estados que armazenam a latitude e longitude do destino selecionado

  const [destinationLatitude, setDestinationLatitude] = useState(0);
  const [destinationLongitude, setDestinationLongitude] = useState(0);

  // Estado que valida se há destino selecionado ou não

  const [destinationReady, setDestinationReady] = useState(false);

  // Estados para manipular a latitudeDelta e longitudeDelta

  const [MylatitudeDelta, setMyLatitudeDelta] = useState(0.0143);
  const [MylongitudeDelta, setMyLongitudeDelta] = useState(0.0134);

  const [erroMsg, setErrorMsg] = useState("");
  const sheetRef = useRef<BottomSheet>(null);

  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["10%", "40%"];

  const { signOut } = useAuth();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to acess location was denied");
      }

      const location = await Location.getCurrentPositionAsync({});
      // setOrigin(JSON.stringify(location));
      setOriginLatitude(location.coords.latitude);
      setOriginLongitude(location.coords.longitude);
    })();
  }, []);

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1, width: "100%", height: "100%" }}
        region={{
          latitude: originLatitude,
          longitude: originLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
        loadingEnabled
      >
        <Marker
          pinColor="#FF7000"
          coordinate={{
            latitude: originLatitude,
            longitude: originLongitude,
          }}
        />
        <Marker
          pinColor="#FF7000"
          coordinate={{
            latitude: destinationLatitude,
            longitude: destinationLongitude,
          }}
        />
        {destinationReady === true && (
          <MapViewsDirections
            origin={{
              latitude: originLatitude,
              longitude: originLongitude,
            }}
            destination={{
              latitude: destinationLatitude,
              longitude: destinationLongitude,
            }}
            apikey="AIzaSyBqmuKCeIVE5UqtGEVh8VjupY-leuye8Vk"
            strokeWidth={6}
            strokeColor={"black"}
            onStart={(params) => {
              console.log(
                `Origem: ${params.origin} | Destino: ${params.destination} `
              );
            }}
            onReady={() => {
              setMyLatitudeDelta(0.1243);
              setMyLongitudeDelta(0.1234);
              sheetRef.current?.expand();
            }}
          />
        )}
      </MapView>

      <DrawerOpenButton onPress={() => navigation.toggleDrawer()}>
        <Feather name="menu" size={25} color="#262626" />
      </DrawerOpenButton>

      <PlaceView>
        <GooglePlacesAutocomplete
          placeholder="Para onde?"
          onPress={(data, details = null) => {
            if ((data && details) == null || undefined) {
              console.log("destino não informado!");
            } else {
              if (details) {
                setDestinationLatitude(details.geometry.location.lat);
                setDestinationLongitude(details.geometry.location.lng);
                setDestinationReady(true);
              }
            }
          }}
          query={{
            key: "AIzaSyBqmuKCeIVE5UqtGEVh8VjupY-leuye8Vk",
            language: "pt-BR",
          }}
          enablePoweredByContainer={false}
          styles={{
            listView: { height: 300 },
            textInput: {
              height: 50,
              borderWidth: 0.5,
              borderColor: "black",
            },
          }}
          fetchDetails={true}
        />
      </PlaceView>

      <BottomSheet
        animateOnMount
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        onClose={() => setIsOpen(false)}
      >
        <Bottom>
          <Button title="Sair" navegator={signOut} />
        </Bottom>
      </BottomSheet>
    </Container>
  );
}
