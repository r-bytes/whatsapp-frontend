import { useContext, createContext, useEffect, useState } from "react";
import { signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase"
import { useReducerContext } from "./ReducerProvider";
import { actionTypes } from "./reducer";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [{}, dispatch] = useReducerContext()

    const signInWithGoogle = () => {
        try {
            signInWithPopup(auth, provider)
              .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }).catch(error => {
                alert(error.message)
            })
        } catch (error) {
            console.log("Error => ", error)
        }
    }
    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
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