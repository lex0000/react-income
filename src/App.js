import React from 'react';
import './App.css';
import { observer } from 'mobx-react';

@observer
class App extends React.Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructure");
  }

  render(){
    return(
      <React.Fragment>
        <div>ggg</div>
      </React.Fragment>
    )
  }

}

export default App;
