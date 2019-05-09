import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { scale, moderateScale, verticalScale } from '../../global/scaling';

const styles = StyleSheet.create({
    mediaPlayerTopNavContainer: {
        minHeight: scale(40),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backButtonContainer: {
        padding: scale(8),
        margin: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    goBackText: {
        color: '#3c434f',
    },
    contentContainer: {
        height: verticalScale(600),
        padding: 10,
        paddingTop:40,
    },
    thumbnailContainer: {
        alignItems: 'center',
    },
    songThumbnailImgContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.48,
        shadowRadius: 10.00,
        elevation: 10,
    },
    songThumbnailImg: {
        height: 200,
        width: 200,
    },
    songTitleContainer: {
        padding: 4,
        paddingTop: 25,
    },
    songTitleText: {
        textShadowColor: '#b5b5b5',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 3,
        fontSize: scale(20),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5b5b5b',
    },
    songArtistContainer: {
        padding: 4,
        paddingTop: 10,
    },
    songArtistText: {
        textShadowColor: '#b5b5b5',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 3,
        fontSize: scale(15),
        textAlign: 'center',
        color: '#5b5b5b',
    },
    mediaPlayerActionContainer: {
        minHeight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});

export default styles;