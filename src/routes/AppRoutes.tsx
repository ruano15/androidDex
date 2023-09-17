import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Kanto from "../views/kanto/Kanto"
import Home from "../views/home/Home"
import Jotho from "../views/jotho/Jotho"
import Hoenn from "../views/hoenn/Hoenn"
import Sinnoh from "../views/sinnoh/Sinnoh"
import Unova from "../views/unova/Unova"
import Kalos from "../views/kalos/Kalos"
import Alola from "../views/alola/Alola"
import Galar from "../views/galar/Galar"
import Hisui from "../views/hisui/Hisui"
import OtherForms from "../views/otherForms/OtherForms"

export default function AppRoutes(){

    const { Navigator, Screen } = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Navigator>
                <Screen name='Home' component={Home} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Kanto' component={Kanto} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Jotho' component={Jotho} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Hoenn' component={Hoenn} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Sinnoh' component={Sinnoh} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Unova' component={Unova} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Kalos' component={Kalos} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Alola' component={Alola} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Galar' component={Galar} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Hisui' component={Hisui} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='OtherForms' component={OtherForms} options={{title: '', headerTransparent: true, headerShown: false}}/>
            </Navigator>
        </NavigationContainer>
    )
}