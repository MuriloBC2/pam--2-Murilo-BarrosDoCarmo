import React from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";

import {
  Body,
  Title,
  Info,
  Formulario,
  Input,
  Buttom,
  Imgs, 
} from "./style.js";


const Login = () => {
  return (
    <Body>
      <Imgs source={require("./assets/user.png")}></Imgs>
      <Formulario>
        <Title>Bem vindo</Title>
        <Input
          placeholder="Nome Completo: "
          placeholderTextColor={"#B5B5B5"}
        ></Input>
        <Input placeholder="Email: " placeholderTextColor={"#B5B5B5"}></Input>
        <Input placeholder="Senha: " placeholderTextColor={"#B5B5B5"}></Input>
        <Buttom title="Fazer Login"></Buttom>
      </Formulario>
    </Body>
  );
};

export default Login;