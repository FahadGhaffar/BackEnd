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
    TouchableOpacity
} from 'react-native';


import AIcon from 'react-native-vector-icons/AntDesign';

const Forget = ({ navigation, route }) => {
    const goToChat = () => {
        navigation.navigate('login');
    };
    return (
        <View style={styles.cotentCenter}>

            {/* <View style={styles.cotentCenter1}><Text>Hello, world! good</Text></View>
      <View style={styles.cotentCenter2}><Greeding name="Ok" /></View>
      <View style={styles.cotentCenter1}><Text>Hello, world! good</Text></View> */}
            <View style={styles.Welcomcotent}>
                <Text style={styles.Greeding}>SAYLANI WELFARE</Text>
                <Text style={styles.StoreGreeding}>ONLINE DISCOUNT STORE</Text>
            </View>

            <View style={styles.loginpanel}>
                <KeyboardAvoidingView style={styles.loginpanelMainContainer}>


                    {/* <View style={styles.loginpanelTextContainer}>
                        <Text style={styles.loginText}></Text>
                    </View> */}

                    <KeyboardAvoidingView style={styles.loginpanelFormContainer}>
                        <TextInput editable maxLength={20} placeholder={"New Password"} style={[{
                            borderBottomColor: '#000000',
                            borderBottomWidth: 1,
                        }, styles.paddingTop]}></TextInput>

                        <TextInput editable maxLength={20} placeholder={"Confrim Passowrd"} style={[{
                            borderBottomColor: '#000000',
                            borderBottomWidth: 1,
                        }, styles.paddingTop]}></TextInput>
                        {/* <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}
                        >
                            <Text style={styles.tforget}>Forgot Password?</Text>
                        </TouchableOpacity> */}

                        {/* <Button
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
              style={styles.paddingTop}
            /> */}

                        <TouchableOpacity onPress={() => goToChat()}
                            style={styles.loginButton}>
                            <Text style={styles.loginbuttonText}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('register')}
                        >
                            <Text style={styles.tCreateAnAccount}>Don’t have an account? Register</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>


                    {/* <View style={styles.loginpanelTextContainer}> */}
                    {/* <KeyboardAvoidingView style={styles.createNSignUp}> */}
                    {/* <Text style={styles.tCreateAnAccount}>Don’t have an account? Register</Text> */}
                    {/* <Text style={styles.tSignUp}>SignUp</Text> */}

                    {/* </KeyboardAvoidingView> */}
                    {/* </View> */}





                </KeyboardAvoidingView>

            </View>


        </View>
    );
}
const styles = StyleSheet.create({

    cotentCenter: { flex: 1.2, justifyContent: "center", backgroundColor: "#fff" },
    // cotentCenter1: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "green" },
    // cotentCenter2: { flex: 8, justifyContent: "center", backgroundColor: "yellow" },
    Welcomcotent: { flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: "#fff" },
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

    loginpanel: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-end",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: "#61B846",
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
        color: "#61B846"
    },
    loginpanelFormContainer: {
        flex: 1.5,
        // backgroundColor: "red",
        flexDirection: "column",

    },


    createNSignUp: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"


    },

    tCreateAnAccount: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 10,
        marginLeft: 10

    },
    tforget: {
        fontSize: 15,
        fontWeight: "600",
        marginTop: 10,

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

export default Forget;