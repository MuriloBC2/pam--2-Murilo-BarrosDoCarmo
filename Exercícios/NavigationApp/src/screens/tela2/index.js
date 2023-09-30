import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


export default function  MembersScreen () {
  const navigation = useNavigation(); 

  return (
    <View style={Styles.Conteiner}>
      <View style={styles.header}>
        <Text style={styles.header1}>Membros Auth</Text>
        <Text style={styles.header2}>Equipe formada por:</Text>
      </View>
      <View style={styles.documentationStyle}>
        <Text style={styles.documentationHeader}>Documentação:</Text>
        <Pressable on onPress={() => (hreaf = "https://github.com/digxz")}>
          <Image source={require("../../../assets/Members/Diego.jpeg")} style={styles.documentationImage}
          />
          <Text style={styles.documentationText}>Diego Castellini</Text>
        </Pressable>
      </View>
    </View>
  );
}