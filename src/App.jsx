import NavBar from './components/navbar/NavBar'
import Home from './pages/Home'
import Joyeria from './pages/Joyeria'
import Ropadehombre from './pages/Ropadehombre'
import { Route, Routes } from 'react-router'
import ItemListContainer from './components/Items/ItemListContainer'
import Footer from './components/Footer/Footer'

import Detalle from './pages/Detalle'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ropa de hombre' element={<Ropadehombre />} />
        <Route path='/Joyeria' element={<Joyeria />} />
        <Route path='/detalle/:id' element={<Detalle />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

      </Routes>

      <Footer />

    </>
  )
}

export default App