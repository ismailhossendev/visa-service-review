import React,{createContext,useState,useEffect} from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'
import { toast } from 'react-toastify';


const auth = getAuth(app);
export const mainContext = createContext()
const MainContext = ({children}) => {
    const [user,setUser] = useState(null)
    const google = new GoogleAuthProvider();
    const [loading,setLoading] = useState(true)
    
    const withGoogle = () =>{
        setLoading(true)
       return signInWithPopup(auth,google);
    }
    useEffect(()=>{
        const unlink = onAuthStateChanged(auth,(result)=>{
            setUser(result)
            setLoading(false)
        })
        return ()=> unlink()
    },[])
    const logout = () =>{
        auth.signOut().then(() => {
            setUser(null)
            localStorage.removeItem("token")
            toast.success('successfully logout')
        }).catch((error) => {
            alert(error.message)
        });
    }

    const handleCreate = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const UpdatePhoto = (url,displayName) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            photoURL: url,
            displayName: displayName
        })
    }

    const withEmail = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const value = {withGoogle,user,logout,loading,setLoading,handleCreate,UpdatePhoto,withEmail}
    return (
        <div>
            <mainContext.Provider value={value}>
                {children}
            </mainContext.Provider>
        </div>
    );
};

export default MainContext;