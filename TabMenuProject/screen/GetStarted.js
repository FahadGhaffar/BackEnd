import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    KeyboardAvoidingView,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    Image
} from 'react-native';

import { images } from '../constants/index.js'
import AIcon from 'react-native-vector-icons/AntDesign';

function GetStarted({ navigation, route }) {
    const goToChat = name => {
        navigation.navigate('login', {
            username: name,
        });
    };
    return (
        <View style={styles.cotentCenter}>


            <View style={styles.Welcomcotent}>
                <Image
                    style={styles.logo}
                    source={images.saylani_logo}
                />
                <Text style={styles.Greeding}>SAYLANI WELFARE</Text>
                <Text style={styles.StoreGreeding}>ONLINE DISCOUNT STORE</Text>
            </View>

            <View style={styles.loginpanel}>
                <KeyboardAvoidingView style={styles.loginpanelMainContainer}>


                    <View style={styles.loginpanelTextContainer}>
                        <Text style={styles.loginText}></Text>
                    </View>

                    <View style={styles.loginpanelFormContainer}>


                        {/* <Button
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
              style={styles.paddingTop}
            /> */}

                        <TouchableOpacity onPress={() => goToChat("Fahad")}
                            style={[styles.loginButton]}>
                            <Text style={styles.loginbuttonText}>Get Started</Text>
                        </TouchableOpacity>

                    </View>


                    {/* <View style={styles.loginpanelTextContainer}>
                        <View style={styles.createNSignUp}>
                            <Text style={styles.tCreateAnAccount}>Create an account?</Text>
                            <Text style={styles.tSignUp}>SignUp</Text>

                        </View>
                    </View> */}





                </KeyboardAvoidingView>

            </View>


        </View>
    );
}
const styles = StyleSheet.create({

    cotentCenter: { flex: 2, justifyContent: "center", backgroundColor: "#fff" },
    // cotentCenter1: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "green" },
    // cotentCenter2: { flex: 8, justifyContent: "center", backgroundColor: "yellow" },
    Welcomcotent: { flex: 2, justifyContent: "center", alignItems: 'center', backgroundColor: "#fff" },
    Greeding: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#61B846",
        paddingLeft: 35,
        paddingRight: 35

    },
    StoreGreeding: {
        fontSize: 20,
        fontWeight: '400',
        color: "#61B846",
        paddingLeft: 35,
        paddingRight: 35

    },
    logo: {
        display: 'flex',
        width: 170,
        height: 170,
        justifyContent: "center",
        alignItems: "center"
    },
    loginpanel: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-end",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: "green",
        shadowOffset: {
            width: -2,
            height: 24,
        },
        shadowOpacity: 0.70,
        shadowRadius: 3,

        elevation: 30,
    },
    loginpanelMainContainer: {
        flex: 1,
        paddingLeft: 35,
        paddingRight: 35
    },

    loginpanelTextContainer: {
        flex: 1,
        // backgroundColor: "green",


    },

    loginText: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 20,
        color: "#000"
    },
    loginpanelFormContainer: {
        flex: 1.5,
        // backgroundColor: "red",
        flexDirection: "column"
    },


    createNSignUp: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"


    },

    tCreateAnAccount: {
        fontSize: 20,
        fontWeight: "600"

    },

    tSignUp: {
        fontSize: 25,
        fontWeight: "bold"
    },

    paddingTop: {
        paddingTop: 20
    },
    loginButton: {
        elevation: 8,
        backgroundColor: "#61B846",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 20
    },
    loginbuttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
    // baseText: {
    //   fontFamily: "Cochin"
    // },
    // titleText: {
    //   fontSize: 20,
    //   fontWeight: "bold"
    // }
});

export default GetStarted;