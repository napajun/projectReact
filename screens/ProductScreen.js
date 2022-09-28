import { StyleSheet, Text, View , ActivityIndicator , FlatList  ,Image} from 'react-native'
import React,{ useState , useEffect } from 'react';
import axios from 'axios';

const ProductScreen = () => {

    const [product,setProduct] = useState([]); 
    

    
    useEffect (()=>{

        const getData = async ()=>{
            const res = await axios.get ('https://api.codingthailand.com/api/course')
            console.log(res.data.data)
            // alert(JSON.stringify(res.data.data))
            setProduct(res.data.data)
        }

        getData();
    },[]);
    
    

    const _rederitem = ({item})=>{
        let picture = (item.picture !== null)?item.picture
        : 'https://via.placeholder.com/150';
        return(
          <View style = {{flex:1}}>
             <View style = {styles.container}>
                <Image
                  resizeMode='cover'
                  source={{ uri: item.picture}}
                  style = {styles.thumbnail}
                />
                <View style = {styles.dataContainer}>
                    <View style = {styles.dataContent}>
                    <Text style = {styles.title}>{item.title}</Text>
                    <Text style = {styles.detail}>{item.detail}</Text>
                    </View>
                </View>
             </View>
          </View>
        )
      }




  return (
    <View>
      <FlatList
        data = {product}
        keyExtractor = {(item,index)=>item.id.toString()}
        renderItem ={_rederitem}
      />
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        height: 80,
        elevation: 3,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    dataContainer: {
        flex: 1,
    },
    thumbnail: {
        width: 70,
        height: 70,
    }, 
    dataContent: {
        marginTop: 5,
        marginLeft: 15,
    },

    title: {
        color: '#444',
        fontSize: 18,
        fontWeight: 'bold',
    },

    detail: {

        fontSize: 16,
        color: '#888',
        fontWeight: '700',
    },
})