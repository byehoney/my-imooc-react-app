
export interface User{
    id: string
    name: string
    token: string
    email: string
    title: string
    organization: string
}
interface SearchPannelProps {
    users:User[]
    param: {
        name: string,
        personId: string
    },
    setParam: (param: SearchPannelProps['param']) => void
}
export const SearchPannel = ({users, param, setParam}:SearchPannelProps) => {
    return (
        <form action="">
            <div>
                <input type="text" value = {param.name} onChange = {evt=> setParam({
                    ...param,
                    name:evt.target.value
                })}/>
                <select name="operator" id="operator" 
                    value = { param.personId } 
                    onChange = { evt => {
                        setParam({
                            ...param,
                            personId: evt.target.value
                        })
                    }}
                    > 
                    <option value={''}>负责人</option>
                    {
                        users.length && users.map( user => {
                            return <option value={user.id} key={user.id}>{user.name}</option>
                        })
                    }   
                </select>
            </div>
        </form>
    )
}