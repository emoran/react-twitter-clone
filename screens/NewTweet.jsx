import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View,Text,StyleSheet,Image,ActivityIndicator,Alert} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import axiosConfig from '../helpers/axiosConfig';

export default function NewTweet({navigation}){
    const [tweet,setTweet] = useState('');
    const [isLoading,setIsLoading] = useState (false);

    function sendTweet(){

        if(tweet.length === 0){
            Alert.alert('Please enter a tweet');
            return;
        }
        setIsLoading(true);
        axiosConfig
            .post('/tweets',{
                body:tweet
            }).
            then(response => {
                navigation.navigate('Home1',{
                   newTweetAdded:response.data,
                });
            }) 
            .catch(error =>{
                console.log(error);
                setIsLoading(false);  
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.tweetButtonContainer}>

                <Text style={tweet.length > 250 ? styles.textRed : styles.textGray}> Character left {280 - tweet.length}</Text>

                <View style={{flexDirection:'row',alignItems:'center'}}>

                    {isLoading && (
                    <ActivityIndicator 
                    size="small" 
                    color="gray" 
                    style={{marginRight:8}}/>
                    )}

                    <TouchableOpacity 
                        style={styles.tweetButton} 
                        onPress={() => sendTweet()}
                        disabled={isLoading}
                    >
                        <Text style={styles.tweetButtonText}>Tweet</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style={styles.tweetBoxContainer}>

                <Image style={styles.avatar} source={{
                    uri:"https://avatars.githubusercontent.com/u/1028534?v=4"
                }}/>
                
            <TextInput 
                style={styles.input}
                onChangeText={setTweet}
                onChange={setTweet}
                value={tweet}
                placeholder="Whats happening"
                placeHolderTextColor="gray"
                multiline
                maxlsenght="200"></TextInput>
            </View>
        </View>
    );
r

    
  
}

const styles = StyleSheet.create({
    textColor:{
         color: 'gray',
    },
    ml4:{
        marginLeft: 16,
    },
    container: {
        flex: 1,
        backgroundColor : 'white',
        paddingVertical:12,
        paddingHorizontal: 10
    },
    tweetButtonContainer:{
        paddingVertical: 4,
        paddingHorizontal: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tweetButton:{
        backgroundColor: '#1d9bf1',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24,
    },
    tweetButtonText:{
        color:'white',
        fontWeight:'bold'
    },
    avatar: {
        width:42,
        height:42,
        marginRight: 8,
        borderRadius: 21,
    },
    tweetBoxContainer:{
        flexDirection: 'row',
        paddingTop:10
    },
    input:{
        fontSize: 18,
        lineHeight:28,
        padding: 10,
        flex: 1
    },
    textGray:{
        color: 'gray'
    },
    textRed:{
        color: 'red'
    }
});