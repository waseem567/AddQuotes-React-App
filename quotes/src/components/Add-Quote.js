import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Add-Quote.css';


const AddQuote = props => {
    const navigate = useNavigate();

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    // on Quote change...
    const quoteChangeHandler = event => {
        setQuote(event.target.value);
    };
    // on author name change...
    const authorChangeHandler = event => {
        setAuthor(event.target.value);
    };
    // on submit new Quote...
    const onAddQuoteHandler = (event) => {
        event.preventDefault();
        const data = {
            qId: Math.random().toString(),
            quote: quote,
            author: author,
            comments: []
        }
        props.onAddNewQuote(data);
        setQuote('');
        setAuthor('');
        navigate('/quotes');
    };
    
    return (
        <div className="add_quote">
            <form onSubmit={onAddQuoteHandler}>
                <input type="text" id="quote" value={quote} placeholder="Enter Quote. . ." onChange={quoteChangeHandler}/>
                <input type="text" id="author" value={author} placeholder="Enter Author. . ." onChange={authorChangeHandler}/>
                <div className="add_quote__button">
                    <button type="submit">Add Quote</button>
                </div>
            </form>
        </div> 
    )
};

export default AddQuote;