import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./css/Styles";
import {
  Feather,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollView horizontal={false}>
      <View style={styles.header}>
        <View style={styles.headericons}>
          <View>
            <Feather
              name="user"
              size={32}
              color="#fff"
              style={styles.headericonuser}
            />
          </View>

          <View style={styles.headericonsright}>
            <Ionicons name="md-eye-outline" size={28} color="#fff" />
            <Octicons name="question" size={23} color="#fff" />
            <MaterialCommunityIcons
              name="email-plus-outline"
              size={23}
              color="#fff"
            />
          </View>
        </View>
        <Text style={styles.txtuser}>Olá, Diego!</Text>
      </View>

      <View style={styles.account}>
        <View style={styles.accountline}>
          <Text style={styles.txtaccount}>Conta</Text>
          <Ionicons name="ios-chevron-forward" size={23} color="#000" />
        </View>
        <Text style={styles.txtvalue}>R$ 100.000.000</Text>
      </View>
      <ScrollView horizontal={true}>
      <View style={styles.nav}>
        <View style={styles.navitem}>
          <AntDesign
            name="antdesign"
            size={32}
            color="#000"
            style={styles.navitemicon}
          />
          <Text>Pix</Text>
        </View>

        <View style={styles.navitem}>
          <AntDesign
            name="barcode"
            size={32}
            color="#000"
            style={styles.navitemicon}
          />
          <Text>Pagar</Text>
        </View>

        <View style={styles.navitem}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color="black"
            style={styles.navitemicon}
          />
          <Text>Transferir</Text>
        </View>

        <View style={styles.navitem}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color="black"
            style={styles.navitemicon}
          />
          <Text>Depositar</Text>
        </View>

        <View style={styles.navitem}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color="black"
            style={styles.navitemicon}
          />
          <Text>Cobrar</Text>
        </View>

        <View style={styles.navitem}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color="black"
            style={styles.navitemicon}
          />
          <Text>Investir</Text>
        </View>

        <View style={styles.navitem}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color="black"
            style={styles.navitemicon}
          />
          <Text>Doação</Text>
        </View>

        <View style={styles.navitem}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color="black"
            style={styles.navitemicon}
          />
          <Text>Transferência Internacional</Text>
        </View>
      </View>
      </ScrollView>
      <View style={styles.card}>
        <MaterialCommunityIcons name="credit-card-multiple-outline" size={24} color="black"/>
        <Text style={styles.txtcard}>Meus cartões</Text>
      </View>

      
      <View style={styles.message}>
      <ScrollView horizontal={true}>
        <View style={styles.cxmsg}>
          <Text style={styles.txtmsg}>
            E você, o que vc fazer com o seu pedacinho? Decida agora!
          </Text>
        </View>

        <View style={styles.cxmsg}>
          <Text style={styles.txtmsg}>
            E você, o que vc fazer com o seu pedacinho? Decida agora!
          </Text>
        </View>

        <View style={styles.cxmsg}>
          <Text style={styles.txtmsg}>
            E você, o que vc fazer com o seu pedacinho? Decida agora!
          </Text>
        </View>
        </ScrollView>
      </View>
      <View style={styles.account}></View>
       <View style={styles.accountline}>
        <Text style={styles.txtaccount}>Cartão de crédito</Text>
        <Ionicons name="ios-chevron-forward" size={23} color="#000" />
        <Text>Fatura atual</Text>
        <Text style={styles.txtvalue}>R$ 3000000</Text>
        <Text style={styles.txtmsg}>
          Limite disponivel de  •••••••••••
        </Text>
       </View>
       <View style={styles.parcelar}>
        <Text style={styles.txtmsg}>Parcelar compras</Text>
       </View>
       </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}
