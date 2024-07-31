import axios from "axios";

export const convertNewYorkAPIFormat = (data) => {
  return data.docs.map((doc) => {
    const imageUrl =
      doc.multimedia && doc.multimedia.length > 0
        ? "https://www.nytimes.com/" + doc.multimedia[0].url
        : null;
    console.log(imageUrl);
    return {
      title: doc.headline.main,
      source: doc.source,
      author: doc.byline.original,
      description: doc.lead_paragraph,
      image: imageUrl,
      date: doc.pub_date,
    };
  });
};

export const convertNewAPIFormat = (data) => {
  return data.articles.map((article) => ({
    title: article.title,
    source: article.source.name,
    description: article.description,
    image: article.urlToImage,
    author: article.author,
  }));
};

export const getNewYorkTimesData = async (
  url,
  API_KEY,
  query,
  source,
  sort
) => {
  const request = await axios.get(url, {
    params: {
      q: query,
      fq: source ? `source:("${source}")` : undefined,
      "api-key": API_KEY,
      sort: sort === "date" ? "newest" : undefined, // 'newest' or 'oldest'
      page: 1,
      limit: 100,
    },
  });
  return convertNewYorkAPIFormat(request.data.response);
};

export const getNewsAPIData = async (url, API_KEY, query, source, sort) => {
  const response = await axios.get(url, {
    params: {
      q: query, // Search query
      sources: source || undefined, // Comma-separated list of sources
      sortBy: sort === "date" ? "publishedAt" : "relevancy", // Sorting order: 'relevancy', 'popularity', 'publishedAt'
      apiKey: API_KEY, // Your API key
    },
  });
  return convertNewAPIFormat(response.data);
};
