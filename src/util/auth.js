import React, { useState, useEffect, useContext, createContext } from "react";
import queryString from "query-string";
import * as firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  // Replace with your own Firebase credentials
  firebase.initializeApp({
    /*
    apiKey: "AIzaSyB7UwSW5SjOs9oc_hBkmMtFw2tt9dlTEg4",
    authDomain: "divjoy-demo.firebaseapp.com",
    projectId: "mirianwallet-3d2aa",
    appID: "divjoy-demo"
    */
   apiKey: "AIzaSyB7UwSW5SjOs9oc_hBkmMtFw2tt9dlTEg4",
   authDomain: "mirianwallet-3d2aa.firebaseapp.com",
   databaseURL: "https://mirianwallet-3d2aa.firebaseio.com",
   projectId: "mirianwallet-3d2aa",
   storageBucket: "mirianwallet-3d2aa.appspot.com",
   messagingSenderId: "586888801534",
   appId: "1:586888801534:web:f8586b88315535301489af",
   measurementId: "G-WRRZQ6VTGH"
  });
}






const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... update when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  const sendPasswordResetEmail = email => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (password, code) => {
    // Get code from query string object
    const resetCode = code || getFromQueryString("oobCode");

    return firebase
      .auth()
      .confirmPasswordReset(resetCode, password)
      .then(() => {
        return true;
      });
  };

  // Subscribe to user on mount
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Subscription unsubscribe function
    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}

const getFromQueryString = key => {
  return queryString.parse(window.location.search)[key];
};
