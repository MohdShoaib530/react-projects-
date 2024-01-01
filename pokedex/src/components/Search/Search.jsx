import './Search.css'
import useDebounce from '../../hooks/useDebounce';
function Search({updateSearchTerm}) {
  const debounced = useDebounce((e) => updateSearchTerm(e.target.value))

  return (
    <div className='search-wrapper'>
      <input 
        id="pokemon-name-search"
        type="text"
        placeholder="pokemon-name"
        onChange={debounced}
        />
    </div>
  )
}

export default Search;