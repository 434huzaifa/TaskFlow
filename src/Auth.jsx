import { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init.js';
import useAxios from './useAxios.js';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const myContext = createContext(null)
const Auth = ({ children }) => {
  const caxios = useAxios()
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true)
  function signUpUser(email, password) {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function googlemama() {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  function SignIn(email, password) {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  function LogOut() {
    setLoading(false)
    caxios.post('/logout').then().catch(err => err)
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser && !!currentUser?.email) {
        caxios.post('/jsonwebtoken', { email: currentUser.email}).then(res => {
          return res
        }).catch(error => console.log(error))
      } else {
        caxios.post('/logout').then().catch(err => err)
      }
    });
    setLoading(false)
    return () => {
      unSubscribe();
    }
  }, [])
  const context = {
    user,
    signUpUser,
    SignIn,
    LogOut,
    googlemama,
    loading
  }

  return (
    <myContext.Provider value={context}>
      {children}
    </myContext.Provider>
  );
};

export default Auth;