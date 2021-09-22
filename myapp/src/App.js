import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycleUnmount from './components/LifeCycleUnmount';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUnmountComponent: true
    }
  }

  render() {
    return <div>
      { this.state.showUnmountComponent ? <LifeCycleUnmount/> : null }
      <button onClick={() => {
        this.setState({showUnmountComponent: false});
      }}>Удалить компонент</button>
    </div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));