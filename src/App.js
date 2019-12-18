import React from 'react';

import List from './components/List/List'

function App(props) {
  const STORE = props.STORE
  let lists = STORE.lists
  for(let i=0;i<lists.length;i++){
    for(let x = 0; x < lists[i].cardIds.length; x++){
      lists[i].cardIds[x] = STORE.allCards[lists[i].cardIds[x]]
    }
  }
  let list = lists.map(list =>
    <List key={list.id} header={list.header} cards={list.cardIds} />)

  return (
    <main className='App'>
      <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
  <div className="App-list">{list}</div>
    </main>
  );
}

App.defaultProps = {
  STORE: {
    lists: []
  }
}

export default App;
