import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
class Card extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Image, { source: { uri: "https://vignette1.wikia.nocookie.net/spongefan/images/7/73/Spongebob_F.U.N.gif/revision/latest?cb=20100627112149" }, style: styles.image }),
            React.createElement(View, { style: styles.content },
                React.createElement(Text, { style: styles.title }, "Huge bear ate an human being!!!"),
                React.createElement(Text, { style: styles.snippet }, "And was killed by police"),
                React.createElement(TouchableOpacity, { onPress: () => console.log("inside") },
                    React.createElement(View, { style: styles.social },
                        React.createElement(Text, null, "From: oeddyo  "),
                        React.createElement(Text, null, "Liked: 397"))))));
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
});
export default Card;
//# sourceMappingURL=card.js.map