import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const handleError = () => {
        toast.error('Erro ao completar operação');
    }
  
    const handleWarnNoFound = () => {
        toast.warn('Usuário não encontrado, verifique suas credenciais');
    } 

    const handleWarnInvalidPasssword = () => {
        toast.warn('Senha inválida, tente novamente');
    } 
    
    useEffect(() => {
        const loadingStoreData = async () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");
    
            if(storageToken && storageUser){
                setUser(storageUser);
            }
        };
        loadingStoreData();
    }, [])

    const signIn = async (email, password) => {
        const response = await api.post("/auth", {
            email,
            password
        });

        if (response.data.error) {

            if(response.data.error === "user not found"){
                return handleWarnNoFound();
            }else if(response.data.error === "password invalid"){
                return handleWarnInvalidPasssword();
            }

        } else {

            if(response.data.user){
                setUser(response.data.user);
                api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
                localStorage.setItem("@Auth:token", response.data.token);
                localStorage.setItem("@Auth:user", response.data.user);
            }else{
                return handleError();
            }
        }
    } 

    const signOut = () => {
        localStorage.clear();
        setUser(null);
        return <Navigate to="/"/>
    }

    return (
        <AuthContext.Provider value={{
            user,
            signed: !!user,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}