import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

const ProductCards = ({
  products,
  onAddToCart,
  currentPage,
  totalPages,
  onPageChange,
  showPagination,
  searchQuery,
}) => {
  return (
    <Box
      sx={{
        margin: "20px auto",
        width: "100%",
        maxWidth: { xs: "95%", sm: "90%", md: "85%", lg: "1200px" },
        padding: "0 16px",
      }}
    >
     
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {searchQuery
          ? products.length > 0
            ? `Search Results for "${searchQuery}"`
            : `No results found for "${searchQuery}"`
          : "Explore Our Products"}
      </Typography>

      
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "250px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
                color: "#fff",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "scale(1.03)",
                  transition: "0.3s ease",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={product.thumbnailImageUrl || "https://via.placeholder.com/200"}
                alt={product.name}
                sx={{
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <CardContent
                sx={{
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: "8px",
                    fontSize: "1rem",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="#fff"
                  sx={{ marginBottom: "8px", fontSize: "0.875rem" }}
                >
                  {product.msrp && product.msrp > product.price && (
                    <span style={{ textDecoration: "line-through", marginRight: 8 }}>
                      ${product.msrp}
                    </span>
                  )}
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", padding: "8px" }}>
                <Button
                  variant="contained"
                  onClick={onAddToCart}
                  sx={{
                    backgroundColor: "#ff5722",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                    padding: "6px 12px",
                    "&:hover": { backgroundColor: "#e64a19" },
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

     
      {showPagination && products.length > 0 && ( 
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Button
            variant="outlined"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              padding: { xs: "6px 8px", sm: "8px 12px" },
              marginRight: 1,
              fontWeight: "bold",
              color: "#ff5722",
              borderColor: "#ff5722",
              "&:hover": {
                backgroundColor: "#ff5722",
                color: "#fff",
              },
            }}
          >
            Previous
          </Button>
          {Array.from(
            { length: Math.min(5, totalPages) },
            (_, i) => i + Math.max(1, currentPage - 2)
          )
            .filter((page) => page >= 1 && page <= totalPages)
            .map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "contained" : "outlined"}
                onClick={() => onPageChange(page)}
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                  padding: { xs: "6px 8px", sm: "8px 12px" },
                  marginX: 1,
                  fontWeight: "bold",
                  ...(page === currentPage
                    ? {
                        backgroundColor: "#ff5722",
                        color: "#fff",
                      }
                    : {
                        color: "#ff5722",
                        borderColor: "#ff5722",
                      }),
                  "&:hover": {
                    backgroundColor: page === currentPage ? "#e64a19" : "#ff5722",
                    color: "#fff",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          <Button
            variant="outlined"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              padding: { xs: "6px 8px", sm: "8px 12px" },
              marginLeft: 1,
              fontWeight: "bold",
              color: "#ff5722",
              borderColor: "#ff5722",
              "&:hover": {
                backgroundColor: "#ff5722",
                color: "#fff",
              },
            }}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProductCards;
