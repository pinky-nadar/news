import './Navbar.css'
import { useNewsContext } from '../../context/Context'
import logo from '../../assets/logo.png'

function Navbar() {

    const {category, changeCategory, setQuery} = useNewsContext()

    const categories = [ "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports",
        "Technology",
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        const query = e.target.elements.search.value.trim()
        setQuery(query)
    }
  return (
    <nav className='header'>
        <div className='text-3xl font-bold underline'><img src={logo} alt="" className='vertical-middle' width="32px"/><span className='mx-1'>BoltNews</span></div>
        <ul className='category-list'>
            {
                categories.map((categoryName) => (
                    <li key={categoryName} className={`category-item ${
                        category === categoryName ? "active" : ""
                    }`} onClick={() => changeCategory(categoryName)}>{categoryName}</li>
                ))
            }
        </ul>
        <div className='search-bar'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text" name='search' placeholder='Search news'/>
                <button type="submit">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                </button>
            </form>
        </div>
    </nav>
  )
}

export default Navbar