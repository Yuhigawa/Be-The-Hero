import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#FFF',
        marginTop: 10,
    },

    incidentProperty: {
        color: '#41414d',
        fontSize: 14,
        marginTop: 24,
        fontWeight: 'bold',
    },

    incidentValue: {
        color: '#737380',
        fontSize: 15,
        marginTop: 8,
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#FFF',
        marginTop: 0,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
})