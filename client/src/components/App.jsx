import React from 'react';
import Places from './Places.jsx';
import Todos from './Todos.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Places/>
        <Todos/>
      </div>
    )
  }
}

export default App;