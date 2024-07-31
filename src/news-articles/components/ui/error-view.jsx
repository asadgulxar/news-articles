import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const ErrorView = ({ error }) => {
  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        bgcolor: "error.main", // Background color for error
        color: "white", // Text color
        borderRadius: 1, // Rounded corners
        border: "1px solid",
        borderColor: "error.dark", // Border color
      }}
    >
      <Typography variant="body1" component="div">
        {error}
      </Typography>
    </Box>
  );
};

ErrorView.propTypes = {
  error: PropTypes.string.isRequired,
};
