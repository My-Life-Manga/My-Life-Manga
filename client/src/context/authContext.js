import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    // LAUNCH WEBSITE CONFIG
    // const res = await axios.post("https://mylifemanga.com:3000/api/auth/login", inputs, {
    //   withCredentials: true,
    // });

    // LOCAL WEBSITE CONFIG
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };

  const logout = async () => {
    try {
      // LAUNCH WEBSITE CONFIG
      // await axios.post("https://mylifemanga.com:3000/api/auth/logout", {}, {
      //   withCredentials: true,
      // });

      // LOCAL WEBSITE CONFIG 
      await axios.post("http://localhost:8800/api/auth/logout", {}, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
