import './../assest/home.css';
import './../assest/header.css';
import { Link } from "react-router-dom";
import Img1 from './../assest/img1.jpg';
import Img2 from './../assest/img2.jpg';
import Img3 from './../assest/img3.jpeg';
import Logo from './../assest/logo.png';

function Home() {
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
      <div className='homeContainer'>
        {/* Main Conatiner Start*/}
        <section className='homeContainer_main_container'>
          <div className='homeContainer_main'>
            <div>
              <h1>
                Build a knowledge, Be a Professional.
              </h1>
              <h2>
                A new lifestyle for Smart People.
              </h2>
            </div>
             <Link to="/abouts">More</Link>
          </div>
        </section>
        {/* Main Conatiner End*/}
        {/* Media Conatiner End*/}
        <section className='homeContainer_Media_container'>
          <div className='homeContainer_Media'>
            <div className=''>
              <h1>What is Quixel Bridge?</h1>
              <h3>"Skillup" is an online platform that offers a comprehensive range
                of internship opportunities and online courses to help individuals
                enhance their skills.</h3>
            </div>
            <div className='mediaImgContainer'>
              <img src={Img1} className="imgMedia" alt="Img" />
              <img src={Img2} className="imgMedia" alt="Img" />
              <img src={Img3} className="imgMedia" alt="Img" />
            </div>
            <div className='homeContainer_media_footer'>
              <p><b>Internship Opportunities:</b> Skillup provides a diverse range of internship opportunities
                across various industries, allowing students and recent graduates to apply theoretical knowledge
                in real-world scenarios. These internships could be both remote and in-person, catering to
                a wide range of preferences.
              </p>
              <p><b>Online Courses:</b>
                The platform offers a curated selection of online courses covering topics such as
                technology, business, marketing, design, and more. These courses are designed to be
                accessible to learners of all levels, from beginners to advanced practitioners.
              </p><p><b>Certifications:</b>
                Upon completing courses, users may earn certifications that validate their newly acquired
                skills. These certifications can enhance their resumes and increase their chances of career success.
              </p>
            </div>
          </div>
          <Link to="/abouts">Media</Link>
        </section>
        {/* Media Conatiner End*/}
        {/* Detail Conatiner Start*/}
        <section className='homeContainer_details_container'>
          <div className='homeContainer_details'>
            <div className='homeContainer_templateDeatils'>
              <h3><u>Template Details</u></h3>
              <span><b>Author:</b>{' '}PixelBridges</span><br />
              <span><b>Released:</b>{' '}August 2023</span><br />
              <span><b>Demo Credits:</b>{' '}Nilesh Kumar Maurya</span>
            </div>
            <hr />
            <div className='homeContainer_Description'>
              <h3><u>Description</u></h3>
              <span>
                "Skillup" is an online platform that offers a comprehensive range of internship
                opportunities and online courses to help individuals enhance their skills,
                acquire practical experience, and advance their careers.
              </span><br />
              <span>
                The platform serves as a bridge between students, professionals,
                and organizations, providing a seamless way for individuals to learn
                new skills and gain hands-on experience in their chosen fields.
              </span>
            </div>
          </div>
          <Link to="/contacts">Contacts Us</Link>
        </section>
        {/* Detail Conatiner End*/}
      </div>
    </>
  );
}

export default Home;
