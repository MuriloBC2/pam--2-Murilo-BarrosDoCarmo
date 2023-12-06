import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { database } from './src/config/firebase';

export default function App() {
  const [contatos, setContatos] = useState([])

  useEffect(()=>{
    database.collection('contatos').onSnapshot((query)=>{
      const list = []
      query.forEach((doc)=>{
        list.push(doc.data)
      })
      setContatos(list)
    })
  })
  return (
    <View style={styles.container}>
     {contatos.map((contatos)=>{
      return <Text key={contatos.numeros}>{contatos.numeros}</Text>
     }}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
