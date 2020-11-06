import * as axios from "axios";

const instance  = axios.create({
        withCredentials: true,
        baseURL: 'http://testapi.marit.expert:3003/',
    }
);

export const userAPI = {
    login(login, password) {
        return instance.post('auth', {login, password})
    },
    isSessionStillActive() {
        return instance.get('check')
    },
    logout() {
        debugger
        return instance.get('logout')
    }
}

export const dataAPI = {
    getData() {
        return instance.post('auth', {login, password})
    },
    isSessionStillActive() {
        return instance.get('check')
    },
    logout() {
        debugger
        return instance.get('logout')
    }
}