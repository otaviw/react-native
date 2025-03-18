import {View, Text, StyleSheet, Alert} from "react-native"

import {Button} from "../components/button"

export default function Index(){
  function handleMessage(){
    const name = "Otávio"
  Alert.alert(`Olá, ${name}`)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Otávio</Text>
      <Button/>
      <Button/>   
    </View>
  )
  
}

const styles = StyleSheet.create({
  container:{
    
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 16,
  },
  
  title: {
    color: "#453467", 
    fontSize: 24,
    fontWeight: "bold"
  }
})