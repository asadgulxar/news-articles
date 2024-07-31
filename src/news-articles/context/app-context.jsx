import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create a context with a default value
export const AppContext = createContext({
  query: "tesla",
  currentTab: 0,
  source: "",
  sortBy: "date",
  setContextData: () => {},
});

export const AppProvider = ({ children }) => {
  const [contextData, setContextData] = useState({
    query: "tesla",
    currentTab: 0,
    source: "",
    sortBy: "date",
  });

  return (
    <AppContext.Provider value={{ ...contextData, setContextData }}>
      {children}
    </AppContext.Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
