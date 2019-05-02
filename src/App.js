import React, { Component } from 'react';
import STORE from './store';
import './App.css';
import List from './List';


class App extends Component {
  state = {store: STORE }

  handleDelete = (e) => {
    const { lists, allCards } = this.state.store;
    const deleteCard = lists.map(d => {
      d.cardIds = d.cardIds.filter(id => id !== e);
      return d;
    });
    delete allCards[e];
    this.setState({
      store: {
        lists: deleteCard,
        allCards
      }
    });
  }

  render() {
    const { store } = this.state;
    const list = store.lists.map((item)=> {
      
     return <List header={item.header} key={item.id} handleDelete={this.handleDelete} cards={STORE.allCards} />
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
