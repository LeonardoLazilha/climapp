import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient 
      style={styles.container} 
      colors={["#00457D", "#05051F"]}
    >

    <Image source={require('../assets/images/Logo.png')}/>
    <Image source={require('../assets/images/weather.png')}/>

    <Text style={styles.title}>Boas-vindas!</Text>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonTitle}>Entrar</Text>
    </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 130,
    paddingVertical: 79,
    paddingHorizontal: 32
  },
  title: {
    fontSize: 25,
    color: '#fff',
    fontFamily: "Montserrat_400Regular"
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#7693FF',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  buttonTitle: {
    color: '#01080E',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Montserrat_600SemiBold"
  }
});