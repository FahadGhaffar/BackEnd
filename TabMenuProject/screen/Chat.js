
import React, { useState, useEffect } from "react";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';

function Chat({ navigation, route }) {
    const goToChat = name => {
        navigation.navigate('UserChat', {
            username: name,
        });
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32 }}>Chats</Text>
            <TouchableOpacity
                onPress={() => goToChat('Ghous')}
                style={{
                    backgroundColor: 'orange',
                    width: '80%',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                }}>
                <Text style={{ color: '#fff' }}>Chat With Ghous</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goToChat('Ahmed')}
                style={{
                    backgroundColor: 'orange',
                    width: '80%',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{ color: '#fff' }}>Chat With Ahmed</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Chat;