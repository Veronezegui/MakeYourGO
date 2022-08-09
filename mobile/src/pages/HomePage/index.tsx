import React, { useState } from 'react'

import { Container, Form, Buttons, View } from './styles'
import Makeyourgologo from '../../assets/makeyourgo.svg'

import { FontAwesome5 } from '@expo/vector-icons'

import { TouchableOpacity } from 'react-native'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function HomePage ({ navigation }: any) {
  const [isPassword, setIsPassword] = useState(true)
  return (
        <Container>
            <Makeyourgologo />
            <Form>
                <Input title="Email"/>
                <Input
                    title='senha'
                    secureTextEntry={isPassword}
                  />
                <View>
                    <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
                      { isPassword === true
                        ? <FontAwesome5 name ='eye-slash' size={24} color="black" />
                        : <FontAwesome5 name ='eye' size={24} color="black" />
                      }
                    </TouchableOpacity>
                </View>
              <Buttons>
                <Button title="Entrar" />
                <Button title="Cadastrar" navegator={() => { navigation.navigate('RegisterPage') }}/>
              </Buttons>
            </Form>

        </Container>
  )
}
