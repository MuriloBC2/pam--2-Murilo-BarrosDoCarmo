import React from "react";
import { Button, TextInput, Text, View, ScrollView, Pressable } from "react-native";
import { styled } from "styled-components";

export const Body = styled(ScrollView)`
  background-color: #618cb6;
`;

export const Title = styled(Text)`
    color: black;
    font-size: 30px;
    text-align: center;
   margin-top: 10px;
`

export const Formulario = styled(View)`
  margin-top: 40px;
  border: 2px;
  border-color: black;
  border-radius: 9px;
  align-self: center;
  display: flex;
  width: 80%;
  justigy-self: center;
  background-color: #a0bcd9;
`;
export const Info = styled(Text)`
   color: black;
   font-size: 20px;
   text-align: center;
   margin-top: 10px;
   margin-bottom: 20px;
`

export const Input = styled(TextInput)`
  border: 1px;
  border-radius: 9px;
  padding: 10px;
  background-color: #efefef;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ForgotPassword = styled(Button) `
   margin-top: 10px;
   align-item: center 
    


`


