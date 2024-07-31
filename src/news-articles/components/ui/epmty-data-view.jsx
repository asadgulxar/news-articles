import { Box, Typography } from "@mui/material";

export const NoDataFound = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px", // Adjust height as needed
        bgcolor: "background.paper", // Background color
        border: "1px solid",
        borderColor: "text.disabled", // Border color
        borderRadius: 1, // Rounded corners
      }}
    >
      <Typography
        variant="h6" // You can use different variants based on your design
        color="text.secondary" // Text color for better visibility
      >
        No data found for applied filters
      </Typography>
    </Box>
  );
};
