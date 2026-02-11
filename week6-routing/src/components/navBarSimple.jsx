import { Link } from "react-router-dom";
  // Base address (root) is https://localhost:5173
  // For routing, add stuff like ...5173/home
  // You can shorten it to "/home" and it will auto include the root

  //if you use anchor <a> then it will do a "full-page-reload"
  //we don't want that, we want single page load that only change the contents
  //to do that, use <Link to=""> instead

    //   <a href="/services">Services</a> -> bad
    //   <Link to="/events">Events</Link> -> good

  // using slashes "/"
  // if your link has slashes, it is an absolute link 
  // if it doesn't, it'll instead append to a current link
    // <link to="services"> -> becomes currentRoute/services
const NavBar = () => {
    return (<nav><ul className="nav">
        <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="events">Events</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="products">Products</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="contact">Conatct Us</Link>
        </li>
    </ul></nav>);
}

export default NavBar;