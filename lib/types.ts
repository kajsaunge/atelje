export type ArtworkStatus =
  "available" | "reserved" | "sold" | "on_loan" | "in_progress";
// det du fyller i själv – resten skapas automatiskt
export type ImageFormValues = Omit<
  ArtworkImage,
  "id" | "url" | "width" | "height"
>;

export type ArtworkImage = {
  id: string;
  alt: string;
  url: string;
  caption?: string;
  width: number;
  height: number;
  inGallery?: boolean;
};

export type WorkImage = ArtworkImage & { inGallery: boolean }; // process + färdigt verk
export type ReferenceImage = ArtworkImage;
export type Todo = { id: string; text: string; done: boolean };

export type Artwork = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  year?: number;
  medium: string[];
  base: string;
  frame?: string;
  mainImageId?: string;
  // ex 70x100cm
  dimensions: string;
  price?: number;
  images?: WorkImage[];
  references?: ReferenceImage[];
  inGallery: boolean;
  status: ArtworkStatus;
  todos?: Todo[];
};

export type Exhibition = {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  location?: string;
  artworkIds: string[];
  inGallery?: boolean;
};
