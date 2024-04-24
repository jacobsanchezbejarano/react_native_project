import { useState } from 'react';
import { Alert, ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Pressable, Image} from 'react-native';
import { validateEmail } from '../utils'

export default function SubscribeScreen({navigation}) {
  const [email, onChangeEmail] = useState('');
  const [clicked, setClicked] = useState(false);

  const showAlert = () => {
    setClicked(true);
    onChangeEmail('');

    Alert.alert('Thanks for subscribing, stay tunned!');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView style={styles.container} keyboardDismissMode="on-drag">
  
          <Image style={styles.image} resizeMode="contain" source={require("../assets/little-lemon-logo-grey.png")} />
          <Text style={styles.mainText}>Subscribe to our newsletter for our lattest delicious recipes!</Text>
          
          <TextInput 
                  style={styles.input} 
                  value={email} 
                  placeholder={"Email"}
                  onChangeText={onChangeEmail} 
                  keyboardType={"email-address"}
              /> 
          <Pressable
            style={validateEmail(email) ? styles.button : styles.buttonDisabled}
            disabled={!validateEmail(email)}
            onPress={() => showAlert()}>
            <Text style={styles.buttonText}>
              Subscribe
            </Text>
          </Pressable>

        </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    padding: 20,
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  }, 
  image: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    marginTop: 25,
  },
  input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: '#000', 
    backgroundColor: 'white', 
    borderRadius: 10,
  },
  button: {
    padding: 10,
    margin: 12, 
    backgroundColor: '#495e57',
    borderRadius: 10,
    borderColor: '#000',
  },
  buttonDisabled: {
    padding: 10,
    margin: 12, 
    backgroundColor: '#495e57',
    borderRadius: 10,
    backgroundColor: '#bbb',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  textLoggedIn: {
    textAlign: 'center',
    color: '#EDEFEE',
    fontSize: 22,
  }
});

