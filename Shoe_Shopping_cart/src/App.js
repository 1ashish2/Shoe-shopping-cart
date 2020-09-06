import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './redux/reducer'

const store =createStore(reducer)




function App() {
  // cart setup

  return (
    <main>
      <Provider store={store}>
      <Navbar />
      <CartContainer />
      </Provider>
      
    </main>
  );
}

export default App;
