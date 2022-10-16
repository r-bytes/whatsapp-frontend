import { useContext, createContext, useEffect, useState } from "react";
import { signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const signInWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const { displayName, email } = response.user
              console.log("name => ", displayName)
              console.log("email => ", email)    
        } catch (error) {
            alert(error.message)
        }
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(user)
        })
        return () => {
            unsubscribe()
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signInWithGoogle,
                logOut,
                user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => useContext(AuthContext)