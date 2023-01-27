import React, { ChangeEventHandler, useState } from "react";

import "./App.css";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Pagination,
  Snackbar,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";

import ReactStickyBox from "react-sticky-box";
import { usePhotos } from "./hooks/usePhotos";
import PhotosImageList from "./components/PhotosImageList";
import Categories from "./components/Categories";
import AdditionalInfo from "./components/AdditionalInfo";

export default function App() {
  const [category, setCategory] = useState<string>("flowers");
  const [searchText, setSearchText] = useState<string>("");
  const [page, setPage] = useState(1);

  const { photos, total, isLoading, error, clearError, pagesTotal } = usePhotos(
    category,
    searchText,
    page
  );

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleSelectCategory = (category: string) => {
    setPage(1);
    setSearchText("");
    setCategory(category);
  };

  const handleSetSearchText: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setPage(1);
    setCategory("");
    setSearchText(event.target.value);
  };

  const handleChangePagination = (_: any, value: number) => {
    window.scrollTo({ top: 0 });
    setPage(value);
  };

  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="md">
        <h1>Flickr API Gallery by Łukasz Żeromski</h1>
        <Categories handleSelectCategory={handleSelectCategory} />
        <div>
          <TextField
            placeholder="Search by query..."
            onChange={handleSetSearchText}
          />
        </div>
        <Box display="flex" justifyContent="space-between">
          <AdditionalInfo
            category={category}
            searchText={searchText}
            total={total}
          />
        </Box>
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="50vh"
          >
            <CircularProgress />
          </Box>
        ) : (
          <PhotosImageList photos={photos} />
        )}

        <Pagination
          count={pagesTotal}
          onChange={handleChangePagination}
          color="secondary"
          page={page}
        />
      </Container>
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={3000}
        onClose={clearError}
      >
        <Alert onClose={clearError} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>

      <ReactStickyBox bottom={true} offsetBottom={80}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 48,
          }}
        >
          <Button variant="contained" onClick={handleScrollToTop}>
            Go to top
          </Button>
        </div>
      </ReactStickyBox>
    </main>
  );
}
