import Article from './Article';
import Cards from './Cards';

const Home = () => {


  return (
    <div className="articles">
      <div className='show__article'>
        <Article />
      </div>
      <div className='card__articles'>
        <Cards />
      </div>
    </div>
  );
}

export default Home;