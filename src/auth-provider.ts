import { User } from './views/project-list/components/search-pannel';
// 真实环境中使用第三方服务，不需要开发
const LocalStorageKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL
export const getToken = () => {
    return window.localStorage.getItem(LocalStorageKey)
}

export const handleUserResponse =  ( {user}:{user:User}) => {
    window.localStorage.setItem(LocalStorageKey, user.token || '')
    return user
}

export const login = (data:{username:string, password:string}) => {
    return fetch(`${apiUrl}/login`,{
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body:JSON.stringify(data)
    }).then(async (res:Response)=>{
        if(res.ok){
           return handleUserResponse(await res.json())
        } else {
            return Promise.reject(data)
        }
    })
}

export const register = (data:{username:string, password:string}) => {
    return fetch(`${apiUrl}/register`,{
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body:JSON.stringify(data)
    }).then(async (res:Response)=>{
        if(res.ok){
           return handleUserResponse(await res.json())
        } else {
            return Promise.reject(data)
        }
    })
}

export const logout = async () => window.localStorage.removeItem(LocalStorageKey)