import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import gql from 'graphql-tag';

import {createMessage} from '../graphql/mutations';

let CreateMessage = gql(createMessage);

// "0fec37fa-c591-4c67-be67-30a44449132f"
export default class CreateMessageApp extends Component {
	state = {
		message: ''
	};

	handleChange = (e) => {
		this.setState({message: e.target.value});
	}

	render() {
        let {user} = this.props;
        return (

            <Mutation mutation={CreateMessage}>
				{
					(createMessage, {data}) => {
						return (
							<div>
								<form onSubmit={
									e => {
										e.preventDefault();
										createMessage({
											variables: {input: {
                                                user: user,
                                                message: this.state.message,
                                                messageRoomId:"0fec37fa-c591-4c67-be67-30a44449132f"
                                            }
                                        }
										})
										this.setState({message: ''})
									}
								}>
									<Input onChange={this.handleChange} value={this.state.message}/>
									<Button variant="raised" color="primary" type="submit">Send</Button>
								</form>
							</div>
						)
					}
				}
			</Mutation>
        )
    };

}

