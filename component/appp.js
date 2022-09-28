import { useEffect, useState } from "react"
import { FlatList } from "react-native-web";

const App =()=>{
    const[isLoading, setLoading] =useState(true);
    const getArticies= asyuc()=>{
        try{
            const response = await fetch("https://reactnative.dev/movies.json");
            const json = await response.json();
            setData (json.movies);
            catch(error) {
                alert(error.message);
                finally{
                    setLoading(false);
                }
            };

            useEffect(()=>{
                getArtices();
            },[]);
            return(
                <View style={{flex:1, paddind:20}}>
                    {
                        isLoading
                        ?<ActivityIndicator/>
                        :(
                            <FlatList
                            />

                        )
                    }
                </View>
            )
        }
    