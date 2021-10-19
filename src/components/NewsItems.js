import NewsItem from "./NewsItem";

const NewsItems = ({ newsHeadlines }) => {
    return (
        <div className="news-card__wrapper">
            {newsHeadlines.map((newsHeadline, index) => (
                <NewsItem
                    key={index}
                    newsHeadline={newsHeadline}
                />
            ))}
        </div>
    )
}

export default NewsItems;
