import React from "react";
import { Button, TextInput, Text, View, ScrollView, Image } from "react-native";
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

export const Buttom = styled(Button)`
   margin-top: 10px;
   align-item: center 
    width: 150px;
    height: 60px;
    border: 3px solid #315cfd;
    border-radius: 45px;
    transition: all 0.3s;
    cursor: pointer;
    background: white;
    font-size: 1.2em;
    font-weight: 550;
    font-family: 'Montserrat', sans-serif;
`;
export const Imgs = styled(Image)`
    margin-top: 15px;
    width: 140px;
    height: 100px
`
   


