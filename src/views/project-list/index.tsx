import { useEffect, useState } from "react"
import qs from 'qs'
import { cleanObj } from '../../utils'
import { List } from "./components/list"
import { SearchPannel } from "./components/search-pannel"
import { useMount } from "hooks/useMount"
import { useDebounce } from "hooks/useDebounce"
import { useHttp } from "utils/http"
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name:'',
        personId:''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const client = useHttp()
    const debounceParam = useDebounce(param, 200)
    useEffect(()=>{
        client('projects', {data: cleanObj(debounceParam)}).then(res=>{
            setList(res)
        })
    },[debounceParam])
    useMount(()=>{
        client('users').then(res=>{
            setUsers(res)
        })
    })
    return (
        <div className="main">
            <SearchPannel param = {param} setParam = { setParam } users = {users}></SearchPannel>
            <List list = {list} users = {users}></List>
        </div>
    )
}