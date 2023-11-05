import './Nav.scss'
const Menu = () => {
  return (
    <div className='menu_nav container' >
      <ul>
        <li> <a href="#home">    Home     </a> </li>
        <li> <a href="#feature"> Featured </a> </li>
        <li> <a href="#arrivals">Arrivalls</a> </li>
        <li> <a href="#reviews"> Reviews  </a> </li>
        <li> <a href="#blog">    Blogs    </a> </li>
      </ul>
    </div>
  )
}

export default Menu