export const newsCreate = (news) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        firestore.collection('news').add({
            ...news,
            firstName : profile.firstName,
            lastName : profile.lastName,
            views : 0,
            uid : uid,
            timestamp : new Date()
        }).then(()=>{
            dispatch({type:'News_Created'})
        }).catch((err)=>{
            dispatch({type:'News_Create_Error',err:err})
        })
    }
}

export const challengeCreate = (challenge) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;

        firestore.collection("challenges").add({
            ...challenge,
            firstName : profile.firstName,
            lastName : profile.lastName,
            uid : uid,
            supporters : 0
        }).then(()=>{
            dispatch({type:'Challenge_Created'})
        }).catch((err)=>{
            dispatch({type:'Challenge_Error',err:err})
        })
    }
}

export const views = (item) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('news').doc(item.id).set({
            ...item,
            views : item.views+1
        }).then(()=>{
            dispatch({type:'View_Increased'})
        }).catch((err)=>{
            dispatch({type:'View_Error',err:err})
        })
    }
}

export const support = (item) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('challenges').doc(item.id).set({
            ...item,
            supporters : item.supporters+1
        }).then(()=>{
            dispatch({type:'Supporters_Increased'})
        }).catch((err)=>{
            dispatch({type:'Supporters_Error',err:err})
        })
    }
}

export const article = (user) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        const id = getState().firebase.auth.uid;

        firestore.collection('users').doc(id).set({
            ...user,
            news_added : user.news_added + 1,
            coins : user.coins+1
        }).then(()=>{
            dispatch({type:'Article_Added'})
        }).catch((err)=>{
            dispatch({type:'Article_Error',err:err})
        })
    }
}

export const challenge = (user) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        const id = getState().firebase.auth.uid;

        firestore.collection('users').doc(id).set({
            ...user,
            challenges : user.challenges + 1
        }).then(()=>{
            dispatch({type:'Chal_Added'})
        }).catch((err)=>{
            dispatch({type:'Chal_Error',err:err})
        })
    }
}