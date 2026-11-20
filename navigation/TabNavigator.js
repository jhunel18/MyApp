import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Test from '../screens/Test';
import SalaryCalculatorScreen from '../screens/SalaryCalculatorScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name = "Test" component={Test}/>
      <Tab.Screen name = "Salary Calculator" component={SalaryCalculatorScreen}/>
    </Tab.Navigator>
  );
}
