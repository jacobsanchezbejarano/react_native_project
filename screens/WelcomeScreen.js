import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
          <View style={styles.container2}>
            <Image style={styles.image} resizeMode="contain" source={require("../assets/little-lemon-logo.png")} />
            <Text style={styles.main_text}>Little Lemon, your local Mediterranean Bistro</Text>
          </View>
          <Pressable style={styles.button}
                onPress={() => navigation.navigate('Subscribe')}>
                <Text style={styles.buttonText}>
                  Newsletter
                </Text>
          </Pressable>
        </View>;
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: .97,
    alignItems: "center",
    justifyContent: 'space-between',
  }, 
  container2: {
    display: "flex",
    flex: .75,
    alignItems: "center",
    justifyContent: 'center',
    width: '100%'
  }, 
  image: {
    height: 200,
    justifyContent: 'center',
  },
  main_text: {
    width: "70%",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#495e57",
    padding: 10,
    borderRadius: 10,
    width: "80%"
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  }
})