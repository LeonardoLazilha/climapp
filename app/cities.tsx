import { View, Image, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import citiesData from "../data/cities.json";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";

const Cities = () => {

    const [search, setSearch] = useState("");
    const [filteredCities, setFilteredCities] = useState(citiesData);

    useEffect(() => {
        const results = citiesData.filter((city) =>
            city.city.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCities(results);
    }, [search]);

    const router = useRouter()


    return (
        <LinearGradient
            colors={["#00457D", "#05051F"]}
            style={styles.container}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a cidade"
                    placeholderTextColor={'#b4b4b4'}
                    value={search}
                    onChangeText={setSearch}
                />
                <MaterialIcons
                    name="search" size={18} color={'#fff'} />
            </View>
            <ScrollView>
                <View style={styles.scrollList}>
                    {filteredCities.map((city, index) => (
                        <TouchableOpacity 
                        key={index} 
                        style={styles.listItem}
                        onPress={() => {
                            router.push(`/${city.city}`)
                        }}
                        >
                            <Image style={styles.icon} source={require('../assets/images/6122714.png')} />
                            <Text style={styles.cityName}>
                                {city.city.replace(", ", " - ")}
                            </Text>
                            <Text style={styles.cityTemp}>{city.temp}°</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Cities;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        gap: 16,
        paddingTop: 60
    },
    scrollList: {
        gap: 16
    },
    listItem: {
        height: 63,
        width: "100%",
        backgroundColor: "rgba(255,255,255, 0.15)",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        borderRadius: 16,
        flexDirection: "row"
    },
    cityName: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_500Medium",
    },
    cityTemp: {
        color: '#fff',
        fontSize: 25,
        fontFamily: "Montserrat_700Bold",
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    inputContainer: {
        height: 36,
        width: '100%',
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    input: {
        color: '#fff',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16
    }
});