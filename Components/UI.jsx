import { ImageBackground } from "react-native"
import { TNavBar, TicTacToe } from "./TicTacToe"
import { styles } from "./CSS/Css"

export const UserInterface = ({navigation}) => {

    return <>
                <ImageBackground style={styles.HeroImg} source={{uri: 'https://drive.google.com/uc?export=view&id=1HOw_qN2XOvNCYhEpookLJSQAI58r4utj'}} >
            <TNavBar/>
                <TicTacToe/>
            </ImageBackground>
        </>
}