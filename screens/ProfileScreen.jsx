import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons'; 

export default function ProfileScreen(){
    return (
        <View style={styles.container}>
           <Image 
            style={styles.backgroundImage}
            source={{
                uri:"https://images.unsplash.com/photo-1625600235727-d441fff3dab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}/>

            <View style={styles.avatarContainer}>    
                
                <Image style={styles.avatar} source={{
                    uri:"https://avatars.githubusercontent.com/u/1028534?v=4"
                }}/>
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}>
                        Follow 
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.nameContainer}>
                <Text style={styles.profileName}> Yucel Moran </Text>
                <Text style={styles.profileHanlde}>@yucelmoran</Text>
            </View>

            <View style={styles.profileContainer}>
                <Text style={styles.profileContainerText}>
                    Some Description here. Hardcoded.
                </Text>
            </View>

            <View style={styles.locationContainer}>
               <EvilIcons name="location" size={24} color="gray"/>
               <Text style={styles.TextGray}></Text>
            </View>

            <View style={styles.locationContainer}>
             
             </View>
        </View>
    );

  
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        backgroundColor: 'white'
    }  ,
    backgroundImage:{
        width:800,
        height:120
    },
    avatarContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10 ,
        marginTop: -34
    },
    avatar:{
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: 'white' 
    },
    followButton:{
        backgroundColor: '#0f1428',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24,
    },
    followButtonText:{
        color:'white',
        fontWeight:'bold'
    },
    nameContainer:{
        paddingHorizontal: 10,
        paddingVertical: 2
    },
    profileName:{
        fontWeight: 'bold',
        fontSize: 22,
    },
    profileHanlde:{
        color:'gray',
        marginTop:1
    },
    profileContainer:{
        paddingHorizontal:10,
        marginTop:8
    }, 
    profileContainerText:{
        lineHeight:22,
    },
    TextGray:{
        color:'gray'
    },
    locationContainer:{
        flexDirection:'row',
        paddingHorizontal: 10,
        marginTop: 4
    },
    ml4:{
        marginLeft:14
    },

})