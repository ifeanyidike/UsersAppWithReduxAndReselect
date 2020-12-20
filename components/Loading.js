import React from 'react'
import {View, StyleSheet, ActivityIndicator} from "react-native"

const Loading = () => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer:{
      flex: 1,
      marginTop: 100,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'      
    },
    
})

export default Loading
