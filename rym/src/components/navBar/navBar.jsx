import SearchBar from "../searchbar/SearchBar";

const navBar = ({onSearch}) => {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default navBar;