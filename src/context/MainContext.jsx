import React,{createContext,useState,useEffect} from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config'


const auth = getAuth(app);
export const mainContext = createContext()
const MainContext = ({children}) => {
    const [user,setUser] = useState(null)
    const google = new GoogleAuthProvider();
    
    const withGoogle = () =>{
       return signInWithPopup(auth,google)
    }
    useEffect(()=>{
        const unlink = onAuthStateChanged(auth,(result)=>{
            setUser(result)
        })
        return ()=> unlink()
    },[])

    const value = {withGoogle,user}
    return (
        <div>
            <mainContext.Provider value={value}>
                {children}
            </mainContext.Provider>
        </div>
    );
};

export default MainContext;