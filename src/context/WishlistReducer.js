import React from 'react'
import { ADD_TO_WISHLIST, UPDATE_STATUS } from './actions.type'

export default(state,action)=>{

    switch(action.type){
        

        case ADD_TO_WISHLIST:
            return [...state,action.payload]
            
        case UPDATE_STATUS:
            const index=state.findIndex(product=>product.id===action.payload)
            const newArray=[...state]
            newArray[index].wishlisted=true
            return newArray


        default:return state
    }
}

