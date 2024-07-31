import { useState, useContext } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import { AppContext } from "../context/app-context";

const CenteredTabs = () => {
  const [value, setValue] = useState(0);
  const { setContextData } = useContext(AppContext);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setContextData((data) => ({ ...data, currentTab: newValue }));
  };

  return (
    <Box
      position="fixed"
      sx={{ top: "60px", width: "100%", background: "white", zIndex: 2 }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{ justifyContent: "center" }}
      >
        <Tab label="News API" />
        <Tab label="New York Times" />
      </Tabs>
    </Box>
  );
};

export default CenteredTabs;
