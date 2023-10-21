import React from 'react'
import NavBar from './components/NavBar/NavBar'
import CartContextProvider from './context/cartContext/CartContextProvider'
import UserContextProvider from './context/userContext/UserContextProvider'
import RoutesComponent from './routes/RoutesComponent'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <NavBar />
          <RoutesComponent />
          <Footer />
        </UserContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App