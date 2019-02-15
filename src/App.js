import React, { Component } from 'react';
import STORE from './store';
import './App.css';
import List from './List';


class App extends Component {
  state = {
    allCards: STORE.allCards,
    lists: STORE.lists
  }

  render() {
    
    const list = this.state.lists.map((item)=> {
      
     return <List header={item.header} key={item.id} cards={STORE.allCards} />
    });
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes</h1>
        </header>
        <div className="App-list">
          { list }
        </div>
      </main>
    );
  }
}

export default App;
