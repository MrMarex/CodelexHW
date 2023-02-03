import './App.css'
import FocusedInput from './components/FocusedInput';
import DisabledButton from './components/DisabledButton';
import CounterSet from './components/CounterSet';
import ColoredBoxes from './components/ColoredBoxes';
import InputForm from './components/InputForm';
import InputForm2 from './components/InputForm2';
import ColorChangingRectangle from './components/ColorChangingRectangle';
import CloneRectangle from './components/CloneRectangle';
import CornerDiv from './components/CornerDiv';

function App() {
  return (
    <div className="App main-container">
      <FocusedInput />
      <DisabledButton />
      <CounterSet />
      <ColoredBoxes />
      <InputForm />
      <InputForm2 />
      <ColorChangingRectangle />
      <CloneRectangle />
      <CornerDiv />
    </div>
  )
}

export default App
