import React from 'react';
import Places from './Places.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Places/>
      </div>
    )
  }
}

export default App;