import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import { getPhotosWithSearchParameters, getRecent } from "../api/api";
import { FlickrApiResponse, FlickrPhoto } from "../types";

type UsePhotosProps = {
  photos: Array<FlickrPhoto>;
  isLoading: boolean;
  total: number;
  error: string;
  clearError: () => void;
  pagesTotal: number;
};

function usePhotos(
  category: string,
  searchText: string,
  page: number
): UsePhotosProps {
  const [photos, setPhotos] = useState<Array<FlickrPhoto>>([]);
  const [total, setTotal] = useState<number>(0);
  const [pagesTotal, setPagesTotal] = useState<number>(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const request = getPhotosWithSearchParameters;
  // !searchText && !category ? getRecent : getPhotosWithSearchParameters;

  const clearError = () => {
    setError("");
  };

  useDebounce(
    async () => {
      setIsLoading(true);
      await request(30, page, searchText, category)
        .then((response: AxiosResponse<FlickrApiResponse, any>) => {
          setPhotos(response.data.photos.photo);
          setTotal(response.data.photos.total);
          setPagesTotal(response.data.photos.pages);
        })
        .catch(() => {
          setError("Error occured :(");
          setTimeout(() => {
            setError("");
          }, 3000);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    400,
    [category, searchText, page]
  );

  return { photos, total, isLoading, error, clearError, pagesTotal };
}

export { usePhotos };
