import React from "react";
import './Comment.css';

const Comment = props => {
    return (
        <div className="comment_box">
            <p>Comment</p>
            <div className="comment">
                {props.c}
            </div>
        </div>
    )
};

export default Comment;