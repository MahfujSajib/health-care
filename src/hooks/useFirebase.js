import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication()
const useFIrebase = () => {
    const [users, setUsers] = useState({});
    const auth = getAuth();
    const signInusingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUsers(result.user)
            })
    }
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
        });
        return unsubcribed
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    return {
        users,
        signInusingGoogle,
        logOut
    }
}

export default useFIrebase