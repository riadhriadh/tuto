import { Platform  } from 'react-native';

function setHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

function getUrl() {
    const url = Platform.OS === 'android' ?'https://mobile.majustic.com/kibos/web/api/' : 'https://mobile.majustic.com/kibos/web/api/';
    const urlProd="https://mobile.majustic.com/kibos/web/api/"
    return urlProd;
}
export default {
    setHeaders,
    getUrl
}