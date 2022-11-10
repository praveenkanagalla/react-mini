import Article from './Article';
import Cards from './Cards';
import { useEffect, useState } from 'react';

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedData, setSelectedData] = useState({});
  const [articles, setArticles] = useState([]);

  const onArticleClick = (articleIndex) => {
    setSelectedIndex(articleIndex);
    // console.log(selectedData);
  }

  const addComment = (commentData) => {
    const comments = articles[selectedIndex].comments || [];
    comments.push(commentData);
    articles[selectedIndex].comments = comments;
    setSelectedData(articles[selectedIndex]);
    setArticles(articles);
    localStorage.setItem('articles', JSON.stringify(articles));
  }

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem('articles'));
    if(localItems) {
      setArticles(localItems);
      setSelectedData(localItems[0]);
      setSelectedIndex(0); 
    }   
  }, []);

  useEffect(() => {
    if(articles.length) {
      setSelectedData(articles[selectedIndex]);
    }
  }, [selectedIndex]);

  return (
    <div className="articles">
      <div className='show__article'>
        <Article data={selectedData} addComment={addComment} />
      </div>
      <div className='card__articles'>
        <Cards articles={articles} onArticleClick={onArticleClick} />
      </div>
    </div>
  );
}

export default Home;
