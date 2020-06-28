import React, { Component } from 'react';

class CommentList extends Component {
    render() { 
        let commentsList = this.props.comments.map(comment => {
            return <li key={comment.id} >{comment.name}: {comment.message}</li>
         })

        return (
            <div classeName="block__comment">
                <h2>Liste de Commentaire ({this.props.comments.length})</h2>
                <ul className="comment-list">
                    {commentsList}
                </ul>
            </div>
          );
    }
}
 
export default CommentList;