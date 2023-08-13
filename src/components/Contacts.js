import './../assest/header.css';
import './../assest/contacts.css';
import { Link } from "react-router-dom";
import Logo from './../assest/logo.png';

function Contacts() {
  return (
    <>
      <header>
        <div className='logo'>
          <Link to="/">
            <img src={Logo} className='homeImg' alt='logo' /></Link>
        </div>
        <div className='headerContainer_page'>
          <Link to="/">Home</Link>
          <Link to="/abouts">Abouts</Link>
          <Link to="/media">Media</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </header >
      <div className="contactsPage">
        <div className="contactpage_title">
          <h1>Contact Us :</h1>
          <h2 className='textStyle'>In order to resolve a complaint regarding the Site or
            for add new themes and new Update or to receive further information regarding use of the Service,
            please contact us at :
          </h2>
        </div>
        <div className="contactpage_Link">
          <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=new">nileshmaurya101@gmail.com</a>
        </div>
      </div>
    </>
  );
}

export default Contacts;
