import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <ScrollView style={{marginTop:10}}>
    <View style={styles.card}>
      <Text style={styles.titulo}>hello world!</Text>
      <Text style={styles.parag}>isso é um paragrafo </Text>
      <Text >isso é um paragrafo </Text>
      <Text style={styles.parag}>isso é um paragrafo </Text>
      <StatusBar style="auto" />
    </View>
    

    </ScrollView>
  );
}



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
