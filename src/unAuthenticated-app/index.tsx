import { useState } from "react"
import { LoginSreen } from "./login"
import { RegisterSreen } from "./register"

export const UnAuthenticatedApp = () => {
    const [isRegister,  setIsRegister] = useState(false)

    return (
        <>
            {isRegister ? <LoginSreen /> : <RegisterSreen/>}
            <button onClick={()=> setIsRegister(!isRegister)}>切换到{isRegister ? '注册':'登录'}</button>
        </>
    )
}