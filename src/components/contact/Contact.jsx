import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact container' >
       <div className="contact_info">
        <h2>Subscribe For Latest Updates</h2>
        <input type="email" placeholder='enter your email' />
        <div className="btn"> Subscribe </div>
       </div>
    </div>
  )
}

export default Contact