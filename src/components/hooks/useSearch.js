import YelpAPi from '../api/YelpAPi'
import { useState, useEffect } from 'react'

export default useSearch = () => {
    const [results, setResults] = useState([]);
    const [Error, setError] = useState(null);
    const [load, setload] = useState(false);

    const SearchApi = async (searchTram,location) => {
        setload(true)
        if (!location) {
            location = 'sandiago'
        }
        console.log(searchTram)
        try {
            const response = await YelpAPi('/search', {
                params: {
                    limit: 50,
                    term: searchTram,
                    location: location,
                }
            })
            setResults(response.data.businesses);
        } catch (error) {
            setError(error.message)
        }
    }
    // useEffect(() => {
    //     SearchApi('food')
    // }, [])
    return [SearchApi, load, results]
}
