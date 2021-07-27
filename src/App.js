import React,{useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarC from './components/Navbar';
import Body from './components/Body';
import CartReducer from './context/CartReducer';
import CartContext from './context/CartContext';
import WishlistReducer from './context/WishlistReducer';



function App() {

  const [cart, cartdispatch] = useReducer(CartReducer,[])
  const [wishlist,wishlistdispatch]=useReducer(WishlistReducer,[])
  return (
    <>
    <CartContext.Provider value={{wishlist,wishlistdispatch,cart,cartdispatch}}>
    <NavbarC/>
   <Body/>
   
    </CartContext.Provider>
     
    </>
  
    
  );
}

export default App;
