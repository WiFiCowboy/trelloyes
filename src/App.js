import React, { Component } from 'react';

import List from './components/List/List'

class App extends Component {
  constructor(props){
    super(props)
  }

  state = {
    STORE: this.props.STORE
  }

  deleteHandler = (id) => { 
    console.log("this is id: ", id);
    let lists = this.state.STORE.lists;
    const newLists = lists.map(list => {
      console.log(list.cardIds)
      list.cardIds = list.cardIds.filter(card => card != id)
      return list;
    }
    );
    console.log(this.state.STORE, "vs");
      this.setState({
        STORE: {...this.state.STORE, lists: newLists}
      }) 
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
      <List  delete={this.deleteHandler} key={list.id} header={list.header} cards={list.cards} />)
  
   
  
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
