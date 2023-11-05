import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/navbar/Nav'
import ContextProvider from './components/context/GlobalContext'
import HomePage from './components/homePage/HomePage'
import Cart from './components/cart/Cart'
import FavBook from './components/favBook/FavBook'
import BookApi from './components/BookApi/BookApi'
import CreateAcount from './components/register/CreateAcount'
import Register from './components/register/Register'
import Forget from './components/register/ForgetPass'

function App() {

  return (
    <Router>
    <ContextProvider>
    <div className='app'>
     <Nav />
     <BookApi />
     <Routes>
     <Route path='/'  element ={ <HomePage /> }/>
     <Route path='/cart'  element ={ <Cart /> }/>
     <Route path='/fav'  element ={ <FavBook /> }/>
     <Route path='/create-acount'  element ={ <CreateAcount /> }/>
     <Route path='/register'  element ={ <Register /> }/>
     <Route path='/forget'  element ={ <Forget /> }/>
     </Routes>
    </div>
    </ContextProvider>
    </Router>
  )
}

export default App
