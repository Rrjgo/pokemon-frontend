import { useState } from 'react';
import axios from 'axios';

export default function usePost(url, initialState) {
    const [state, setState] = useState(initialState);

    const postData = async (data) => {
        setState({ ...initialState, loading: true });

        try {
            const response = await axios.post(url, data);
            setState({ ...initialState, data: response.data });
        } catch (error) {
            setState({ ...initialState, error });
        }
    };

    return [state, postData];
};