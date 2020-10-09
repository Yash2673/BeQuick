export const signIn = (creds) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(()=> {
            dispatch({type:'Login_Success'})
        }).catch((err)=>{
            dispatch({type:'Login_Error',err:err})
        })
    }
}

export const signOut = () => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type:'Logout_Success'})
        }).catch((err)=>{
            dispatch({type:'Logout_Error'})
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch,getState,{getFirestore,getFirebase}) => {
        const firestore = getFirestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.uid).set({
                firstName : newUser.firstName,
                lastName : newUser.lastName,
                initials : newUser.firstName[0] + newUser.lastName[0],
                designation: newUser.designation,
                bio: newUser.bio,
                dob: newUser.dob,
                phone: newUser.phone,
                home: newUser.home,
                coins : 10,
                news_added : 0,
                challenges : 0
            })
        }).then(()=>{
            dispatch({type:'Signup_Success'})
        }).catch((err)=>{
            dispatch({type:'Signup_Error',err:err})
        })
    }
}

export const update = () => {
    return (dispatch) => {
        dispatch({type:'Auth_Update'})
    }
}