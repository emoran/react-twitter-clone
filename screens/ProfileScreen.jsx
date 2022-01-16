import React from 'react';
import {View,Text,StyleSheet,Image,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons'; 





export default function ProfileScreen(){

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

      const profileHeader = () => (
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
               <Text style={styles.TextGray}>New York, USA</Text>
            </View>

            <View style={styles.linkContainer}>
                <TouchableOpacity style={styles.linkItem} 
                    onPress={()=> Linking.openURL('httpsL//yucelmoran.com')}>
                   <EvilIcons name="link" size={24} color="gray"/>
                   <Text style={styles.textColor}>yucelmoran.com</Text>
                </TouchableOpacity>
                <View style={[styles.linkItem,styles.ml4]}> 
                <EvilIcons name="calendar" size={24} color="gray"/>
                <Text style={styles.TextGray}>Joined March 2019</Text>
                </View>
            </View>

            <View style={styles.followContainer}>
                <View style={styles.followItem}>
                    <Text style={styles.followItemNumber} >509</Text>
                    <Text style={styles.followItemLabel} >Following</Text>
                </View>

                <View style={[styles.followItem, styles.ml4]}>
                    <Text style={styles.followItemNumber} >100</Text>
                    <Text style={styles.followItemLabel} >Followers</Text>
                </View>
            </View>

            <View style={styles.separator}></View>

            
        </View>
    );


      const renderItem = ({item}) => (
        <View style={{marginVertical:20}}>
            
            <Text >{item.title}</Text>
        </View>
    );

    return (
        <FlatList
        style={styles.container}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
        ListHeaderComponent={profileHeader}
    />
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
    linkContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 4,
    },
    ml4:{
        marginLeft:14
    },
    linkColor: {
        color: '#1d9bf1'
    },
    linkItem :{
        flexDirection: 'row'
    },
    followContainer:{
        flexDirection: 'row',
        paddingHorizontal:10,
        paddingVertical: 12
    },
    followItem:{
        flexDirection: 'row'
    },
    followItemNumber:{
        fontWeight: 'bold'
    },
    followItemLabel:{
        marginLeft: 4
    },
    separator:{
        borderBottomWidth:1,
        borderBottomColor:'#E5E7EB'
    },
    tweetSeparator:{
        borderBottomWidth:1,
        borderBottomColor: '#e5e7eb'
    },

})