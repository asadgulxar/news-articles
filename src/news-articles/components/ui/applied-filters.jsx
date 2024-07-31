import { useContext } from "react";
import { Typography, Box, Container } from "@mui/material";

import { AppContext } from "../../context/app-context";

const AppliedFilters = () => {
  const { query, sortBy, source } = useContext(AppContext);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
          marginRight: "40px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Applied Filters:</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body1">
            <strong>Search Query:</strong> {query || "None"}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body1">
            <strong>Source:</strong> {source || "None"}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body1">
            <strong>Sort By:</strong> {sortBy || "None"}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AppliedFilters;
