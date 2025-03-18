import {View, Text, StyleSheet, Alert} from "react-native"

import {Button} from "../../components/button"

export default function Index(){
  function handleMessage(){
    const name = "Otávio"
  Alert.alert(`Olá, ${name}`)
  }

  return(
    <view style={styles.container}>
      <text style={styles.title}>Olá, Otávio</text>

      <Button/>   
    </view>
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