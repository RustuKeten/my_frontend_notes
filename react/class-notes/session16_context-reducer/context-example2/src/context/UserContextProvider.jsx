import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
//? 1.defininig
export const UserContext = createContext();

  //? 3.consume function (custom hook)
export const useUserContext =()=>{
    return useContext(UserContext)
}

//? 2.provider component;

const UserContextProvider = (children) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const changeWidth = (id, width) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, width: width } : user))
    );
  };

  const values = { users, changeWidth };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
