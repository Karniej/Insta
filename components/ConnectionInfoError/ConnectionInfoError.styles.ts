import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    networkErrorContainer: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: 'indianred',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    networkError: {
        textTransform: 'uppercase',
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10
    }
})
