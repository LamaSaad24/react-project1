import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Home from './component/Home'
import NavbarComp from './component/Navbar'
import Products from './component/Products'
import Resturant from './component/Resturant'
import Index from './component/users/Index'
import Details from './component/users/Details'
import Edit from './component/users/Edit'

function App() {

  return (
    <>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/resturant' element={<Resturant/>}/>
        <Route path='/users/' element={<Index/>}/>
        <Route path='/users/details/:id' element={<Details/>}/>
        <Route path='/users/edit/:id' element={<Edit/>}/>
        <Route path='*' element={<h1>Page Not</h1>}/>
        <Route/>
        <Route/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
