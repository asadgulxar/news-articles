import { Box, IconButton, Drawer } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { useState } from "react";
import FiltersForm from "./filters-form";

export const Filters = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setIsDrawerOpen(newOpen);
  };

  return (
    <Box
      display="flex"
      flexDirection="row-reverse"
      sx={{
        position: "fixed",
        top: "120px",
        width: "100%",
        zIndex: 2,
      }}
    >
      <IconButton onClick={toggleDrawer(true)} color="primary">
        <TuneIcon fontSize="large" />
      </IconButton>
      <Drawer
        sx={{ width: "500px" }}
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <FiltersForm />
      </Drawer>
    </Box>
  );
};
