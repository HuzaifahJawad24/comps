import React from 'react'

const CommentsSection = ({ comment, name, email, handleOnChange }) => {
    return (
        <div className="card wow fadeIn">
            <div className="card-header font-weight-bold">Leave a reply</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Comment</label>
                            <textarea className="form-control" id="comment" rows="3" value={comment} onChange={handleOnChange} />
                        </div>
                        <label>Name</label>
                        <input type="text" id="name" className="form-control" value={name} onChange={handleOnChange} />
                        <br />
                        <label>E-mail</label>
                        <input type="email" id="email" className="form-control" value={email} onChange={handleOnChange} />
                        <div className="float-right mt-2">
                            <button className="btn btn-primary btn-lg" type="submit">Post</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default CommentsSection
