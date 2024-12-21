import axios from "axios";
const {createContext, useContext, useState, useEffect} = require('react');
const NewsContext = createContext();
export const useNewsContext = () => useContext(NewsContext);

const apikey = process.env.REACT_APP_API_KEY;



export const NewsProvider = ({children}) => {
    const API_KEY = "caba642dbfe3431991816d5f4887ea9d";
    const BASE_URL = "https://newsapi.org/v2";
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResult] = useState(0);
    const [category, setCategory] = useState("");
    const [query, setQuery] = useState("");


    const fetchNews = async () => {
        setLoading(true);
        setError(null);
        try{
            const response = await axios.get(`${BASE_URL}/top-headlines`,{
                params:{
                    apiKey: apikey,
                    country: "us",
                    page: currentPage,
                    pageSize: 16,
                    category,
                    q: query
                },
            });
            //console.log(response.data.articles);
            setArticles(response.data.articles);
            setTotalResult(response.data.totalResults);
        } catch (err){
            setError ("error fetching news");
        } finally{
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchNews();
    }, [currentPage, category, query]);

    const changeCategory = (newCategory) => {
        setCategory(newCategory);
    }

    return (<NewsContext.Provider value={{articles, 
        loading, 
        error, 
        fetchNews, 
        currentPage, 
        setCurrentPage, 
        totalResults, 
        category, 
        changeCategory, 
        setQuery}}>{children}</NewsContext.Provider>);
};