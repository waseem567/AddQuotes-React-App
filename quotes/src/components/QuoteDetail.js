import React from "react";
import { Link, useParams } from "react-router-dom";
import "./QuoteDetail.css";


const QuoteDetail = (props) => {

  const params = useParams();

  // filtering Quote for detail... 
  const filteredQuote = props.allQuotes.filter(
    (quote) => {
        return quote.qId === params.quoteId;
    }
  );

  return (
    <>
      <div className="filteredQuote">
        <h1>Quote ID : {filteredQuote[0].qId.toUpperCase()}</h1>
        <div className="filtered_quote">
          <p>
            <q>{filteredQuote[0].quote}</q>
          </p>
        </div>
        <div className="filtered_quote_author">{filteredQuote[0].author}</div>
      </div>
      <div className="comment_button">
        <Link to={`/quotes/${filteredQuote[0].qId}/comments`}>Comment</Link>
      </div>
    </>
  );
};

export default QuoteDetail;
