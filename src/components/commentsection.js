import React from 'react';
import TextArea from "../components/textarea";
import '../css/commentsection.css'

const Comment = (props) => (
    <div className="comment">
        <div class="img-comment">	
            <img src={props.avatar} alt="" class="ava-comment"/>
        </div>
        <div class="comment-content">
            <span class="comment-name">
                {props.name}
            </span>
            <span class="comment-time">
                <i class="fa fa-clock-o"></i>
                {props.time}
            </span>
            <p class="comment-text">
              {props.comment}
            </p>
        </div>
    </div>

)

const CommentSection = (props) => (
    <div class="container-fluid">
        <div class="comment-block">
            <h1 class="comments-title">Comment ({props.comments.length})</h1>
            {props.comments.map((item) => <Comment avatar = {item.avatar} name = {item.name} comment = {item.comment} time = {item.time} key={item.id}/>)}
            <TextArea
                holderclass = "form-group"
                textareaclass = "form-control"
                id = "AddComment"
                label = "Add a Comment"
            />
            <button type="login" className="btn btn-primary btn pull-right">Add a Comment</button>
        </div>

    </div>
)

export default CommentSection;
