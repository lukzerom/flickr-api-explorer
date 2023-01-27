import axios, { AxiosResponse } from "axios";
import { FLICKR_API_KEY } from "../config";
import { FlickrApiResponse } from "../types";
import { createRequestUrl } from "../utils/utils";

const baseFlickrURL = `https://www.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key=${FLICKR_API_KEY}`;

export const getPhotosWithSearchParameters = (
  perPage: number = 10,
  page: number,
  searchText: string = "",
  tag: string = "Poland"
) =>
  axios.get<FlickrApiResponse>(
    createRequestUrl(
      baseFlickrURL,
      "flickr.photos.search",
      perPage,
      page,
      searchText,
      tag
    )
  );

export const getRecent = (perPage: number = 10, page: number) =>
  axios.get<FlickrApiResponse>(
    createRequestUrl(baseFlickrURL, "flickr.photos.getRecent", perPage, page)
  );
