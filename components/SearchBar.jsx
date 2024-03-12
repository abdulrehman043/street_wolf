import { useRouter } from 'next/navigation';
import styles from "@styles/style.css";

const SearchBar = ({ onSearch }) => {
  const router = useRouter();

  const handleSearch = () => {
    const inputElement = document.getElementById('searchInput');
    const searchString = inputElement.value;

    if (searchString.trim() !== "") {
      // Redirect to the search results page with the search query as a query parameter
      router.push(`/college_search?string=${searchString}`);
      
      // Trigger the provided search callback
      if (onSearch) {
        onSearch(searchString);
        router.refresh();
      }
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className="input-group mb-3">
        <input
          id="searchInput"
          type="text"
          className={`form-control ${styles.searchInput}`}
          placeholder="Search..."
        />
        <button
          className={`btn btn-outline-secondary search_phone ${styles.searchButton}`}
          type="button"
          onClick={handleSearch} // Handle search on click
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
