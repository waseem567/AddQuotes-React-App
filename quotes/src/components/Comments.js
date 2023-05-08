import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import './Comments.css';
import Comment from "./Comment";

const Comments = props => {
    let { quoteId } = useParams();
    const [comment, setComment] = useState('');

    // comment change Handling...
    const onChnageCommentHandler = event => {
        setComment(event.target.value);
    };

    // Submitting new Comment...
    const onSubmitCommentHandler = event => {
        event.preventDefault();
        props.onAddNewComment(comment,quoteId);
    };
    
    // filtering Comments of a Quote... 
    const allComments = props.quotes.filter(quote => quote.qId === quoteId);
    
    const comments = allComments[0].comments;
    return <>
        <div className="all_comments">
            {comments.map(comment => <Comment c={comment} key={Math.random()}/>)}
        </div>
        <form onSubmit={onSubmitCommentHandler}>
            <div className="quote_comments">
                <textarea name="comments" id="comments" placeholder="Comment here..." cols="30" rows="10" onChange={onChnageCommentHandler}></textarea>
                <div className="add_comment">
                    <button type="submit" className="add_comment_button">Add Comment</button>
                </div>
            </div>
        </form>
    </>
};

export default Comments;
