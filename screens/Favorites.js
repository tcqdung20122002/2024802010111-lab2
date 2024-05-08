import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text,
    View, FlatList,
    ActivityIndicator,
} from 'react-native';
import { fetchContact } from '../utility/api'
import ContactThumbnails from '../components/ContactThumbnails';

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
    //state
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //Load du lieu
    useEffect(() => {
        fetchContact()
            .then(
                contacts => {
                    setContacts(contacts);
                    setLoading(false);
                    setError(false);
                }
            )
            .catch(
                e => {
                    setLoading(false);
                    setError(true);
                }
            )
    }, []);

    const renderFavoriteThumbnail = ({ item }) => {
        const { avatar } = item;
        return (
            <ContactThumbnails avatar={avatar}
            onPress={() => navigation.navigate('Profile', { contact: item })}/>
        );
    };

    const favorites = contacts.filter(contact => contact.favorite);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={favorites}
                    keyExtractor={keyExtractor}
                    numColumns={3}
                    contentContainerStyle={styles.list}
                    renderItem={renderFavoriteThumbnail}
                />
            )}
        </View>
    );
};

export default Favorites;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
    list: {
        alignItems: 'center',
    },
});