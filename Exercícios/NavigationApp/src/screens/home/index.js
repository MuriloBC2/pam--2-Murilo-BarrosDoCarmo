import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


export default function  HomeScreen () {
  const navigation = useNavigation(); 

  return(
    <View style={Styles.Conteiner}>
        <View style={Styles.Logo}>
          <Image source={require('../../../assets/auth.png')} style={Styles.ImageHead}/>
          <Text style={Styles.TextHead}>Auth a Melhor empresa de tecnologia do Brasil</Text>
        </View>
        <View Style={Styles.ButtonsArea}>
          <TouchableOpacity style={styles.Buttom} onPress={()=> navigation.navigate("MemberScreen")}>Membros</TouchableOpacity>
          <TouchableOpacity style={styles.Buttom} onPress={()=> navigation.navigate("ProjectScreen")}>Projetos</TouchableOpacity>
        </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  Conteiner:{
    flex:1,
    backgroundColor: '#008f8C'
  },
})