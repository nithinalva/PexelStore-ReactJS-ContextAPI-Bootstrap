import React,{useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarC from './components/Navbar';
import Body from './components/Body';
import CartReducer from './context/CartReducer';
import CartContext from './context/CartContext';
import WishlistReducer from './context/WishlistReducer';



function App() {

  const [cart, dispatch] = useReducer(CartReducer,[])
  const[wishlist,dispatch1]=useReducer(WishlistReducer,[])
  return (
    <>
    <CartContext.Provider value={{cart,dispatch}}>
    <NavbarC/>
   <Body/>
    </CartContext.Provider>
     
    </>
  
    
  );
}

export default App;
