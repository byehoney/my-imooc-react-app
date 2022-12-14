import React, { ReactNode, useMemo, useState } from "react"
import * as auth from 'auth-provider'
import { User } from "views/project-list/components/search-pannel"
import { http } from "utils/http"
import { useMount } from "hooks/useMount"


interface AuthForm {
    username: string
    password: string
}

const bootStrapUser = async () => {
    let user = null
    const  token = auth.getToken()
    if(token){
        const data = await http('me',{token})
        user = data.user
    }
    return user
}
const AuthContext = React.createContext<{
    user: User|null
    login: (form:AuthForm) => Promise<void>
    register: (form:AuthForm) => Promise<void>
    logout: () => Promise<void>
}|undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<User|null>(null)
    const login = (form: AuthForm) => auth.login(form).then(user => setUser(user))
    const register = (form: AuthForm) => auth.register(form).then(user => setUser(user))
    const logout = () => auth.logout().then(()=>setUser(null))
    useMount(()=>{
        bootStrapUser().then(setUser)   
    })
    return <AuthContext.Provider children={children} value={{user, login, register, logout}}></AuthContext.Provider>
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if(!context){
        throw new Error('useAuth 必须在AuthProvider中使用');
    }
    return context
}