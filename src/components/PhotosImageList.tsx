import { ImageList, ImageListItem } from "@mui/material";
import React, { FunctionComponent } from "react";
import { FlickrPhoto } from "../types";

type PhotosImageListProps = {
  photos: Array<FlickrPhoto>;
};

const PhotosImageList: FunctionComponent<PhotosImageListProps> = ({
  photos,
}) => {
  return (
    <ImageList cols={3} gap={8}>
      {photos.map((photo) => (
        <ImageListItem key={photo.id}>
          <img
            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w?w=164&h=164&fit=crop&auto=format.jpg`}
            srcSet={`${`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}`}
            alt={photo.title}
            loading="lazy"
          />
          {photo.title}
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PhotosImageList;
