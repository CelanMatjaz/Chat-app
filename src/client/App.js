import React, { Component } from 'react';
import Routes from './Routes';

import { ApolloProvider } from 'react-apollo';
import client from './ApolloClient';

class App extends Component {   
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="app container">
                    <Routes/>
                </div>
            </ApolloProvider>            
        );
    }
}

export default App;