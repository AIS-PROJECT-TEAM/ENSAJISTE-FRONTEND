import axios from "axios";
import { endpoint } from "../Constants/environment";
import jwt_decode from "jwt-decode";

axios.defaults.withCredentials = true;

//Configuring Interceptors to check for access token validity before 
axios.interceptors.request.use(async (request) => {
    if(request.headers.Authorization){
        let currentDate = new Date();
        let decodedToken = jwt_decode(request.headers.Authorization.split(" ")[1]);
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            console.log("Token expired.");
            // Refresh Token Automatically
        }else{
            console.log("Token is valid")
        }

    }
    return request;
})

export const headersJson = {
    'Content-Type': 'application/json',
    'Accept': '*/*'
}

export const headersForm = {
    'Content-Type': 'multipart/form-data',
    'Accept': '*/*'
}

export const headersWWW = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*'
}

export const getRequest = async (url,withCredentials = false, headers = headersJson) => {
    let the_url = endpoint + url;
    let response = {}
    try{
        var temp = await axios.get(the_url,{headers, withCredentials})
        response = {
            error : false,
            data : temp.data
        }
    }catch(e){
        response = {
            status : e.status,
            error: true,
            message : e.message
        }
    }
    
    return response;
}

export const postRequest = async (url, props ={}, withCredentials = false, headers = headersJson) => {
    let the_url = endpoint + url;
    let result = {};
    try{
        var temp = await axios.post(the_url,props,{headers, withCredentials})
        result = {
            data : temp.data,
            error : false
        }
    }catch(e){
        result = {
            status : e.status,
            error: true,
            message : e.message
        }
    }
    
    return result;
}


