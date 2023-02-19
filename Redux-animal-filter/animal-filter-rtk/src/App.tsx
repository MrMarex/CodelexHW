import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import AnimalList from "./Components/AnimalsList";
import AddAnimalForm from "./Components/AddAnimalForm";
import store from "./Store/store";

function App() {
  return (
    <div>
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
