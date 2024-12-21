import './NewsCard.css'
import defaultImage from '../../assets/default-image.jpg'
import moment from 'moment';


function NewsCard({article}) {
    const handleImageError = (e) => {
        e.target.src = defaultImage;
    };
    //const dateTimeAgo = moment.utc(article.publishedAt).local().startOf('seconds').fromNow();
    const currentTime = Date.now();
    const postedDateMs = new Date(article.publishedAt).getTime();
    const timeDiff = currentTime - postedDateMs;
    const hours = Math.floor(timeDiff / 36e5);

    const formattedHours = `${hours} hours ago`;
    console.log(formattedHours);

    //console.log(dateTimeAgo);
  return (
    <a href={article.url} className='news-card'>
        <img src={article.urlToImage || defaultImage} alt="" className='news-image' onError={handleImageError}/>
        <div className='news-content'>
            <p className='source'>{article.source.name}</p>
            <h3>{article.title}</h3>
            <p className='source'>{formattedHours}</p>
            <span className='news-link'>Read More...</span>
        </div>
    </a>
  )
}

export default NewsCard