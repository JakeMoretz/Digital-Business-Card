import profile from '../images/profile.jpeg'
import Mail from '../images/Mail.png'
import linkedin from '../images/linkedin.png'
import '../components/Info.css'

export default function Info() {
    return (
        <div className = 'about'>
            <img className = 'profile-img'src={profile}/>
            <div className ='name'>
                <h1>Jake Moretz</h1>
                <h3>Frontend Developer</h3>
            </div>
            <div className="links">
                <form action="mailto:jmoretz9090@gmail.com">
                <button type = 'submit' className="email-btn">
                    <img src={Mail}/>
                    <p>Email</p>
                </button>
                </form>
               
                <form action="https://www.linkedin.com/in/jake-moretz-450668255/">
                <button type = "submit" className="linkedin-btn">                   
                    <img src={linkedin} />
                    <p>Linkedin</p>
                </button>
                </form>
            </div>
        </div>
    )
}