export const isFalsy  = (val:unknown) => val === 0 ? false : !val

export const cleanObj = (obj:object) => {
    const result = {...obj}
    Object.keys(result).forEach(key=>{
        //@ts-ignore
        let value = result[key]
        if(isFalsy(value)){
            //@ts-ignore
            delete result[key]
        }
    })
    return result
}