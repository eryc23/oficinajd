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
    image: {
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
    container: {
        width: '100%', 
        flex: 1
    },
    footer: {
        paddingVertical: 10,
        backgroundColor: '#fff', 
        width: '100%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around'
    },
    avatar: {
        borderRadius: 50,
        padding: 5,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        ...shadowStyle,
    },
    profileDetails:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    title: {
        color: "#667",
        fontSize: 18,
        fontWeight: "bold"
    },
    btnSend: {
        margin: 2,
        padding: 10, 
        backgroundColor: '#fff', 
        borderColor: '#c1c1c14a',
        borderWidth: 1,
        borderRadius: 30
    },
    message: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
        margin: 4,
    },
    ballon: {
        width: '75%',
        borderRadius: 8,
        padding: 8,
        ...shadowStyle,
    },
    nameStyle: {
        fontWeight: '800',
        fontSize: 13,
        marginRight: 20
    },
    dateStyle: {
        fontSize: 10,
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginTop: 15
    }
})

export default styles;