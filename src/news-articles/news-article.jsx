import { Box } from "@mui/material";

import Article from "./components/article";
import TopNavBar from "./components/nav-bar";
import CenteredTabs from "./components/tabs";
import { Filters } from "./components/filters";
import useFetchNews from "./hooks/use-fetch-news";
import { ErrorView } from "./components/ui/error-view";
import { NoDataFound } from "./components/ui/epmty-data-view";
import { Loader } from "./components/ui/loader";
import AppliedFilters from "./components/ui/applied-filters";

export const NewsArticles = () => {
  const { news, loading, error } = useFetchNews();

  return (
    <>
      <TopNavBar />
      <CenteredTabs />
      <Filters />
      <Box marginTop="120px">
        <AppliedFilters />
        {loading ? (
          <Loader />
        ) : (
          <>
            {news.map((newsItem) => (
              <Article
                key={newsItem.id}
                source={newsItem.source}
                author={newsItem.author}
                title={newsItem.title}
                image={newsItem.image}
                description={newsItem.description}
              />
            ))}
          </>
        )}
        {error && <ErrorView />}
        {!error && !loading && !news.length && <NoDataFound />}
      </Box>
    </>
  );
};
