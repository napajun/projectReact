import{
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList,
}
from "react-native";
import React, {useEffect, useState} from"react";

import axios from"axios";

const ProductScreen =()=> {
    const [product, setProduct] = useState([])

   useEffect(() =>{
    const getData=async axios.get('https://api.codingthailand.com/api/course')
   })

   return(
    </View>
    <Text>สินค้า</Text>
    </View>
   );

};
export default ProductScreen;
const styles= StyleSheet.create({});