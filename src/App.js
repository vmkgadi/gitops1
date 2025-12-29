import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div style={{ fontSize: 30 }}>
          Version{' '}
          <span style={{ color: 'red' }}>I am on a mission - Dont stop till I get what I wanted</span>
        </div>
      </header>
    </div>
  );
}

export default App;
