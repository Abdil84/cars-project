import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = props => {
    const { buttonStyle, textStyle } = styles;
    
    return (
        <TouchableOpacity onPress={props.pressed} style={buttonStyle}>
            <Text style={textStyle}>Click me</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        paddingTop: 6,
        paddingBottom: 6,
        color: 'white'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#54BAB9',
        borderWidth: 1,
        borderColor: 'gainsboro',
        marginLeft: 7,
        marginRight: 7

    }
}

export default Button;