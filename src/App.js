import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Auth} from 'aws-amplify';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { ApolloProvider } from "react-apollo";

import CreateMessage from './components/createMessage';

Amplify.configure(aws_exports);


class App extends Component {
  state = {
		user: null
  };
  
  componentDidMount() {
		Auth.currentAuthenticatedUser().then((u)=>{
			this.setState({user: u.username});
		})
  }
  

  render() {
    return (
      <div className="App">
        user is:
        {this.state.user}
        <CreateMessage username={this.state.user}/>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
