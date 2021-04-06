import './App.css';
import Images from './components/Images'

function App() {
  return (
    <div className='bg-gradient-to-br from-yellow-400 to-indigo-500 p-1.5 font-sans'>
      <div className='min-h-screen bg-hero-pattern bg-cover'>
        <div className='bg-black bg-opacity-50 pb-5 min-h-screen'>
          <Images />
        </div>
      </div>
    </div>
  );
}

export default App;

// code source from https://www.youtube.com/watch?v=FiGmAI5e91M
