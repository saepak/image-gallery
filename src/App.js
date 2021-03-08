import './App.css';
import Images from './components/Images'

function App() {
  return (
    <div className='min-h-screen bg-hero-pattern bg-cover'>
      <div className='bg-black bg-opacity-50 pb-5 min-h-screen font-sans'>
        <Images />
      </div>
    </div>
  );
}

export default App;
