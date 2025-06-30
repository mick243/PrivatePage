export interface PostState {
  post_id: number;
  category_name: string;
  images: string;
  title: string;
  content: string;
  created_at: string;
}

export interface Category {
  category_id: number | null;
  category_name: string;
  isActive?: boolean;
}
