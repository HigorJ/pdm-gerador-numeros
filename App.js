import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [numeros, setNumeros] = useState([]);

  function gerarNumeros() {
    let numerosGerados = [];

    for(let i = 0; i < 6; i++) {
      let numeroGerado = Math.floor(Math.random() * 60 + 1);

      while(numerosGerados.indexOf(numeroGerado) != -1) {
        numeroGerado = Math.floor(Math.random() * 60 + 1)
      }

      numerosGerados.push(numeroGerado);
    }

    setNumeros(numerosGerados);
  }

  return (
    <View style={styles.container}>
      <Text>Gerador de Números</Text>
      <Text>{ numeros.map(numero => numero + " ") }</Text>

      <Button 
        title='Gerar números' 
        onPress={() => gerarNumeros()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
