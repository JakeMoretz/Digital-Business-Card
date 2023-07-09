import Instagram from '../images/instagram icon.png'
import Github from '../images/Github icon.png'
import "./footer.css"


export default function Footer() {
    return (
        <div className = 'social-media'>
            <a href="https://www.instagram.com/that.dev.jake/"><img className = 'img'src={Instagram} alt="" /></a>
            <a href="https://github.com/JakeMoretz"><img className = 'img' src={Github} alt="" /></a>
        </div>
    )
}