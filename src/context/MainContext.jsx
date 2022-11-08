import React,{createContext,useState,useEffect} from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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
            toast.success('successfully logout')
        }).catch((error) => {
            alert(error.message)
        });
    }

    const handleCreate = (email,password) =>{
        setLoading(true)
       return auth.createUserWithEmailAndPassword(email,password)

    }

    const value = {withGoogle,user,logout,loading}
    return (
        <div>
            <mainContext.Provider value={value}>
                {children}
            </mainContext.Provider>
        </div>
    );
};

export default MainContext;