import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Error = ({children}) => {
    return (
        <View style={styles.error}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red'
    }
})
export default Error
