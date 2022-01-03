import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,Text,Button,StyleSheet, FlatList, Image,TouchableOpacity, Platform} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function HomeScreen({navigation}){

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
    
    function gotoProfile(param){
        navigation.navigate('Profile Screen') 
    }

    function gotoSingleTweet(param){
        navigation.navigate('Tweet Screen') 
    }

    function gotoNewTweet(param){
        navigation.navigate('New Tweet') 
    }

    const renderItem = ({item}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={()=> gotoProfile()}>
                <Image style={styles.avatar} source={{
                    uri:"https://avatars.githubusercontent.com/u/1028534?v=4"
                }}/>
            </TouchableOpacity>
            <View style={{flex:1}}>
                <TouchableOpacity style={styles.flexRow}>
                   <Text style={styles.tweetName} numberOfLines={1}>{item.title}</Text>
                   <Text style={styles.tweetHandle}>@yucelmoran</Text>
                   <Text style={styles.tweetName} >mi dot</Text>
                   <Text>9 am</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContainer} onPress={() => gotoSingleTweet()}>
                    <Text style={styles.tweetContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.                    
                </Text>
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
           <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
            />
            
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