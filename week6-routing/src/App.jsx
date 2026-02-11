import { Link, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  History,
  Services,
  Locations,
  ProductDetails,
  EventDetails,
} from "./components/pages";
import Whoops404 from "./components/whoops404";

//Remember to use BrowserRouter for the main.jsx

// see navBarSimple.jsx for basics of routing
function App() {
  return (
    <div>
      <NavBar />
      {/**Routes nests Route which contain the route */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/** Nested routes which links to Outlets (see pages.jsx) */}
        <Route path="/about" element={<About />}>
          {/** path="history" is a relative path, so it becomes /about/history */}
          <Route path="history" element={<History />} />
          <Route path="services" element={<Services />} />
          <Route path="locations" element={<Locations />} />
        </Route>

        <Route path="/products" element={<Products />} />
        {/**
         * Route/Path Parameters (so you only need 1 for several routes)
         * use ':' to denote a variable which will be replaced
         * variable is sent to useParams() on ProductDetails
         * */}
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/events" element={<Events />} />
        {/**
         * :month? allows the param to be optional, define default on EventDetails
         * be careful, putting careless optional params may create conflicts
         * (1 link going to 2 different routes) which are a problem
         * */}
        <Route path="/events/:year/:month?" element={<EventDetails />} />
        {/** Check pages.jsx for query params stuff */}

        <Route path="/contact" element={<Contact />} />

        {/** wildcard makes it so this page appears when user mistype a path */}
        <Route path="*" element={<Whoops404 />} />

        {/**
         * Redirecting urls, useful if you change the url of an exising element
         * You want to redirect the old url to the new url
         */}
        <Route path="/services" element={<Navigate to="/about/services" />} />
      </Routes>
    </div>
  );
}

/**
 * Not depicted here but here's how you navigate using function calls (e.g. for buttons)
 * import {useNavigate} from "react-router-dom"
 * 
 * //save the function into a const (must be at the root of the export {})
 * const navigate = useNavigate()
 * 
 * then just call it
 * navigate("/home")
 * 
 * check color-organizer addcolor.jsx for this in practice
 */

export default App;
