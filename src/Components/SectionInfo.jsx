import React, { Component } from 'react';

class SectionInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
        this.getUser = this.getUser.bind(this)
    }

    async getUser() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
        //console.log(await response.json());        
        return await response.json()
    }

    componentDidMount() {
        this.getUser().then(user => this.setState({ user }))
    }

    componentDidUpdate(prevProps){
        if(this.props.userId !== prevProps.userId){
            this.getUser().then(user => this.setState({ user }))
        }
    }

    render() {
        const { user } = this.state;
        return (
            <>
                {user &&
                    <div className="section">
                        <p>id: {user.id}</p>
                        <p>name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>email: {user.email}</p>
                        <p>phone: {user.phone}</p>

                    </div>
                }
            </>
        );
    }
}

export default SectionInfo;