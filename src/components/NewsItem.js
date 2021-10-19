import NewsItemTime from "./NewsItemTime";
import PropTypes from 'prop-types';

const NewsItem = ({ newsHeadline }) => {
    return (
        <div className="news-card">
            <div className="flex justify-between">
                <h3 className="news-title"><a href={newsHeadline.url} target="_blank" rel="noreferrer" >{newsHeadline.title}</a></h3>
            </div>
            <p
                className="font-thin 
                dark:text-gray-300 
                text-gray-600"
            >
                <small>{newsHeadline.source.name} - </small>
                <NewsItemTime datePublished={newsHeadline.publishedAt} />
            </p>
            <p className="news-description">
                {newsHeadline.description}
            </p>
        </div>
    )
};

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default NewsItem;
