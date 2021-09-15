import './App.css';
import React, { Component } from 'react';
import MessageField from './messages/MessageList';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <h1 className="app__title">RoboChat</h1>
        <div className="content">
          <MessageField />
        </div>
      </div>
    );
  }
}


