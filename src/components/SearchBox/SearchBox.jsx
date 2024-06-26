import styles from "./SearchBox.module.css";
import { changeNameFilter } from "../../redux/filtersSlice"; 
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchName = e.target.value;
    dispatch(changeNameFilter(searchName));
  };

  return (
    <div>
      <p className={styles.label}>Find contacts by name</p>
      <input
        className={styles.searchField}
        placeholder="Enter name"
        name="searchName"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;