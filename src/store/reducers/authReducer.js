const initState = {
    authError : null
}

export const authReducer =(state=initState,action) => {
    if(action.type=='Login_Success')
    {
        console.log("Logged In Successfully");
    }
    else if(action.type==='Login_Error')
    {
        console.log("Login Error");
        return{
            ...state,
            authError : action.err.message
        }
    }
    else if(action.type==='Logout_Success')
    {
        console.log("Logged Out Successfully");
    }
    else if(action.type==='Logout_Error')
    {
        console.log("Log Out Error",action.err);
    }
    else if(action.type==='Signup_Success')
    {
        console.log("Signed-Up Successfully");
        return{
            ...state,
            authError : null
        }
    }
    else if(action.type==='Signup_Error')
    {
        console.log("Signing-Up Error",action.err);
        return{
            ...state,
            authError : action.err.message
        }
    }
    else if(action.type==='Auth_Update')
    {
        return{
            ...state,
            authError : null
        }
    }
    return state;
}