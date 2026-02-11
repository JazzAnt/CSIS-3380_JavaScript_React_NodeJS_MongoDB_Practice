//shortcuts: sfc :statement function component
//convention is naming it the same as the filename 
//so header.jsx exports Header

//ACCESSING RESOURCES
//for public folder:
//using '/' will take you to the public folder
//used to store publicly accessible stuff

//for assets folder:
//need to import them
import scoreImg from '../assets/scoreboard.jpg'

//from URL:
const imageUrl = "https://cdn.pixabay.com/photo/2019/07/16/12/20/sports-4341729_1280.jpg"

//receiver is a destructured object (if not destructured usually named props)
//it's an object containing key-value pairs as the argument
const Header = ({title, subtitle}) => {
    return ( <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src="/images/scoreboard.jpg" alt="public image" height={100} width={100}/>
        <img src={scoreImg} alt="assets image" height={100} width={100}/>
        <img src={imageUrl} alt="url image" height={100} width={100}/>
    </header> );
}
 
export default Header;