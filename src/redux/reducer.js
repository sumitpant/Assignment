import { ADD_USERNAME } from "./action";
export const initialState ={
    username:'John Doe'
}

export const reducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD_USERNAME :{
            return {
                username: action.payload
            }
           
        }
        default:return state;
    }

}