
import { AsyncStorage } from 'react-native';
import tools from '../tools/index';

function saveLocalUser(data) {
    AsyncStorage.setItem('@kibos:user:token', data).then((ok) => {
        
    }).catch((error) => {
        alert('Error saving user: ' + JSON.stringify(error));
    })
}

function clearLocalUser() {
    return AsyncStorage.removeItem('@kibos:user:token');
}

function getLocalUser() {
    return AsyncStorage.getItem('@kibos:user:token');
}

function authenticate(data) {
    return fetch(tools.getUrl() + 'login', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            alert('Error connect : ' + JSON.stringify(error));
        })
}

function getTokenUser() {
    return AsyncStorage.getItem('@kibos:user:token');
}

facebookConnection = (data) => {
    return fetch(tools.getUrl() +'login/facebook', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'multipart/form-data'
        },
        body: data
    })
    .then((response) => response.json())
    .catch((error) => alert('Erreur : ' + JSON.stringify(error)));
}

export default {
    saveLocalUser,
    getLocalUser,
    clearLocalUser,
    authenticate,
    getTokenUser,
    facebookConnection
};