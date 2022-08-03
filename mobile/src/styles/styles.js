import { StyleSheet } from "react-native";

const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    },
    boxLogin: {
      ...shadowStyle,
      backgroundColor: "#fff",
      width: '90%',
      padding: 10,
      borderRadius: 8,
      paddingVertical: 50,
    },
    title: {
      color: "#667",
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center",
    },
    label: {
      fontWeight: '800'
    },
    inputLogin: {
      marginTop: 40,
      marginHorizontal: 20
    },
    input: {
      borderColor: '#ddd',
      borderWidth: .6,
      marginVertical: 5,
      padding: 5,
      borderRadius: 4
    },
    btnAccess:{
      backgroundColor: '#FB745A',
      marginHorizontal: 20,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      borderRadius: 4,
      ...shadowStyle,
    },
    textBtn: {
      color: '#fff',
      fontWeight: '800',
      fontSize: 16
    },


    imageMain: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: 'center',
      backgroundColor: '#FB745A',
    },
    header: {
      backgroundColor: '#fff', 
      width: '100%', 
      padding: 10,
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    avatar: {
      borderRadius: 50,
      padding: 5,
      marginHorizontal: 10,
      backgroundColor: '#fff',
      ...shadowStyle,
    }
});

export default styles;