import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View,Text,Button,StyleSheet, FlatList, Image,TouchableOpacity, Platform, ActivityIndicator} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import locale from 'date-fns/locale/en-US';

import axios from 'axios';
import { formatDistanceToNowStrict } from 'date-fns';
import formatDistance from '../helpers/formatDistanceCustom';
  


export default function HomeScreen({navigation}){

    const [data,setData] = useState ([]);
    const [isLoading,setIsLoading] = useState (true);
    const [isRefreshing,setIsRefreshing] = useState (false);

    useEffect(()=>{
        getAllTweets();
    },[])

    function getAllTweets(){
        axios.get('http://66.94.99.216:81/api/tweets').
        then(response => {
            console.log(response.data);
            setData(response.data);
            setIsLoading(false);
            setIsRefreshing(false);
        })
        .catch(error =>{
            console.log(error);
            setIsLoading(false);
            setIsRefreshing(false);
        })
    }

    function handleRefresh(){
        setIsRefreshing(true);
        getAllTweets();
    }
    
    function gotoProfile(param){
        navigation.navigate('Profile Screen') 
    }

    function gotoSingleTweet(param){
        navigation.navigate('Tweet Screen') 
    }

    function gotoNewTweet(param){
        navigation.navigate('New Tweet') 
    }

    const renderItem = ({item: tweet}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={()=> gotoProfile()}>
                <Image style={styles.avatar} source={{
                    uri:tweet.user.avatar
                }}/>
            </TouchableOpacity>
            <View style={{flex:1}}>
                <TouchableOpacity style={styles.flexRow}>
                   <Text style={styles.tweetName} numberOfLines={1}>{tweet.user.name}</Text>
                   <Text style={styles.tweetHandle}>@{tweet.user.username}</Text>
                   <Text style={styles.tweetName} >mi dot</Text>
                   <Text>
                       {/* {formatDistanceToNowStrict(new Date(tweet.created_at))} */}
                       {formatDistanceToNowStrict(new Date(tweet.created_at),{
                           locale:{
                               formatDistance,
                           }
                       })}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContainer} onPress={() => gotoSingleTweet()}>
                    <Text style={styles.tweetContent}>{tweet.body}</Text>
                </TouchableOpacity>

                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={styles.flexRow}>
                        <Text><EvilIcons name="comment" size={22} color="gray" style={{marginTop:2}}  /></Text>
                        <Text style={styles.textGray}>45</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.flexRow} style={[styles.flexRow, styles.ml4]}>
                        <Text><EvilIcons name="retweet" size={22} color="gray"  style={{marginTop:2}}/></Text>
                        <Text style={styles.textGray}>45</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.flexRow} style={[styles.flexRow, styles.ml4]}>
                        <Text><EvilIcons name="heart" size={22} color="gray"  style={{marginTop:2}}/></Text>
                        <Text style={styles.textGray}>30</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.flexRow} style={[styles.flexRow, styles.ml4]}>
                        <Text><EvilIcons name={Platform.OS==='ios' ? 'share-apple' : 'share-google'} size={22} color="gray"  style={{marginTop:2}}/></Text>
                    </TouchableOpacity> 

                </View>

            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            { isLoading ? (<ActivityIndicator style={{ marginTop:8 }} size="large" color="gray" />) : ( <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
            />)}
            
           
            
            
            <TouchableOpacity 
                style={styles.floatingButton}
                onPress={() => gotoNewTweet()}>
                
                <AntDesign name="plus" size={26} color="white"/>
            </TouchableOpacity> 
        </View>
    );  
}

const styles = StyleSheet.create({
    container:{
        flex:1 , 
        backgroundColor: 'white',
    },
    flexRow:{
        flexDirection: 'row',
    },
    tweetContainer:{
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    tweetSeparator:{
        borderBottomWidth:1,
        borderBottomColor: '#e5e7eb'
    },
    avatar: {
        width:42,
        height:42,
        marginRight: 8,
        borderRadius: 21,
    },
    tweetName:{
        fontWeight: 'bold',
        color: '#222222'
    },
    tweetHandle:{
        marginHorizontal: 8,
        color: 'gray',
    },
    tweetContentContainer:{
        marginTop:4
    },
    tweetContent:{
        lineHeight:20
    },
    textGray:{
        color: 'gray',
    },
    tweetEngagement:{
        flexDirection:"row",
        alignItems: "center",
        marginTop:12
    },
    ml4:{
        marginLeft:14
    }  ,
    floatingButton:{
        width:60,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#1DA1F2",
        position: 'absolute',
        bottom:20,
        right:12
    } 
}) 