import axios from "axios";
import { endpoint } from "../Constants/environment";

axios.defaults.withCredentials = true;

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
    try{
        var temp = await axios.get(the_url,{headers, withCredentials})
        return {
            error : false,
            data : temp.data
        }
    }catch(e){
        return {
            status : e.response.status,
            error: true,
            message : e.response.message
        }
    }
}

export const postRequest = async (url, props ={}, withCredentials = false, headers = headersJson) => {
    let the_url = endpoint + url;
    try{
        var temp = await axios.post(the_url,props,{headers, withCredentials})
        return {
            data : temp.data,
            error : false
        }
    }catch(e){
        return {
            status : e.response.status,
            error: true,
            message : e.response.message
        }
    }
}


