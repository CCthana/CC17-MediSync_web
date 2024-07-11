import { createContext } from "react";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";
import { useEffect } from "react";

import { useState } from "react";
import authApi from "../apis/auth";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getAuthUser();
          setAuthUser(res.data?.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsAuthLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (credentials) => {

     await authApi.login(credentials);
    // Here we assume the OTP is sent when login is called
  };

  const verifyOtp = async (email, otp) => {
    
    const res = await authApi.loginOTP({ email, otp });
    
    setAccessToken(res.data?.accessToken);
    const resGetAuthUser = await authApi.getAuthUser();
    // console.log("========= resGetAuthUser ============", resGetAuthUser)
    setAuthUser(resGetAuthUser.data?.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ login, verifyOtp, logout, authUser, isAuthUserLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}