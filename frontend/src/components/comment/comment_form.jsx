import React from 'react';
import './comments.scss';

export default class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return event => this.setState({[field]: event.currentTarget.value});
    }

    componentDidMount(){
        this.props.fetchComments(this.props.comment.stop_id);
    }

    componentWillMount(){
        this.props.fetchComments(this.props.comment.stop_id);
    }

    handleSubmit(event){
        event.preventDefault();
        let comment = {
            body: this.state.body,
            rating: parseInt(this.state.rating),
            stop_id: this.props.comment.stop_id,
            user_id: this.state.user_id,
            username: this.state.username
        };
        debugger
        let stopId = this.props.comment.stop_id;
        this.props.createComment(comment);
        this.props.fetchComments(stopId);
    }

    render(){
        const { comments } = this.props;
        if (comments === undefined) {
            return [];
        }

        return(
            <div className='comments-wrapper'>
                <div className='comments-header-wrapper'>
                    <div className='comments-header'>
                        <h1>Leave a Comment</h1>
                    </div>
                </div>
                <form  className=
                'comment-form' onSubmit={this.handleSubmit}>
                    <div className='username-field'>
                    Username: 
                    <label>{this.state.username}</label>
                    </div>
                    <br></br>
                      <fieldset className="rating">
                        <legend>Rating:</legend>
                        <input type="radio" id="star5" name="rating" value="5" onChange={this.update('rating')} /><label for="star5" title="Rocks!">5 stars</label>
                        <input type="radio" id="star4" name="rating" value="4" onChange={this.update('rating')} /><label for="star4" title="Pretty good">4 stars</label>
                        <input type="radio" id="star3" name="rating" value="3" onChange={this.update('rating')} /><label for="star3" title="Meh">3 stars</label>
                        <input type="radio" id="star2" name="rating" value="2" onChange={this.update('rating')} /><label for="star2" title="Kinda bad">2 stars</label>
                        <input type="radio" id="star1" name="rating" value="1" onChange={this.update('rating')} /><label for="star1" title="Sucks big time">1 star</label>
                        </fieldset>
                        <br></br>
                        {/* <input 
                            type="number"
                            value={this.state.rating}
                            onChange={this.update('rating')}
                            required
                            max='5'
                            placeholder='5'
                        /> */}
                    <br></br>
                    <label className='comment-textarea-label'>Comment:
                    </label>
                    <br></br>
                     <br></br>
                        <textarea 
                            cols="40" 
                            rows="3"
                            value={this.state.body}
                            onChange={this.update('body')}
                            placeholder='Tell everyone about your experiences!'
                            required
                            className='comment-textarea'
                        />
                    <br></br>
                    <button className=
                    'comment-submit' type='submit'>Submit Comment</button>
                </form>

                <ul>
                    {Object.values(comments).map(comment => {
                        return(
                            <li key={comment._id}>
                                {comment.username}
                                <br/>
                                {comment.body}
                                <br/>
                                {comment.rating}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}