import logo from './logo.svg';
import './App.css';
import { 
  BraveheartsCreateForm 
} from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Coming Soon</h3>
	<h1>Dream Bet 365</h1>
        <BraveheartsCreateForm
	  onSuccess={ () => alert('Thanks!') }
          onError={ () => alert('Oops! Try again please.') }
    	/>
      </header>
    </div>
  );
}

export default App;
