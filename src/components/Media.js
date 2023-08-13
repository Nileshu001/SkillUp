import './../assest/header.css';
import './../assest/media.css';
import { Link } from "react-router-dom";
import Logo from './../assest/logo.png';

function Media() {
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
      <div className="mediaPage">
        <section className='box'>
          <h1>Connecting You to Our Story:</h1>
          <p>Welcome to SkillUp's Media Contact page! Here, you'll find all the
            resources you need to connect with us and learn more about our journey,
            mission, and impact. Our platform is dedicated to empowering individuals
            through education, skill enhancement, and real-world experiences.
            We're excited to share our story with you.
          </p>
          <h1>About SkillUp:</h1>
          <p>SkillUp is an innovative online platform that offers a diverse range of internship
            opportunities and online courses, catering to individuals who are eager to enhance
            their skills, knowledge, and career prospects. Our mission is to bridge the gap
            between education and practical application, helping learners gain valuable
            experience and become well-rounded professionals.
          </p>
        </section>.
        <section>
          <h1>Connect with Us:</h1>
          <p><b>Expert Insights:</b><br /> Our team of experts and industry professionals can provide
            valuable insights and perspectives on various topics related to education, skill
            development, career growth, and industry trends.
          </p>
          <p><b>Success Stories:</b><br /> Hear inspiring stories from learners who have benefited
            from SkillUp's programs. Discover how our platform has transformed their lives and careers.
          </p>
          <p><b>Thought Leadership:</b><br />  Access thought-provoking articles, blog posts, and thought
            leadership pieces authored by SkillUp's experts. Stay informed about the latest developments
            in education and professional growth.
          </p>
          <p><b>Media Resources:</b><br />  Find high-resolution images, logos, and visuals that represent the
            essence of SkillUp. These resources can be used for articles, features, and other media content.
          </p>
        </section>
      </div>
    </>
  );
}

export default Media;
