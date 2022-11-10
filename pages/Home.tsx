import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginView from "../module/LoginView";
import TaskListView from "../module/TaskListView";
import TaskDetailView from "../module/TaskDetailView";
import CartView from "../module/CartView";

const Stack = createNativeStackNavigator();

function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginView} />
                <Stack.Screen name="TaskList" component={TaskListView} />
                <Stack.Screen name="TaskDetail" component={TaskDetailView} />
                <Stack.Screen name="Cart" component={CartView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Home;
