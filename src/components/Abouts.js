import './../assest/header.css';
import './../assest/abouts.css';
import { Link } from "react-router-dom";
import Logo from './../assest/logo.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Abouts() {
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
      <div className='aboutsPage'>
        <h1>Key features of the Skillup platform might include:</h1>
        <div className='aboutsPage_arical'>
          <p className='style'><b>Internship Opportunities:{' '}</b> <br />Skillup provides a diverse range of internship opportunities across
            various industries, allowing students and recent graduates to apply theoretical knowledge in
            real-world scenarios. These internships could be both remote and in-person, catering to a wide range of preferences.</p>
          <p className='style1'><b>Online Courses:{' '}</b><br />
            The platform offers a curated selection of online courses covering topics such as
            technology, business, marketing, design, and more. These courses are designed to be accessible to
            learners of all levels, from beginners to advanced practitioners.</p>
          <p className='style1'><b>Certifications:{' '}</b><br />
            Upon completing courses, users may earn certifications that validate their newly
            acquired skills. These certifications can enhance their resumes and increase their chances of career success.</p>
          <p className='style'><b>Flexible Learning:{' '}</b><br />
            Skillup's courses and internship opportunities are designed to be flexible,
            allowing learners to balance their educational pursuits with other commitments.</p>
          <p className='style'><b>Career Support:{' '}</b><br />
            The platform might provide resources like resume building, interview preparation,
            and career counseling to help individuals make the most of their learning experiences and stand out in the job market.</p>
          <p className='style1'><b>Industry Partnerships:{' '}</b><br />
            Skillup could collaborate with industry-leading companies and organizations
            to provide participants with insights into the latest industry trends, tools, and practices.</p>
          <p className='style1'><b>Networking:{' '}</b><br />
            The platform might facilitate networking opportunities among learners, professionals,
            mentors, and industry experts, creating a vibrant community where individuals can connect, share
            experiences, and learn from each other.</p>
          <p className='style'><b>Personalized Learning Paths:{' '}</b><br />
            Skillup could offer personalized recommendations for courses and
            internships based on individual preferences, career goals, and existing skills.</p>
          <p className='style'><b>User-Friendly Interface:{' '}</b><br />
            The platform's user interface would likely be designed to be intuitive
            and easy to navigate, ensuring a seamless learning experience for all users.</p>
          <p className='style1'><b>Affordability:{' '}</b><br />
            Skillup could provide affordable access to courses and internships, making quality
            education and valuable experiences accessible to a broader audience.</p>
        </div>
      </div>
      <h1>Popular Course  </h1>
      <div className='cardsCantainer'>
        <Card sx={{ maxWidth: 345 }} className='java'>
          <CardMedia
            sx={{ height: 250 }}
            image="https://blog.skillmonks.com/wp-content/uploads/2020/08/java-full-stack-developer-training-in-bangalore-tib.jpg"
            title="Java Devloper"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Full Stack Java Devloper
            </Typography>
            <Typography variant="body2" color="text.secondary">
              full-stack Java developer is a well-rounded professional who can design,
              develop, and deploy both frontend and backend components of web applications
              using Java and associated technologies.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" href='https://www.javatpoint.com/java-full-stack-developer'>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='materialUI'>
          <CardMedia
            sx={{ height: 250 }}
            image="https://avatars2.githubusercontent.com/u/33663932?v=4"
            title="Material UI(React UI tools)"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Material UI(React UI tools)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
              Start with Material UI, our fully-loaded component library, or bring your own design
              system to our production-ready components.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" href='https://mui.com/'>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='tailwindCSS'>
          <CardMedia
            sx={{ height: 250 }}
            image="https://www.scottbrady91.com/img/logos/tailwind.png"
            title="Tailwind CSS"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tailwind CSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tailwind CSS works by scanning all of your HTML files, JavaScript components,
              and any other templates for class names, generating the corresponding styles
              and then writing them to a static CSS file.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" href='https://tailwindcss.com/'>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='python'>
          <CardMedia
            sx={{ height: 250,  width: 250}}
            image="https://pluspng.com/img-png/python-logo-png-open-2000.png"
            title="Python"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Python is a popular high-level programming language known for its simplicity,
              readability, and versatility. It is widely used for various purposes, including
              web development, data analysis, scientific computing, artificial intelligence, automation, and more.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" href='https://www.python.org/'>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='mongoDB'>
          <CardMedia
            sx={{ height: 250 }}
            image="https://laymanclass.com/wp-content/uploads/2019/08/mongodb2.jpeg"
            title="MongoDB"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MongoDB
            </Typography>
            <Typography variant="body2" color="text.secondary">
              MongoDB is a popular open-source NoSQL database that provides a
              flexible and scalable approach to storing and managing data.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" href='https://www.mongodb.com/'>Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Abouts;
