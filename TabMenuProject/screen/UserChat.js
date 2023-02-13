import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';
function UserChat({ navigation, route }) {
    const navigate = navigation.navigate;
    const username = route?.params?.username || '';
    useEffect(() => {
        navigation.getParent().setOptions({
            tabBarStyle: {
                display: 'none',
            },
        });
        navigation.setOptions({
            title: `${username}'s Chat`,
            headerRight: () => (
                <EIcon
                    onPress={() => navigate('Home')}
                    size={28}
                    color="#fff"
                    name="new-message"
                />
            ),
            headerLeft: () => (
                <AIcon
                    onPress={() => navigation.goBack()}
                    size={28}
                    color="#fff"
                    name="back"
                />
            ),
        });
    }, []);

    useEffect(() => {
        navigation.addListener('blur', () => {
            navigation.getParent().setOptions({
                tabBarStyle: {
                    display: 'flex',
                },
            });
        });
    }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            <Text>Chat</Text>
        </View>
    );
}

export default UserChat;
