import './App.css';
import Header from './components/Header';
import NewsItems from './components/NewsItems';
import NotFound404 from './components/NotFound404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [newsHeadlines, setNewsHeadlines] = useState([]);

  const BASE_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2d021085c2e64c23927ff485d9f4299b";

  const fetchNewsHeadlines = async () => {
    const res = await fetch(`${BASE_URL}`);
    const data = await res.json();

    return data;
  }

  useEffect(() => {
    const getNewsHeadlines = async () => {
      const headlines = await fetchNewsHeadlines();
      setNewsHeadlines(headlines.articles);
    }

    getNewsHeadlines();
  }, [])

  return (
    <div className="App">
      {newsHeadlines.length > 0 && <Header newsSources={newsHeadlines} />}
      <main className="px-8 mt-10">
        <Router>
          <Switch>
            <Route path="/" exact render={() => (
              <>
                {
                  newsHeadlines.length > 0 ? <NewsItems
                    newsHeadlines={newsHeadlines} /> : "Ouch! No news to show, try refreshing your browser"
                }
              </>
            )} />
            <Route component={NotFound404} />
          </Switch>
        </Router>
      </main>
    </div>
  )
};

export default App;