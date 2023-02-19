import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import AnimalList from "./Components/AnimalsList/AnimalsList";
import AddAnimalForm from "./Components/AddAnimalForm/AddAnimalForm";
import store from "./Store/store";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="main-heading">Animal list.</h1>
      <AddAnimalForm />
      <AnimalList />
    </div>
  );
}

function AppWithProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

setupListeners(store.dispatch);

export default AppWithProvider;
