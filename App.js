import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import All from "./Screens/All";
import Business from "./Screens/Business";
import HealthScreen from "./Screens/Health";
import SportsScreen from "./Screens/Sports";
import TechScreen from "./Screens/Tech";
import { Icon } from "react-native-elements/dist/icons/Icon";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="All"
          component={All}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon type="feather" name="home" color={props.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Business"
          component={Business}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon type="feather" name="dollar-sign" color={props.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Health "
          component={HealthScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon type="feather" name="heart" color={props.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sports "
          component={SportsScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon
                type="ionicon"
                name="tennisball-outline"
                color={props.color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tech "
          component={TechScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon
                type="ionicon"
                name="hardware-chip-outline"
                color={props.color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
