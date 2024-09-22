import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchApi();
  }, [url]);

  return { response, loading, error };
};

export default useAxios;
