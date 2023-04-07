import { useEffect, useState } from "react";
import axios from "axios";

export default function useGet(url, initialState) {
    const [data, setData] = useState(initialState);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error)
            }
            setLoading(false);
        }

        fetchData();
    }, [url]);

    return { data, isLoading, error };
}