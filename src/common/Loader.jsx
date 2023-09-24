import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loader;
