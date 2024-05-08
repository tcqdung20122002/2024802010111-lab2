import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchRandomContact } from '../utility/api';
import colors from '../utility/colors';
import ContactThumbnails from '../components/ContactThumbnails';
import DetailListItem from '../components/DetailListItem';

const Profile = ({ route}) => {
  const { contact } = route.params;
    const {avatar, name, email, phone, cell} = contact;
  return (
    <View style={styles.container} >

      <View style={styles.avatarSection}>
        <ContactThumbnails avatar={avatar} name={name} phone={phone}/>
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email} />
        <DetailListItem icon="phone" title="Work" subtitle={phone} />
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    avatarSection:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.blue,
    },
    detailsSection:{
        flex:1,
        backgroundColor:'white',
    },
});