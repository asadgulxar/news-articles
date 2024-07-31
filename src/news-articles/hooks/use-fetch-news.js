import { useState, useEffect, useContext } from "react";

import { AppContext } from "../context/app-context";
import {
  NEW_YORK_API_KEY,
  NEW_YORK_API_URL,
  NEWS_API_KEY,
  NEWS_API_URL,
} from "../../utils/constants";
import { getNewYorkTimesData, getNewsAPIData } from "../../utils/helper";

const useFetchNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { query, sortBy, source, currentTab } = useContext(AppContext);
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let data = [];
        if (currentTab === 0) {
          data = await getNewsAPIData(
            NEWS_API_URL,
            NEWS_API_KEY,
            query,
            source,
            sortBy
          );
        } else {
          data = await getNewYorkTimesData(
            NEW_YORK_API_URL,
            NEW_YORK_API_KEY,
            query,
            source,
            sortBy
          );
        }
        setNews(data);
      } catch (error) {
        setError(error.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchNews();
  }, [currentTab, query, sortBy, source]);

  return { news, loading, error };
};

export default useFetchNews;
