import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function Student({ name, major }) {

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Major:</strong> {major}</p>
      </div>
    </div>
  )
}