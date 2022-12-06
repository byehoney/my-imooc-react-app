import { useState } from 'react';
export const useArray = <T>(initialArray:T[]) =>{
    const [value, setValue] = useState(initialArray)
    return {
        value,
        setValue,
        add: (item:T)=> setValue([item, ...value]),
        removeIndex: (index:number) => {
            const newValue = [...value]
            newValue.splice(index, 1)
            setValue(newValue)
        },
        claer: ()=> setValue([]) 
    }
}