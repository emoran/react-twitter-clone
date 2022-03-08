import React, {useEffect,useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 

import axios from 'axios';
import { format } from 'date-fns/esm';
import axiosConfig from '../helpers/axiosConfig';

export default function TweetScreen({route,navigation}){


    const [tweet,setTweet] = useState ([null]);
    const [isLoading,setIsLoading] = useState (true);

    useEffect(()=>{
        getTweet();
    },[]);

    function getTweet(){
        axiosConfig.get('/tweets/'+route.params.tweetId).
        then(response => {
            setTweet(response.data);
            setIsLoading(false);
        }) 
        .catch(error =>{
            console.log(error);
            setIsLoading(false);  
        })
    }
     
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator style={{ marginTop:8 }} size="large" color="gray" />
            ) : (
                <>
            <View style={styles.profileContainer}>              
                <TouchableOpacity style={styles.flexRow}>
                    <Image 
                    style={styles.avatar} 
                    source={{
                        uri:tweet.user.avatar 
                    }}/>

                    <View>
                        <Text style={styles.tweetName}>{tweet.user.name}</Text>
                        <Text style={styles.tweetHandle}>@{tweet.user.username}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="gray" />
                </TouchableOpacity>
            </View>    

            <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>{tweet.body}</Text>
                <View style={styles.tweetTimestampContainer}>
                    <Text style={styles.tweetTimestampText}>{format(new Date(tweet.created_at),'h:mm a')}</Text>
                    <Text style={styles.tweetTimestampText}>&middot;</Text>
                    <Text style={styles.tweetTimestampText}>{format(new Date(tweet.created_at),'d MMM.yy')}</Text>
                    <Text style={styles.tweetTimestampText}>&middot;</Text>
                    <Text style={[styles.tweetTimestampText, styles.linkColor]}>Twitter for Iphone</Text>
                </View>
            </View>     

            <View style={styles.tweetEngagement}>
               <View style={[styles.flexRow,styles.ml4 ]}>
                   <Text style={styles.tweetEngagementNumber}>894</Text>
                   <Text style={styles.tweetEngagementLabel}>Retweet</Text>
               </View>
               <View style={[styles.flexRow,styles.ml4 ]}>
                   <Text style={styles.tweetEngagementNumber}>44</Text>
                   <Text style={styles.tweetEngagementLabel}>Quoted Tweets</Text>
               </View>
               <View style={[styles.flexRow,styles.ml4 ]}>
                   <Text style={styles.tweetEngagementNumber}>88</Text>
                   <Text style={styles.tweetEngagementLabel}>Likes</Text>
               </View>
            </View>   

            <View style={[styles.tweetEngagement, styles.spaceAround]}>
                <TouchableOpacity >
                    <EvilIcons name="comment" size={32} color="gray"  />
                </TouchableOpacity> 

                <TouchableOpacity >
                    <EvilIcons name="retweet" size={32} color="gray"  />
                </TouchableOpacity> 

                <TouchableOpacity >
                    <EvilIcons name="heart" size={32} color="gray"  />
                </TouchableOpacity> 

                <TouchableOpacity >
                    <EvilIcons name="comment" size={32} color="gray"  />
                </TouchableOpacity> 
                
                <TouchableOpacity>
                    <EvilIcons name={Platform.OS==='ios' ? 'share-apple' : 'share-google'} size={32} color="gray"  style={{marginTop:2}}/>
                </TouchableOpacity> 

            </View>
            </>
            )}
        </View>


    ); 
}

const styles = StyleSheet.create({
    container:{
        flex:1 , 
        backgroundColor: 'white',
    },
    profileContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    flexRow:{
        flexDirection: 'row',
    },
    avatar: {
        width:50,
        height:50,
        marginRight: 8,
        borderRadius: 25,
    },
    tweetName:{
        fontWeight:'bold',
        color:'#222222',

    },
    tweetHandle:{
        fontWeight:'bold',
        color:'gray',
        marginTop: 4,
        
    },
    tweetContentContainer:{
        paddingHorizontal: 10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#e5e7eb'
    },
    tweetContent:{
        fontSize:20,
        lineHeight:30
    },
    tweetEngagement:{
        flexDirection:"row",
        alignItems: "center",
        marginTop:12,
        paddingHorizontal:10,
        paddingVertical:12,
        borderBottomWidth:1,
        borderBottomColor:'#e5e7eb'
    },
    tweetEngagementNumber:{
        fontWeight:'bold'
    },
    tweetEngagementLabel:{
        color:'gray',
        marginLeft: 6
    },
    tweetTimestampContainer:{
        flexDirection:'row',
        marginTop:12,
    },
    tweetTimestampText:{
        color:'gray',
        marginRight:6,
    },
    linkColor:{
        color:'#1d9bf1'
    },
    ml4:{
        marginLeft:14
    }  ,
    spaceAround:{
        justifyContent: 'space-around'
    }
})