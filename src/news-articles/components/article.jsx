import { Grid, Typography, Box, CardMedia } from "@mui/material";

import PropTypes from "prop-types";

import defaultImage from "../../assets/default-image.jpg";

const Article = ({ author, title, description, source, image }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        width: {
          xs: "95%", // 95% width on mobile (xs)
          sm: "90%", // 90% width on small screens and up (sm)
        },
        margin: "10px auto",
        border: "1px solid #ddd", // Light thin border
        borderRadius: "8px", // Optional: rounded corners
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow
        backgroundColor: "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography
              sx={{
                WebkitLineClamp: 2,
                lineClamp: 2,
              }}
              variant="h4"
              component="h1"
              gutterBottom
            >
              {title}
            </Typography>
            <Box
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 3,
                lineClamp: 3,
              }}
            >
              <Typography variant="body1" paragraph>
                {description}
              </Typography>
            </Box>

            <Typography variant="subtitle1" color="textSecondary">
              Author: {author}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Source: {source}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Published: July 23, 2024
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            src={image || defaultImage}
            alt="Article Image"
            sx={{ height: 200 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

Article.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // Optional prop
};

export default Article;
