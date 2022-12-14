import { User } from '../components/search-pannel'
interface Project {
    id: string
    name: string
    personId: string
    company: string
    created: string
}
interface List {
    list: Project[],
    users: User[]
}
export const List = ({list, users}:List) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>负责人</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(item=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{users.find(user=>user.id===item.personId)?.name || '未知'}</td>
                                </tr>  
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}