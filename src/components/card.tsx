import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

interface Props { }
interface State { }
class Card extends React.Component<Props, State>{
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: "https://vignette1.wikia.nocookie.net/spongefan/images/7/73/Spongebob_F.U.N.gif/revision/latest?cb=20100627112149" }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Huge bear ate an human being!!!</Text>
          <Text style={styles.snippet}>And was killed by police</Text>
          <TouchableOpacity onPress={() => console.log("inside")}>
            <View style={styles.social}>
              <Text>From: oeddyo  </Text>
              <Text>Liked: 397</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 8
  },
  image: {
    borderRadius: 44,
    height: 88,
    width: 88,
    flex: 1
  },
  content: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "red"
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    margin: 5
  },
  snippet: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: "400"
  },

  social: {
    backgroundColor: "green",
    margin: 5,
    flexDirection: "row"
  }
})

export default Card