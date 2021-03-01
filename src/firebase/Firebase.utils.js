import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyC7-hfzfc0mLAnnqeChhq5C_5Dw9LJT3jY",
    authDomain: "so-me-store.firebaseapp.com",
    projectId: "so-me-store",
    storageBucket: "so-me-store.appspot.com",
    messagingSenderId: "671242443416",
    appId: "1:671242443416:web:8c669808b5465ce6618eed",
    measurementId: "G-00N2G8VH53"
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//Google Authentication 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument =  async (user , displayName) => {
    if(!user) return;
    const queryRef = firestore.doc(`User/${user.uid}`)
    try{
        const querySnap = await queryRef.get()
        if (!querySnap.exists){
            const {displayName , email } = user 
            const createdAt = new Date()
            await queryRef.set({
                displayName,
                email,
                createdAt
            })

        }
       
    }catch(err){
        console.log(err.message)
    }
    return queryRef
   
 

}

