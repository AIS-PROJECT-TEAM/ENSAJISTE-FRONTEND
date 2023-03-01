import React, {useContext, useEffect, useState} from "react";
import { getRequest, headersJson, headersWWW, postRequest } from "../utils/RequestHandler";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch , useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from '../store';
 

// Defining the context
const AuthContext = React.createContext();

// Method to get the context 
export const useAuth = () => {
    return useContext(AuthContext);
}


export function AuthProvider({ children }){

    // Variables 
    const [currentUser,setCurrentUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [change, setChange] = useState(0);


    //Configuring Interceptors to check for access token validity before 
    axios.interceptors.request.use(async (request) => {
    if(request.headers.Authorization){
        let currentDate = new Date();
        let decodedToken = jwt_decode(request.headers.Authorization.split(" ")[1]);
        if (decodedToken.exp * 1000 < currentDate.setMinutes(currentDate.getMinutes(currentDate.getMinutes()))) {
            console.log("Token expired.");
            // Refresh Token Automatically
            refreshToken();
        }

    }
    return request;
})


    const dispatch = useDispatch()
    const { addUser , deleteUser } = bindActionCreators(actionCreators, dispatch)
    const state = useSelector((state) => state.userInfo)


    // Method for logging in the user
    async function login(formData) {
        let response =  await postRequest("login", formData, true, headersWWW);
        if(!response.error){
            let mydata = response.data;
            setAccessToken(mydata.access_token);
            console.log("setting token", mydata.access_token)
            const { data } = await getAuthenticatedUser(mydata.access_token)
            var user = data.user;
            response = {...response, user}
            
        }
        return response;
    }

    

    //Method to register the user
    async function register(props){
        return await postRequest("register",props)
    }

    // Method responsible for refreshing the token
    async function refreshToken(){
        var result = {};
        const response =  await getRequest("token/refresh", {}, false);
        let { data : { error }} = response;
        if(!error){
            const {access_token} = response.data;
            result = await getAuthenticatedUser(access_token);
        }else{
            setCurrentUser(null)
        }
        return result;
    }

    // Method to get details of the user
    async function getAuthenticatedUser(accessToken){
        var headers = {...headersJson, "Authorization" : `Bearer ${accessToken}` };
        const response = await getRequest("user/details", true, headers);
        return response;
    }

    // Method to set the user to the Application Context
    async function setUser(User){
        var roles = [];
        User.roles.forEach(role => {
            roles.push(role.name)
        })
        setCurrentUser({...User, roles})
    }

    // Method to logout the Authenticated user
    async function logout(){
        const response  = await postRequest("logout",{}, true);
        if(!response.error){
            setAccessToken(null)
        }
        return response;
    }

    function getAccessToken(){
        return state.accessToken
    }

    // Values or functions to share through the application
    const value = {
        currentUser,
        login,
        register,
        refreshToken,
        setCurrentUser,
        setUser,
        accessToken,
        logout,
        loading
    }

    // This runs before the whole application 
    useEffect(async () => {
       const result =  await refreshToken();
       if(!result.error && result.data){
           setUser(result.data.user);
       } 

       

       setLoading(false) 
    },[change])

    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}

