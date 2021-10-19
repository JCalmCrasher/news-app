import SearchBar from "./SearchBar";

const Header = ({ newsSources, onChangeNewsHeadline }) => {
    return (
        <header className="App-header flex md:flex-row flex-col md:space-y-0 space-y-2">
            <h1><a href="/" className="md:text-lg text-base">NewsApp</a></h1>
            <SearchBar />

            {/* TODO: Add search functionality */}
            <select name="source" className="news-source__select" onChange={onChangeNewsHeadline}>
                <option value="all">All</option>
                {newsSources.map((newsSource, index) => (
                    <option value={newsSource.source.name}>{newsSource.source.name}</option>
                ))}
            </select>
        </header>
    )
};

export default Header;
