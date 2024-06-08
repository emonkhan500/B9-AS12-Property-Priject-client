import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Authintication/Firebase/Firebase.config";
import useAxiosPublic from "../Components/useAxiosPublic";


export const AuthContext =createContext({})
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()
const axiosPublic=useAxiosPublic()

const AuthPorvider = ({children}) => {

    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

// user create 
const createUser =(email,pass)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,pass)
}
// google login
const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

// user Manage


// useEffect(()=>{
//     const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
//   console.log('inside ',currentUser)
//   setUser(currentUser)
//   setLoading(false)
//       })
//       return ()=>{
//         return  unSubscribe()
//       }
//   },[])


useEffect(()=>{
const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
    if(currentUser){
        const userInfo={email: currentUser.email}
      axiosPublic.post('/jwt',userInfo)
      .then(res=>{
        if(res.data.token){
            localStorage.setItem('access-token',res.data.token)
        }
      })
    }
    else{
 localStorage.removeItem('access-token')
    }
    setLoading(false)
})
return ()=>{
    unsubscribe()
}
},[])

// sign In
const login=(email,pass)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,pass)
}

// logOut
const logOut =()=>{
    return signOut(auth)
}
// update Profile

const updateUser = (name, photo)=>updateProfile(auth.currentUser,{
    displayName:name, photoURL: photo
})

    const authInfo={
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUser,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPorvider;