import React from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const handlePress = () => {
    Alert.alert("Spoiler", "LFL, Honeymoon, Chemtrails, NFR, Ultraviolence");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Top 5 álbuns</Text>
        <Text style={{ fontSize: 40 }}>Lana Del Rey</Text>

        <Button title="SPOILER" onPress={handlePress} />

        {/* Lust For Life */}
        <Text style={{ fontSize: 30 }}>5 - Lust For Life</Text>
        <Image
          source={require("./assets/Imagens/lfl.png")}
          style={{ height: 400, width: 400 }}
        />
        <Text style={{ fontSize: 20 }}>
          Lust for Life é o quinto álbum de estúdio gravado pela cantora e
          compositora americana Lana Del Rey.
        </Text>

        {/* Honeymoon */}
        <Text style={{ fontSize: 30 }}>4 - Honeymoon</Text>
        <Image
          source={require("./assets/Imagens/honeymoon.jpg")}
          style={{ height: 400, width: 400 }}
        />
        <Text style={{ fontSize: 20 }}>
          Honeymoon é o quarto álbum de estúdio da cantora americana Lana Del
          Rey.
        </Text>

        {/* Chemtrails */}
        <Text style={{ fontSize: 30 }}>
          3 - Chemtrails Over The Country Club
        </Text>
        <Image
          source={require("./assets/Imagens/chem.jpg")}
          style={{ height: 400, width: 400 }}
        />
        <Text style={{ fontSize: 20 }}>
          Chemtrails over the Country Club é o sétimo álbum de estúdio de Lana
          Del Rey.
        </Text>

        {/* NFR */}
        <Text style={{ fontSize: 30 }}>2 - Norman F*cking Rockwell!</Text>
        <Image
          source={require("./assets/Imagens/nfr.png")}
          style={{ height: 400, width: 400 }}
        />
        <Text style={{ fontSize: 20 }}>
          Norman Fucking Rockwell! é o sexto álbum de estúdio da cantora
          norte-americana Lana Del Rey.
        </Text>

        {/* Ultraviolence */}
        <Text style={{ fontSize: 30 }}>1 - Ultraviolence</Text>
        <Image
          source={require("./assets/Imagens/ultraviolence.jpg")}
          style={{ height: 400, width: 400 }}
        />
        <Text style={{ fontSize: 20 }}>
          Ultraviolence é o terceiro álbum de estúdio da artista musical
          norte-americana Lana Del Rey.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
