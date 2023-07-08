import profile from '../images/profile.jpeg'
import Mail from '../images/Mail.png'
import linkedin from '../images/linkedin.png'
import '../components/About.css'

export default function About() {
    return (
        <div className = 'about'>
            <img className = 'profile-img'src={profile}/>
            <div className ='name'>
                <h1>Jake Moretz</h1>
                <h3>Frontend Developer</h3>
            </div>
            <div className="links">
                <button className="email-btn">
                    <img src={Mail}/>
                    <p>Email</p>
                </button>
                <button className="linkedin-btn">
                    <img src={linkedin} />
                    <p>Linkedin</p>
                </button>
            </div>
        </div>
    )
}