import { Link } from 'react-router-dom';
import './Quotes.css';


const Quotes = props => {
  const quoteId = props.qId;
  return (
    <div className="quotes">
      <div className="quote_text">
        <h1><q> {props.quote} </q></h1>
        <p>{props.author}</p>
      </div>
      <div className="quote_button">
        <Link to={`/quotes/${quoteId}`}><span>Open Full Screen</span></Link>
      </div> 
    </div>
  );
};
export default Quotes;
