import {useState} from "react"
import {View, Text, StyleSheet, Alert} from "react-native"
import {router} from "expo-router"

import {Button} from "@/components/button"
import {Input} from "@/components/input"

export default function Index(){
  const [name, setName] = useState("")

  
  function handleNext(){
    if(name.length<3){
      Alert.alert("O nome deve ter no mínimo 3 digitos")
    } else{
      router.navigate("/dashboard")
    }
  
  }
  

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {name}</Text>

      <Input onChangeText={setName}/>

      <Button title="Continuar" onPress={handleNext}/>
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