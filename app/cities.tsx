import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import citiesData from "../data/cities.json";

const Cities = () => {
    console.log(citiesData);
    return (
        <LinearGradient
            colors={["#00457D", "#05051F"]}
            style={styles.container}
        >
            <ScrollView>
                <View style={styles.scrollList}>
                    {citiesData.map((city, index) => (
                        <View key={index} style={styles.listItem}>
                            <Image style={styles.icon} source={require('../assets/images/6122714.png')}></Image>
                            <Text style={styles.cityName}>{city.city}</Text>
                            <Text style={styles.cityTemp}>{city.temp}°</Text>
                        </View>

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
    }
});