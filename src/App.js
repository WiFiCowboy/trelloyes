import React, { Component } from 'react';
import List from './components/List/List';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}
class App extends Component {

  state = {
    STORE: this.props.STORE
  }

  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
        key === keyToOmit ? newObj : { ...newObj, [key]: value },
      {}
    );
  }

  handleDeleteCard = (cardId) => { //,maybe add listId param
    const { lists, allCards } = this.state.STORE;
    //we're checking all lists and deleting IDs, need to narrow down to touched list
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
    const newCards = this.omit(allCards, cardId);

    this.setState({
      STORE: {
        lists: newLists,
        allCards: newCards
      }
    })
  }

  handleAddCard = (listId) => {
    const newCard = newRandomCard()
    const newLists = this.state.STORE.lists.map(list => {
      if (list.id === listId) {
        console.log(list.id," & ", listId)
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      STORE: {
        lists: newLists,
        allCards: {
          ...this.state.STORE.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  render() {
    const store = this.state.STORE
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
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
