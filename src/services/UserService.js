import axios from 'axios';
import {BASE_URL} from '../config/server';
import { removeJwtToken } from './LocalStorage';

export const loginUser = async (data) => {
    try{
        let response = await axios.post(BASE_URL+'user/login', { "username": data.username, "password": data.password })
        return response;
    }
    catch (error){
        throw error;
    }
}

export const logoutUser = async () => {
    try{
        return removeJwtToken() ? true : false
    }
    catch (error){
        throw error;
    }
} 