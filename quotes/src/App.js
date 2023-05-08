import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Quotes from "./components/Quotes";
import AddQuote from "./components/Add-Quote";
import WelcomePage from "./components/Welcome-Page";
import QuoteDetail from "./components/QuoteDetail";
import Comments from "./components/Comments";
import "./App.css";


function App() {

  const [change, setChange] = useState(false);
  const [quotesData, setQuotesData] = useState([{
    qId: Math.random().toString(),
    quote: 'A new quote!!', author: 'waseem',
    comments : ['This quote is Good!!']
  }]);

  // adding new Quote...
  const addNewQuote = (data) => {
    setQuotesData(prevQuotes => [...prevQuotes, data]);
  };

  // adding new Comment... 
  const commentAddHandler = (newComment,id) => {
  const quoteIndex = quotesData.findIndex(quote => quote.qId === id);
  quotesData[quoteIndex].comments.push(newComment);
  setChange(()=> {
    return !change;
  });
};

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route exact path="/quotes" element={
          quotesData.map(quote => <Quotes key={Math.random()} quote={quote.quote} author={quote.author} qId={quote.qId} />)
        } />
        <Route path="/add-quote" element={<AddQuote onAddNewQuote={addNewQuote} />}></Route>
        <Route path={`/quotes/:quoteId`} element={<QuoteDetail allQuotes={quotesData} />}></Route>
        <Route path={`/quotes/:quoteId/comments`} element={[<QuoteDetail allQuotes={quotesData} />,<Comments quotes={quotesData} onAddNewComment={commentAddHandler}/>]}></Route>
      </Routes>
    </div>
  );
}

export default App;
