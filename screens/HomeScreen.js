import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>Hello World! I am a programmer</Text>
      <Button title = "Go to Details" onPress={() => navigation.navigate('Test')}>

      </Button>
    </View>
  );
}
