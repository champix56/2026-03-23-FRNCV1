import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Store from '../screens/Store'
import { IProduct } from '../interfaces/IProducts'
import Cart from '../screens/cart'
import CartIcon from '../components/ui/CartIcon/CartIcon.connected'
import Cam from '../screens/Cam'
import ScanIcon from '../components/ui/ScanIcon/ScanIcon'
import ProductEditor from '../components/ui/ProductEditor/ProductEditor.connected'

export type RootStackParams = {
    home:undefined
    store:undefined
    // pr:IProductEditorProps
    // "new product":undefined
    cart:undefined
    scan:undefined
    edit:undefined

}
const Stack=createNativeStackNavigator<RootStackParams>()
const Navigation = () => {
  return (
   <Stack.Navigator initialRouteName='home' >
        <Stack.Screen name='home' component={Home} options={{
            headerShown:false,
        }}/>
        <Stack.Screen name='store' component={Store} options={{
            headerRight:()=><View style={{flexDirection:'row', gap:10}}
            ><ScanIcon/><CartIcon/></View>,
            headerStyle:{
                backgroundColor:'skyblue',
            },
            title:'Les produits',
            headerTitleStyle:{fontSize:32},
            headerTitleAlign:'center'
            // headerTitle:()=><Banner/>
        }}/>
        <Stack.Screen name='cart' component={Cart}/>
        <Stack.Screen name='scan' component={Cam}/>
        <Stack.Screen name='edit' component={ProductEditor}/>
        {/* <Stack.Screen name='pr' component={ProductEditor}/>
        <Stack.Screen name='new product' component={()=>{
            const pr:IProduct={description:'',imageUrl:'',prix:2,thumbnailUrl:'',titre:'', stock:0}
            return <ProductEditor product={pr} onProductSaved={()=>{}}/>
        }}/> */}
   </Stack.Navigator>
  )
}

export default Navigation