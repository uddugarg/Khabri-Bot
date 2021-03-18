import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import NewsCards from './components/NewsCards/NewsCards';
import khabri from './images/khabri.jpg';
import wordsToNumbers from 'words-to-numbers';

function App() {

  const alanKey = '473b66ecf7864999a771f6b6601c8c162e956eca572e1d8b807a3e2338fdd0dc/stage';

  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticles, setActiveArticles] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticles(-1);
        } else if (command === 'highlight') {
          setActiveArticles((prev) => prev + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again..');
          }
        }
      }
    })
  }, [])

  return (
    <div className="App">
      <div className='Logo'>
        <img src={khabri} alt='Khabri Bot' />
      </div>
      <NewsCards articles={newsArticles} activeArticles={activeArticles} />
    </div>
  );
}

export default App;
