export const addUser = (accessToken) => {
    return {
            type : "add",
            payload : {
                accessToken
            }
    }    
}


export const deleteUser = () => {
    return {
            type : "delete",
            payload : {
                accessToken : null
            }
    }
}