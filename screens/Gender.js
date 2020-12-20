import React from 'react'
import Gender from "../components/UserByGender"
import HeaderItems from "../components/HeaderItems"
import {View, StyleSheet} from "react-native"

const GenderContainer = ({route}) => {
    return (
       <View style={styles.container}>
        <HeaderItems style={styles.header} />
        <Gender gender={route.params.gender} />
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

export default GenderContainer
