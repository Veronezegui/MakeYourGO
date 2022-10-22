/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

import { Container, Subtitle, Title } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://login.uber.com/oauth/v2/authorize",
  tokenEndpoint: "https://login.uber.com/oauth/v2/token",
  revocationEndpoint: "https://login.uber.com/oauth/v2/revoke",
};

export function LoginSocial() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "OXO0ubKeo015c1qzoL3kTTCNOYTNFxlp",
      redirectUri: makeRedirectUri({
        useProxy: true,
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;

      console.log(code);
    }
  }, [response]);

  return (
    <Container>
      <Title>
        Bem vindo, {"\n"}
        <Subtitle>Faça o login a senha {"\n"}para prosseguir !</Subtitle>
      </Title>

      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </Container>
  );
}
