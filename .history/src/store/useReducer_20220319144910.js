const initialState  = {
    accessToken : null
}

const userReducer = (state = initialState, action ) => {
    switch (action.type){
        case "add":
            return { accessToken: action.payload.accessToken }
        case :
            return { accessToken: null} 
        default:
            return initialState       
    }
}

export default userReducer