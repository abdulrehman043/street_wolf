import { useRouter } from 'next/navigation';
import "@styles/style.css";

const SearchModal = ({ showModal, onClose }) => {
    const router = useRouter();

    const closeModal = () => {
        onClose();
    };

    const handleSearch = (event) => {
        try {
          // Access the input value with optional chaining
          const searchString = event.target.previousSibling?.value;
      
          if (searchString !== undefined && searchString !== null && searchString !== "") {
            // Redirect to the search results page with the search query as a query parameter
            router.push(`/college_search?string=${searchString}`, undefined, { shallow: true, onComplete: () => {
              router.refresh();
            }});
          }
        } catch (error) {
          console.error(error);
        }
        closeModal();
      };
      
      
      
      

    return (
        <>
            {showModal && (
                <div>
                    <div className="modal-backdrop" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                    <div className={`z-index-9999 modal show`} tabIndex="-2" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content rounded-3 shadow-lg">
                                <div className="modal-header rounded-3 bg-light">
                                    <div className="modal-body">
                                        {/* Search Bar */}
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search..."
                                                style={{ borderRadius: '0.375rem 0 0 0.375rem' }}
                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={handleSearch} // Handle search on click
                                            >
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <button type="button" className="btn-close" onClick={closeModal}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchModal;
