import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialIcons } from "@expo/vector-icons"

interface CityData {
  city: string
  date: string
  temp: string
  description: string
  humidity: string
  forecast: {
    min: string
    max: string
  }[]
}

const CityDetails = () => {
  const { cityName } = useLocalSearchParams<{ cityName: string }>()
  const [cityDetails, setCityDetails] = useState<CityData | null>(null)
  const router = useRouter()

  const handleData = async () => {
    try {
      const response = await fetch("https://climapp-api.vercel.app/api")
      const responseJSON: CityData[] = await response.json()
      const city = responseJSON.find((c) => c.city === cityName)
      setCityDetails(city || null)
    } catch (e) {
      console.log("Erro ao buscar dados da cidade:", e)
    }
  }

  useEffect(() => {
    handleData()
  }, [])

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={router.back} style={styles.headerIcon}>
        <MaterialIcons name="chevron-left" size={28} color="#fff" />
      </TouchableOpacity>

      {cityDetails && (
        <>
          {/* Título da cidade */}
          <View>
            <Text style={styles.headerTitle}>{cityDetails.city}</Text>
          </View>

          {/* Card principal */}
          <View style={styles.card}>
            {/* Cabeçalho do card */}
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderTitle}>Hoje</Text>
              <Text style={styles.cardHeaderTitle}>{cityDetails.date}</Text>
            </View>

            {/* Ícone do clima */}
            <View style={styles.cardBox}>
              <Image source={require("../assets/images/6122714.png")} style={styles.cardImage} />
            </View>

            {/* Temperatura e descrição */}
            <View style={{ alignItems: "center" }}>
              <Text style={styles.cardTemp}>{cityDetails.temp}</Text>
              <Text style={styles.cardDesc}>{cityDetails.description}</Text>
            </View>

            {/* Informações adicionais */}
            <View style={styles.rowBox}>
              <View style={styles.row}>
                <Image source={require("../assets/icons/umidade.png")} />
                <Text style={styles.rowTitle}>Umidade:</Text>
                <Text style={styles.rowValue}>{cityDetails.humidity}%</Text>
              </View>

              <View style={styles.row}>
                <Image source={require("../assets/icons/temp.png")} />
                <Text style={styles.rowTitle}>Max/Min:</Text>
                <Text style={styles.rowValue}>
                  {cityDetails.forecast[0].max} / {cityDetails.forecast[0].min}
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </LinearGradient>
  )
}

export default CityDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 80,
    gap: 40,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
  },
  card: {
    width: "100%",
    borderRadius: 24,
    backgroundColor: "#3363D6",
    padding: 16,
    gap: 24,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  cardHeaderTitle: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
    fontSize: 16,
  },
  headerIcon: {
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 10,
  },
  cardImage: {
    width: 71,
    height: 64,
  },
  cardTemp: {
    fontSize: 43,
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
  },
  cardDesc: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Montserrat_400Regular",
  },
  cardBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rowTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
  },
  rowValue: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    marginLeft: "auto",
  },
  rowBox: {
    gap: 12,
    marginTop: 16,
  },
})