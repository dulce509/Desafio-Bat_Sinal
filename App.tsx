import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image, ScrollView, Switch, Pressable } from 'react-native';


function CaixaGreen(){
  return(
    <View style ={{height:190, width:'100%', 
    backgroundColor:'green'}}> 
    </View>
  )
}


export default function App() {
  const[usuario, setUsuario] = useState('A')
  const [ligado, setLigado] = useState(true)

  function handleSwitch(){
    setLigado(!ligado)

  }
  return (
    <ScrollView>
      
    <View style={[styles.container,{backgroundColor: 'green'}]}>
      <CaixaGreen></CaixaGreen>
    <Switch value={ligado}
    onValueChange={handleSwitch}
    ></Switch>

       <Image 
       source={require('C:/Users/Dulce/OneDrive/Documentos/JavaScript -Dio/react_native BatSinal/expo_batSinal_app/assets/img batSinal.png')}
       style={{display: ligado ? 'flex' : 'none'}}
       
       />
        <Button 
        title="click"
       onPress={()=>{Alert.alert ('preencher usuario')}} />
      
       <TextInput
       style = {styles.input} 
       onChange={(text)=> setUsuario(text.nativeEvent.text)}
       keyboardType ='default'
       placeholder='digite seu nome completo'
       value = {usuario}>
       </TextInput>
       
       
       <View onTouchStart={(event)=>{
        Alert.alert('Toque', 'Clique iniciado')
       }}
        onTouchEnd={(event)=> {
        Alert.alert('Toque', 'Toque finalizado') 
        }}>

       </View>
        <TextInput
        style = {styles.input}
        onChange ={(text)=> setUsuario(text.nativeEvent.text)}
        keyboardType ='email-address'  
        placeholder='digite seu email'
        value = {usuario}>
        </TextInput>

        <Pressable>
         <Button 
        onPress={()=>{}} title ='continuar'/>
        </Pressable>
        <TextInput
       style = {styles.input}
       onChange={(text)=> setUsuario(text.nativeEvent.text)}
       keyboardType ='default'
       placeholder='digite localização atual'
       value = {usuario}>
      
        </TextInput>
        <Button 
        onPress={()=>{}} title ='Finalizado'/>

      <Text style = {[styles.texto, styles.border]}
        selectable ={true} 
        onPress={() => {console.log('pressionado')}}   
      >Ola!</Text>
      <StatusBar style="light" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 8,
    backgroundColor:'white'
  },
  border:{ 
    borderColor: 'red',
    borderWidth:3

  },
  texto:{
    fontSize:15,
    fontWeight:'bold',
    backgroundColor:'blue'
  },
  item:{
    backgroundColor:'#c8c2ffff',
    height:150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal:16,
    padding:25
  },
  title: {
    fontSize: 18
  },
  imagem:{
    width: '75%',
    borderWidth: 1,
    height:'85%'
  }
});
