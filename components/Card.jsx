import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Card = () => {
  return (
    <>
        <View style={styles.card}>
      <Text style={styles.titulo}>hello world!</Text>
      <Text >isso é um paragrafo </Text>
      <Text >isso é um paragrafo </Text>
      <Text >isso é um paragrafo </Text>
      </View>
    </>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      borderColor: 'blue',
      borderStyle: 'solid',
      borderWidth: 2,
    },
    titulo: {
      color: 'red',
      fontSize: 30,
      padding: 20,
      marginBottom: 20,
      borderBottomColor: 'red',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      textAlign: 'center',
      backgroundColor: 'black',
    },
    parag: {
      fontSize: 20,
    }
    
  });