import React from 'react'
import { createStackNavigator  } from '@react-navigation/stack';
import HomeScreen from "../screens/Home"
import UsersProfileScreen from "../screens/UsersProfile"
import UserCommentsScreen from "../screens/Comments"
import PostScreen from "../screens/PostScreen"
import TopPostsScreen from "../screens/TopPostsScreen"
import TopUsersScreen from "../screens/TopUsersScreen"
import GenderScreen from "../screens/Gender"

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                backgroundColor: "#bb1e1e",                
            },                         
            headerTintColor: "white",
            headerBackTitle: "Back",
            }}
        >          
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            headerMode="screen"
            screenOptions={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'tomato' },
            }}
            options={{
              title: 'Home',              
            }}
          />
          <Stack.Screen 
            name="Profile"
            component={UsersProfileScreen}
            options={{
              title: 'User Profile',              
            }}
          />  
          <Stack.Screen 
            name="Comments"
            component={UserCommentsScreen}
            options={{
              title: 'Post Comments',              
            }}
          />    
          <Stack.Screen 
            name="Posts"
            component={PostScreen}
            options={{
              title: 'All Posts',              
            }}
          />
          <Stack.Screen 
            name="TopPosts"
            component={TopPostsScreen}
            options={{
              title: 'Most Trending Posts (By Likes)',              
            }}
          /> 
          <Stack.Screen 
            name="Gender"
            component={GenderScreen}
            options={{
              title: 'Users By Gender',              
            }}
          />
          <Stack.Screen 
            name="TopUsers"
            component={TopUsersScreen}
            options={{
              title: 'Top Users By Post Likes',              
            }}
          />                      
        </Stack.Navigator>
    )
}

export default StackNavigator
