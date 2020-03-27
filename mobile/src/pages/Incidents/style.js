import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerText: {
        color: '#737380',
        fontSize: 15,
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginTop: 48,
        fontWeight: 'bold',
        marginBottom: 16,
    },

    description: {
        color: '#737380',
        fontSize: 16,
        lineHeight: 24,
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#FFF',
    },

    incidentProperty: {
        color: '#41414d',
        fontSize: 14,
        fontWeight: 'bold',
    },

    incidentValue: {
        color: '#737380',
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
    },

    detailButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    detailButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
});