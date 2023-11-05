import { Link } from 'react-router-dom'
import './Register.scss'

const CreateAcount = () => {
  return (
    <div className='create_acount' >
      <form>
        <h2> SIGN UP </h2>
        <div className="name">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
        <div className="remember">
        <input type="checkbox" id='checkbox' /> <label htmlFor="checkbox"> Remember me </label>
        </div>
        <div className="btn"> Sign Up </div>
        <p>Have An Acount?  <Link to='/register' > Sign In </Link> </p>
      </form>
    </div>
  )
}

export default CreateAcount