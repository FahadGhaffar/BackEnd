/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screen/Home';
import Chat from '../screen/Chat';
import VideoChat from '../screen/VideoChat';
import UserChat from '../screen/UserChat';
import Setting from '../screen/Setting';
import Profile from '../screen/Profile';
import Login from '../screen/Login';
import GetStarted from '../screen/GetStarted';
import Registration from '../screen/Registration';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';
import { images, icons } from '../constants/index.js'
import Cart from '../screen/Cart';
import OrderScreen from '../screen/OrderScreen';
import Forget from '../screen/Forget';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// For tab
function ChatStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="chat">
      <Stack.Screen name="NestedChat" component={Chat} />
      <Stack.Screen name="UserChat" component={UserChat} />
    </Stack.Navigator>
  );
}

function TabScreent() {
  return (


    <Tab.Navigator

      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName={'Home'}
    >
      <Tab.Screen
        options={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {

            return <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={icons.cart}
            />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
        name="chart"
        component={Cart}
      />

      <Tab.Screen
        options={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: 10,
                  marginTop: -50,
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        marginTop: -30,
                      }}
                      source={icons.homeicon}
                    />;
                  </Text>
                </View>
              </View>
            );
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={props => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={icons.profile}
            />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
        name="profile"
        component={Profile}
      />

    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <View></View>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{

        headerShown: false,
      }} initialRouteName={Home}>
        <Stack.Screen options={({ route }) => ({

          headerShown: false
        })} name="getstarted" component={GetStarted} />
        <Stack.Screen options={({ route }) => ({

          headerShown: false
        })} name="login" component={Login} />
        <Stack.Screen options={({ route }) => ({

          headerShown: false
        })} name="register" component={Registration} />
        <Stack.Screen options={({ route }) => ({

          headerShown: false
        })} name="home" component={TabScreent} />
        <Stack.Screen options={({ route }) => ({

          headerShown: false
        })} name="forget" component={Forget} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
