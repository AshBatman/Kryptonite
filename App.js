import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import { SCREENS } from './src/constants';
import { colors } from './src/common/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
          },
          headerLeft: null,
          headerTitle: (props) => <Header {...props} />,
          cardStyle: { backgroundColor: colors.WHITE },
        }}>
        <Stack.Screen
          name={SCREENS.HOME}
          component={HomePage}
          options={{ title: SCREENS.HOME, header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}