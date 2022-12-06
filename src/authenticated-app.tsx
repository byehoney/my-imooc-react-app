import { useAuth } from "context/auth_context"
import { ProjectListScreen } from "views/project-list"

export const AuthenticatedApp = () =>{
    const { logout } = useAuth()
    return <>
        <button onClick={logout}>登出</button>
        <ProjectListScreen/>
    </>
}