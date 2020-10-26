import React, { Component } from 'react'
import Post from './Post'
import Comments from './Comments'
import getComments from '../Services/GetComments'

export default class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: null
        }
    }

    setComments(id) {
        getComments(id).then(comments => this.setState({ comments }))
    }

    componentDidMount() {
        if (this.props.post) {
            this.setComments(this.props.post.id);
        }
    }

    componentDidUpdate(prevProps) {

        if (prevProps.post.id !== this.props.post.id) {
            this.setComments(this.props.post.id);
        }
    }

    render() {
        return (
            <div className="container">
                <Post data={this.props.post} />
                {null != this.state.comments && <Comments data={this.state.comments} />}
            </div>
        )
    }
}
