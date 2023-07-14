import { Link } from 'react-router-dom';
import not_found from '../assets/notfound.png'

const ErrPage = () => {
  return (
    <div className="d-flex flex-column container vh-100 align-items-center justify-content-center">
        <img src={not_found} alt="404" className="img-fluid align-self-center w-50 h-50"/>
        <h2 className="text-muted fs-6 fw-bold py-2 display-5">Ohh! page Not Found</h2>
        <p className="text-secondary fs-6">We can't seem to find the page you're looking for.</p>
        <Link to={'/'}>
          <p className="text-success text-decoration-underline">Back Home</p>
        </Link>
    </div>
  );
};

export default ErrPage;
