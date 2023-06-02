import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
export {SimpleButton};
const MyButton = ({title,onPress})=>{
  return(
    <View>
    <TouchableOpacity style = {styles.button} onPress = {onPress}>
    <Text style = {styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
};

const SimpleButton = ({title,onPress})=>{
  return(
    <View>
    <TouchableOpacity onPress = {onPress}>
    <Text style = {styles.simplebutton}>{title}</Text>
    </TouchableOpacity>
    </View>  
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 15,

  },
  button:{
    borderWidth:2,
    borderColor:"#738599",
    width:'50%',
    alignSelf:'center',
    textAlign:"center",
    borderRadius:20,
    backgroundColor:"#99b0c9",
    marginTop:20
  },
  simplebutton:{
    fontSize:12,
    color:'#1e90ff',
    margin:10
  }
})
export default MyButton;

