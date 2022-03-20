import { transaction } from "../api/YelpAPi";
import { useState } from "react";

export default useTransactions = () => {
    const [Error, setError] = useState(null);
    const [filterResults, setfilterResults] = useState([]);

    const SearchTransaction = async (filter) => {
        try {
            const response = await transaction(`/${filter}/search`)
            console.log(response.data)
        } catch (error) {
            setError(Error.message)
            console.log(Error.message)
        }
    }
    return [SearchTransaction, filterResults]
}

