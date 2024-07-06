import React from 'react';
import { useLocation } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const ResultsComponent = () => {
  const location = useLocation();
  const { results } = location.state || {};

  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {results.map((result) => (
        <Grid item key={result.id} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: 3,
              '&:hover': { boxShadow: 6 },
              borderRadius: 2,
              overflow: 'hidden',
              transition: 'box-shadow 0.3s ease-in-out'
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={result.image}
              alt={result.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "18px", fontWeight: 'bold', color: 'primary.main' }}
              >
                {result.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResultsComponent;

