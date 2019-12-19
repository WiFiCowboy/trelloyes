import React, { Component } from 'react';

import List from './components/List/List'
import STORE from './store';

class App extends Component {
  constructor(props){
    super(props)
  }

  state = {
    STORE: this.props.STORE
  }

  deleteHandler = (id) => { 
    let lists = this.state.STORE.lists;
    const newLists = lists.map(list => {
      console.log(list.cardIds)
      list.cardIds = list.cardIds.filter(card => card != id)
      return list;
    }
    );
      this.setState({
        STORE: {...this.state.STORE, lists: newLists}
      }) 
    }
    
  handleRandom = () => {
    console.log('add random buttom clicked!');
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    console.log(STORE.allCards)
    this.setState({allCards: newRandomCard})
  }
  
  render(){
    // console.log(this.state)
    let lists = this.state.STORE.lists
    for(let i=0;i<lists.length;i++){
      lists[i].cards = [];
      for(let x = 0; x < lists[i].cardIds.length; x++){
        lists[i].cards[x] = this.state.STORE.allCards[lists[i].cardIds[x]]
      }
    }

    
    // console.log("These are the list: ",lists);
    let list = lists.map(list =>
      <List  delete={this.deleteHandler} key={list.id} header={list.header} cards={list.cards} random={this.handleRandom}/>)
  
   
    return (
      <main className='App'>
        <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
    <div className="App-list">{list}</div>
      </main>
    );
  }
}

App.defaultProps = {
  STORE: {
    lists: []
  }
}

export default App;
