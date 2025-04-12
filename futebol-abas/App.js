import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Escudo':
                  iconName = 'shield-outline';
                  break;
                case 'Jogadores':
                  iconName = 'people-outline';
                  break;
                case 'Títulos':
                  iconName = 'trophy-outline';
                  break;
                default:
                  iconName = 'ellipse-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#e50914',
            tabBarInactiveTintColor: 'gray',
            headerTitleAlign: 'center',
          })}
        >
          <Tab.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{ title: 'Time' }}
          />
          <Tab.Screen
            name="Jogadores"
            component={JogadoresScreen}
            options={{ title: 'Elenco' }}
          />
          <Tab.Screen
            name="Títulos"
            component={TitulosScreen}
            options={{ title: 'Conquistas' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;