import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { changeCount } from './actions/counts.js';
import { bindActionCreators } from 'redux';
// import { images, icons } from '../constants/index.js'
import { icons, images, SIZES, COLORS, FONTS } from '../constants/index.js'

const Cart = ({ navigation, route }) => {
    // const { order } = route.params;

    function getduplicationprodutect(addarray) {
        const myArray = addarray;

        const elementCounts = {};

        myArray.forEach(element => {
            elementCounts[element] = (elementCounts[element] || 0) + 1;
        });
        return elementCounts
        // console.log(elementCounts);
    }

    // let getorder = getduplicationprodutect(order);
    // console.log(getorder)

    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Noodles",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Drinks",
            icon: icons.drink,
        },

    ]
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "ByProgrammers Burger",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "ByProgrammers Pizza",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: images.hawaiian_pizza,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: images.pizza,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: images.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Mediterranean Chopped Salad ",
                    photo: images.salad,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "ByProgrammers Hotdogs",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "ByProgrammers Sushi",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: images.sushi,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "ByProgrammers Cuisine",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.kolo_mee,
                    description: "Noodles with char siu",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.sarawak_laksa,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.nasi_lemak,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani with Mutton",
                    photo: images.nasi_briyani_mutton,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "ByProgrammers Dessets",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.teh_c_peng,
                    description: "Three Layer Teh C Peng",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.ice_kacang,
                    description: "Shaved Ice with red beans",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: images.kek_lapis,
                    description: "Layer cakes",
                    calories: 300,
                    price: 20
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [counts, setCount] = React.useState(0)
    const [getproduct, setproduct] = React.useState([])

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }
    function getduplicationprodutect(addarray) {
        const myArray = addarray;

        const elementCounts = {};

        myArray.forEach(element => {
            elementCounts[element] = (elementCounts[element] || 0) + 1;
        });
        return elementCounts
        // console.log(elementCounts);
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    padding: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,
                    backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                    borderRadius: SIZES.radius,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: SIZES.padding,
                    ...styles.shadow
                }}
                onPress={() => onSelectCategory(item)}
            >
                <View
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </View>

                <Text
                    style={{
                        marginTop: SIZES.padding,
                        color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                        ...FONTS.body5
                    }}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }


    const renderItem2 = ({ item }) => (
        <TouchableOpacity
            style={{
                // marginBottom: SIZES.padding * 2
            }}
            onPress={() => {
                setCount(counts + 1)
                // getproduct.push(item.id)
                setproduct(arr => [...arr, item]);
                // const product = getproduct
                // setproduct(product.push(item.id))
                console.log(getproduct);
            }}
        // onPress={() => navigation.navigate("Restaurant", {
        //     item,
        //     currentLocation
        // })}
        >
            {/* Image */}

            <View style={{
                // marginBottom: SIZES.padding,
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: SIZES.padding,

            }}>
                {/* <View
                    style={{
                        marginBottom: SIZES.padding,
                        flexDirection: "row"

                    }} */}
                {/* > */}
                <Image
                    source={item.photo}
                    resizeMode="cover"
                    style={{
                        width: "20%",
                        height: 100,
                        borderRadius: SIZES.radius
                    }}
                />

                {/* <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        height: 50,
                        width: SIZES.width * 0.3,
                        backgroundColor: COLORS.white,
                        borderTopRightRadius: SIZES.radius,
                        borderBottomLeftRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...styles.shadow
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                </View> */}
                {/* </View> */}

                {/* Restaurant Info */}
                <View style={{
                    // marginBottom: SIZES.padding,
                    flexDirection: "column",
                    // marginRight: 100

                }}>
                    <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                    <View
                        style={{
                            marginTop: SIZES.padding,
                            flexDirection: 'row'
                        }}
                    >
                        {/* Rating */}
                        <Image
                            source={icons.star}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.primary,
                                // marginRight: 10
                            }}
                        />
                        <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
                    </View>
                </View>
                {/* Categories */}
                <View style={{
                    flexDirection: "column",

                }}>
                    <Text></Text>
                    <TouchableOpacity
                        onPress={() => {
                            setCount(counts + 1)
                            // getproduct.push(item.id)
                            setproduct(arr => [...arr, item.id]);
                            // const product = getproduct
                            // setproduct(product.push(item.id))
                            console.log(getproduct);
                        }}

                        style={[styles.loginButton]}>
                        <Text style={styles.loginbuttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.main_container}>
            <View style={styles.header}>
                <View style={styles.subheadings}>
                    <Text style={styles.Greeding}>Shopping</Text>
                    <Text style={styles.StoreGreeding}>Cart</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    // navigation.navigate("chart",
                    //     {
                    //         order: getproduct,
                    //     }
                    // )
                    navigation.navigate("chart")

                }}>
                    <Image

                        style={styles.logo}
                        source={icons.basket}
                    />
                    {/* {counts > 0 ? (
                        <View
                            style={{
                                position: 'absolute',
                                backgroundColor: 'red',
                                width: 25,
                                height: 25,
                                borderRadius: 15 / 2,
                                right: -5,
                                top: -5,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: "#FFFFFF",
                                    fontSize: 11,
                                }}>
                                {counts}
                            </Text>
                        </View>
                    ) : null} */}
                </TouchableOpacity>
            </View>

            {/* <KeyboardAvoidingView style={styles.heroContainer}>
                <Image
                    style={styles.hero}
                    source={images.grocery}
                />
                <Searchbar
                    style={styles.searchbar}
                    placeholder="Search"
                // onChangeText={onChangeSearch}
                // value={searchQuery}
                />
                <Text style={styles.showcategory}>Shop by Categery</Text>

            </KeyboardAvoidingView> */}
            {/* <View style={styles.horizontalListContainer}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View> */}
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.verticalListContainer}>
                    <FlatList
                        data={restaurants}
                        vertical
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={renderItem2}
                        style={{
                            height: 350,
                            // backgroundColor: 'red',
                            flexGrow: 0
                        }}
                        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }
                        }
                    />

                    <Image
                        source={images.line7}
                        // resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 10,
                            // borderRadius: SIZES.radius
                        }} />
                </View>


                <View style={{ flex: 1, flexDirection: "row" }} >
                    <KeyboardAvoidingView style={styles.loginpanelFormContainer}>
                        <TextInput editable maxLength={20} placeholder={"Full Name"} style={[{
                            borderBottomColor: '#000000',
                            borderBottomWidth: 1,
                        }, styles.paddingTop]}></TextInput>

                        <TextInput editable maxLength={20} placeholder={"Contact"} style={[{
                            borderBottomColor: '#000000',
                            borderBottomWidth: 1,
                        }, styles.paddingTop]}></TextInput>

                        <TextInput editable maxLength={20} placeholder={"Email"} style={[{
                            borderBottomColor: '#000000',
                            borderBottomWidth: 1,
                        }, styles.paddingTop]}></TextInput>


                        <TextInput editable maxLength={20} placeholder={"Password"} style={[{
                            borderBottomColor: '#000000',
                            borderBottomWidth: 1,
                        }, styles.paddingTop]}></TextInput>


                        {/* <Button
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
              style={styles.paddingTop}
            /> */}

                        <TouchableOpacity
                            // onPress={() => goToChat()}
                            style={styles.loginButton}>
                            <Text style={styles.loginbuttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('login')}
                        >
                            <Text style={styles.tCreateAnAccount}>Already have an account? Login</Text>
                        </TouchableOpacity> */}
                    </KeyboardAvoidingView>

                </View>
            </ScrollView>


        </View>
    );
}
const styles = StyleSheet.create({
    main_container: {
        flexDirection: "column",
        flex: 1,
        marginTop: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 75,


    },
    scrollViewContainer: {
        flex: 1
    },
    subheadings: {
        flexDirection: "column",
        // justifyContent: "space-between",
        height: 50
    },
    showcategory: {
        height: 50,
        marginTop: 10
    }
    , logo: {
        display: 'flex',
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    Greeding: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#61B846",
        // paddingLeft: 35,
        // paddingRight: 35

    },
    StoreGreeding: {
        fontSize: 15,
        fontWeight: '400',
        color: "#61B846",
        // paddingLeft: 35,
        // paddingRight: 35

    },
    heroContainer: { flex: 2 },
    hero: {
        display: 'flex',
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    horizontalListContainer: { flex: 1 },
    searchbar: {
        marginTop: 5,
        borderRadius: 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    verticalListContainer: { flex: 2, },
    loginButton: {
        elevation: 8,
        backgroundColor: "#61B846",
        borderRadius: 30,
        width: 30,
        height: 30

        // paddingVertical: 10,
        // paddingHorizontal: 12,
        // marginTop: 20
    },
    loginbuttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
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
    },
    loginpanelFormContainer: {
        flex: 1.5,
        // backgroundColor: "red",
        flexDirection: "column",

    }


});

export default Cart;