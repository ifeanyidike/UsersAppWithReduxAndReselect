import React from 'react';
import {
    StyleSheet, 
    View 
} from 'react-native';
import HomeHeader from "../components/HomeHeader"
import UsersList from "../components/Users"
import {listAllUsers} from "../redux/actions/userActions"

const Home = ({navigation}) => {    
    
    return (                                           
        <View style={styles.container}>
            <HomeHeader />
            <UsersList navigation={navigation} listUsers={listAllUsers} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home
