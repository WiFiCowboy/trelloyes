import React from 'react';

import List from './components/List/List'

function App(props) {
  const STORE = props.STORE
  let lists = STORE.lists
  for(let i=0;i<lists.length;i++){
      lists[i].cardIds.map(id =>
        id = STORE.allCards[id]) //error, need to merge STORE objects
  }

    console.log('App:',lists)

  let list = lists.map(list =>
    <List header={list.header} cards={lists.cardIds} />)

  return (
    <main className='App'>
      <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
  <div className="App-list">{list}</div>
    </main>
  );
}

export default App;
