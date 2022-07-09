import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Badge({value, status, badgeStyle}) {
    const colorStyle = StyleSheet.create({
        colorStyle: {
            backgroundColor: status
        }
    }).colorStyle;

    return (
        <View style={[badgeStyle, colorStyle]}>
            <Text style={{padding: "4px", borderRadius: "5px"}}>{ value }</Text>
        </View>
    )
}