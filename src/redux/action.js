 export const ADD_USERNAME ='USERNAME';


 export const addUser=(name)=>{
    return {
        type :ADD_USERNAME,
        payload:name
    }

}