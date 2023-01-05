import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((data) => {
        setData(data.data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [url]);

  return { data, error, loading, setData };
}
