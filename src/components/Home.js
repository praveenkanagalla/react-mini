import Article from './Article';
import Cards from './Cards';
import { useState } from 'react';

const Home = () => {
  const [selectedData, setSelectedData] = useState({});

  const onArticleClick = (articleData) => {
    setSelectedData(articleData);
  }

  return (
    <div className="articles">
      <div className='show__article'>
        <Article data={selectedData} />
      </div>
      <div className='card__articles'>
        <Cards onArticleClick={onArticleClick} />
      </div>
    </div>
  );
}

export default Home;
