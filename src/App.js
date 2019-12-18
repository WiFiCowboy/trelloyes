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
    // console.log("this is id: ", id);
    
    let lists = this.state.STORE.lists;
    const newCards = lists.map(list => list.cardIds.filter(card => card.id !== id)
    );
    console.log(this.state.STORE, "vs");
    let newState = {
      lists: lists,
      allCards: newCards
    }
    console.log(newState);
    
    
    // const newCards = allCards.filter(card => 
    //   card === id) 
    
      
      // this.setState({ STORE: newState }) 
    // console.log('delete handler: ',id);
    }
      


  render(){
    // console.log(this.state)
    let lists = this.state.STORE.lists
    for(let i=0;i<lists.length;i++){
      for(let x = 0; x < lists[i].cardIds.length; x++){
        lists[i].cardIds[x] = this.state.STORE.allCards[lists[i].cardIds[x]]
      }
    }
    // console.log("These are the list: ",lists);
    let list = lists.map(list =>
      <List  delete={this.deleteHandler} key={list.id} header={list.header} cards={list.cardIds} />)
  
   
  
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
