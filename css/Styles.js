import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1.5,
    backgroundColor: "#8303d2",
    width: "100%",
  },
  headericons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
  },

  headericonsright: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 60,
  },
  headericonuser: {
    backgroundColor: "#9e29e7",
    padding: 15,
    borderRadius: 50,
    marginTop: 50,
  },
  txtuser: {
    color: "#fff",
    fontSize: 20,
    margin: 20,
  },

  money: {},
  account: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },

  accountline: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  txtaccount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  txtvalue: {
    fontSize: 20,
    margin: 30,
    fontWeight: "bold",
  },

  nav: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
  },

  navitemicon: {
    backgroundColor: "#efefef",
    padding: 20,
    borderRadius: 50,
    width: 70,
  },
  navitem: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    marginTop: 20,
  },

  card: {
    flex: 0.6,
    backgroundColor: "#fff",
    width: "80%",
    backgroundColor: "#eee",
    flexDirection:"row",
    padding: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 20,
  },
  txtcard:{
    fontSize: 15,
    marginLeft: 20,
  },
  message: {
    flex: 1,
    backgroundColor: "#fff",
    width:"100%",
    flexDirection: "row",
  },
  cxmsg:{
    width: "20%",
    backgroundColor:"#eee",
    borderRadius:10,
    padding:20,
    alignItems: "center",
    margin: 20,
  },
  txtmsg: {
    fontSize: 15,
  },
  footer: {},

  // Margem de 20px para todos os lados
  margin20: {
    margin: 20,
  },
  margin30: {
    margin: 30,
  },
});
