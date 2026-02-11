const date = new Date(); //gets current datetime
const Footer = () => {
    return ( <footer>
        <p>Copyright &copy; {date.getFullYear()} Jason Januar</p>
    </footer> );
}
 
export default Footer;