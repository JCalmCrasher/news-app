import './App.css';
import Header from './components/Header';
import NewsItems from './components/NewsItems';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="px-8 mt-10">
        <NewsItems />
      </div>
    </div>
  )
};

export default App;