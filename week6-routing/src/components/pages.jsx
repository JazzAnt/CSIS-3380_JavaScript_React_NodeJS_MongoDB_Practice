import queryString from "query-string";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Shopping App</h1>
    </div>
  );
};
export const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/** 
       * Outlet shows content only on specific embedded pages 
       * if url is /about then show <About> only
       * but if url is /about/history then <History> will appear on this outlet node
       * see App.jsx for nesting routes
       */}
      <Outlet/>
    </div>
  );
};
export const History = () => {
  return (
    <div>
      <h2>History</h2>
    </div>
  );
};
export const Services = () => {
  return (
    <div>
      <h2>Services</h2>
    </div>
  );
};
export const Locations = () => {
  return (
    <div>
      <h2>Locations</h2>
    </div>
  );
};
export const Events = () => {
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};
export const EventDetails = () => {
  /** month=1 is default value if user doesn't input a month */
  const {month = 1, year} = useParams();

  const location = useLocation();
  /**
   * Search is any query parameters
   * root/event/2026/12?approved=true&sortBy=ascending
   * search is the "?approved=true&sortBy=ascending"
   * which contains optional query params
   */
  const search = location.search; 
  /** Query String parses query params into an object of key-value pairs */
  const queryObject = queryString.parse(search)
  /** then just parse it like so */
  console.log(queryObject.approved)
  console.log(queryObject.sortBy)
  /** Usually you'll create an Events array that does stuff depending on query */
  return (
    <div>
      <h6>Month: {month} and Year" {year}</h6>
    </div>
  );
};
export const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul style={{fontSize:"2em", listStyleType:"none"}}>
        {/** For bigger list sizes, better to generate dynamic links */}
        <li><Link to="1">Product 1</Link></li>
        <li><Link to="2">Product 2</Link></li>
        <li><Link to="3">Product 3</Link></li>
      </ul>
    </div>
  );
};
export const ProductDetails = () => {
  const products = [
    { id: 1, name: "Laptop", desc: "About Laptops..." },
    { id: 2, name: "Notepad", desc: "About Notepads..." },
    { id: 3, name: "Smart Phone", desc: "About Smart Phones..." },
  ];
  //useParams is a hook that returns the object as a parameter, in this case 'id'
  //this connects to a ':id' in the Route
  let { id } = useParams(); 
  id = parseInt(id);
  console.log(useParams());
  const product = products.find((prod) => prod.id == id);
  console.log(product);
  return (
    <>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Description: {product.desc}</p>
    </>
  );
};
export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};
