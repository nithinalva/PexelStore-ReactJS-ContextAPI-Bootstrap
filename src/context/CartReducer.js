import React from 'react'
import { ADD_TO_CART, ADD_TO_WISHLIST } from './actions.type'

export default(state,action)=>{

    switch(action.type){
        case ADD_TO_CART:
            return[...state,action.payload]

     

        default:return state
    }
}

