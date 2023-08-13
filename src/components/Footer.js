import './../assest/footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Footer() {
    return (
        <footer>
            <div className='footerPage'>
                <div className='logo'>
                    <GitHubIcon />
                    <ContactMailIcon />
                    <LinkedInIcon />
                </div>
                <div>
                    © SkillUp Foundation 2023. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
