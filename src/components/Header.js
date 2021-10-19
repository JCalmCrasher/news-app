import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className="App-header">
            <h1><a href="/">NewsApp</a></h1>
            <SearchBar />
            <select name="" id="" className="news-source__select">
                <option value="">CNN</option>
                <option value="">BBC</option>
                <option value="">Al Jazeera</option>
            </select>
        </header>
    )
};

export default Header;
