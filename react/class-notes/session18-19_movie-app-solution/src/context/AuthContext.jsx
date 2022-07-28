import React from "react";
// import { useContext } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();
//*/ with custom hook;
// export const useAuthContext = () =>{
//   return useContext(AuthContext);
// }

const AuthContextProvider = ({ children }) => {
  // const {Provider} = ({ children }) => { /** böyle de yazabilir aşağıda da <provider> {children}</provider> şeklinde sarmallayabilirdik*/
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
