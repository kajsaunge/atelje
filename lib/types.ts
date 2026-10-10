export type ArtworkStatus = "available" | "reserved" | "sold" | "on_loan";
export type Visibility = "published" | "draft";

export type ArtworkImage = {
  alt: string;
  imageUrl: string;
  // image dimensions in pixles, not size where it'll be used
  width: number;
  height: number;
};
export type Artwork = {
  id: string;
  title: string;
  description?: string;
  artist: string;
  year?: number;
  medium: string;
  // ex 70x100cm
  dimensions: string;
  price?: number;
  // first is main image. It's a tuple and requires at least one item
  images: [ArtworkImage, ...ArtworkImage[]];
  visibility: Visibility;
  status: ArtworkStatus;
};

export type Exhibition = {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  location?: string;
  artworkIds: string[];
  visibility: Visibility;
};
