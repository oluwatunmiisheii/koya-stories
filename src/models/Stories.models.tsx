export interface IStory {
  id: number;
  status: string;
  title: {
    rendered: string;
  },
  excerpt: {
    rendered: string;
  },
  jetpack_featured_media_url: string;
  content?: {
    rendered: string;
  }
  date_gmt?: string;
}