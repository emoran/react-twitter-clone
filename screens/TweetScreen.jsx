import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 

export default function TweetScreen(){
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>              
                <TouchableOpacity style={styles.flexRow}>
                    <Image 
                    style={styles.avatar} 
                    source={{
                        uri:"https://avatars.githubusercontent.com/u/1028534?v=4"
                    }}/>

                    <View>
                        <Text style={styles.tweetName}>Edgar Moran</Text>
                        <Text style={styles.tweetHandle}>@yucelmoran</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="gray" />
                </TouchableOpacity>
            </View>    

            <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, 
                </Text>
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
    ml4:{
        marginLeft:14
    }  ,
    spaceAround:{
        justifyContent: 'space-around'
    }
})