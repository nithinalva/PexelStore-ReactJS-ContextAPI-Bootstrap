import React from 'react'
import { ADD_TO_CART, ADD_TO_WISHLIST ,REMOVE_FROM_CART,UPDATE_STATUS} from './actions.type'

export default(state,action)=>{

    switch(action.type){
        case ADD_TO_CART:
            return[...state,action.payload]

            case UPDATE_STATUS:
                const index=state.findIndex(product=>product.id==action.payload)
                const newArray=[...state]
                newArray[index].wishlisted=true
                return newArray

            case REMOVE_FROM_CART:
                    return state.filter((product)=>product.basketId!==action.payload)

        default:return state
    }
}

