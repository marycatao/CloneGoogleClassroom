import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/login/login';
import Turma from '../screen/turma/turma';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= "Login" component={Login} />
                <Stack.Screen name = "Turmas" component={Turma} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNavigation;