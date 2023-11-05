import './Nav.scss'
const BottomNav = () => {
  return (
    <div className='bottom_nav container' >
      <ul>
        <li><a href="#home">    <i className="fa-solid fa-house">    </i>   </a></li>
        <li><a href="#feature"> <i className="fa-solid fa-list-ul">  </i>   </a></li>
        <li><a href="#arrivals"><i className="fa-solid fa-tags">     </i>   </a></li>
        <li><a href="#reviews"> <i className="fa-solid fa-comments"> </i>   </a></li>
        <li><a href="#blog">    <i className="fa-solid fa-blog">     </i>   </a></li>
      </ul>
    </div>
  )
}

export default BottomNav

