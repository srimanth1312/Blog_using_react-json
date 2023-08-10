import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page is not found</p>
            <Link to="/">Back To Home Page..</Link>
        </div>
    );
}
 
export default NotFound;