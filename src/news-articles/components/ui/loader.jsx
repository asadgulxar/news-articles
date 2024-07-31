import { Grid, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Grid item xs={12} display="flex" justifyContent="center" p={2}>
      <CircularProgress size={20} />
    </Grid>
  );
};
