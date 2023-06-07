import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Share,
} from "react-native";

const Data = [
  {
    id: 1,
    nomeTask: "Chat Mobile",
    prioridade: 1,
    users: [
      {
        id: 1,
        nome: "João",
      },
    ],
  },
  {
    id: 2,
    nomeTask: "Formulario de cadastro",
    prioridade: 1,
    users: [
      {
        id: 1,
        nome: "João",
      },
    ],
  },
  {
    id: 3,
    nomeTask: "Manutenção API",
    prioridade: 0,
    users: [
      {
        id: 1,
        nome: "João",
      },
    ],
  },
  {
    id: 4,
    nomeTask: "Criar filtro nos status",
    prioridade: 2,
    users: [
      {
        id: 1,
        nome: "João",
      },
    ],
  },
];

const compartilharInformacao = async (recebeItem) => {
  try {
    const mensagem = "Voce tem uma task " + recebeItem + " que precisa ser resolvida hoje!";

    await Share.share({
      message: mensagem,
    });
  } catch (error) {
    console.log(error);
  }
};


export default function App() {
  return (
    <SafeAreaView style={styles.containerView}>
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <View style={styles.profile}>
          <View style={styles.imagem}>
            <Image source={require("./assets/userphoto.png")} />
          </View>
          <View style={styles.saudacoes}>
            <Text style={styles.tituloMenor}>Olá Kanael</Text>
            <Text style={styles.tituloMaior}>Booom dia!</Text>
          </View>
          <View style={styles.imagemMenu}>
            <TouchableOpacity>
              <Image source={require("./assets/menu.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textTask}>
          <Text style={styles.textStyle}>Acompanhamento de TASK</Text>
        </View>

        <View style={styles.textTaskHoje}>
          <Text style={styles.textStyleHoje}>Task de hoje</Text>
        </View>

        <ScrollView vertical="true" style={styles.containerItems}>
          <FlatList
            style={styles.containerItemsFlat}
            data={Data}
            renderItem={({ item }) => (
              <View style={styles.items}>
                <View style={styles.itemsApresentacao}>
                  <View style={styles.usersparticipantes}>
                    <Text>Fotos</Text>
                  </View>
                  <View style={styles.tasknome}>
                    <Text style={styles.nomedatask}>{item.nomeTask}</Text>
                  </View>
                </View>
                <View style={styles.compartilhar}>
                  <TouchableOpacity onPress={() => compartilharInformacao(item.nomeTask)}>
                    <Image source={require("./assets/compartilharitem.png")} />
                  </TouchableOpacity>
                </View>

                <View style={styles.prioridadetask}></View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#2D2D2D",
  },
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  saudacoes: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  tituloMenor: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  tituloMaior: {
    fontSize: 34,
    color: "#fff",
  },
  imagemMenu: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textTask: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#9F9F9F",
  },
  textStyle: {
    fontSize: 29,
    color: "#fff",
    width: "70%",
  },
  textTaskHoje: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyleHoje: {
    fontSize: 19,
    color: "#fff",
    width: "70%",
  },
  containerItems: {
    height: "50%",
    width: "100%",
    flex: 1,
  },
  containerItemsFlat: {
    height: "50%",
    width: "100%",
    position: "relative",
    left: 50,
  },
  items: {
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#DBFD91",
    width: "90%",
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
  itemsApresentacao: {
    height: "100%",
    width: "70%",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  compartilhar: {
    height: "100%",
    width: "20%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  prioridadetask: {
    backgroundColor: "#40BB05",
    height: "100%",
    width: "10%",
  },
  usersparticipantes: {
    height: "40%",
    width: '100%'
  },
  nomedatask: {
    fontSize: 29,
    fontWeight: 700
  }
});
