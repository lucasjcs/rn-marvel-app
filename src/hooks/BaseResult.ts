export interface BaseResult {
  id: number;
  name?: string;
  title?: string,
  description: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
