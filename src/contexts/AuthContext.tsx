import React from "react";
import { createContext } from "react";
import { User } from "../types/User";


export type AuthContextType = {
    user: User | null;
    signin: (email: string, passwor: string) => Promise<boolean>; 
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!)