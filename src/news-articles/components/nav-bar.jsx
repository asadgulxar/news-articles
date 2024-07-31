import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";

const TopNavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ height: "60px", backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", color: "black" }}
          >
            Welcome to News Aggregator
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default TopNavBar;
