export interface Post {
  id: string;
  title: string;
  body: string;
  email: string;
  createdAt: number; // Example: June 6, 2022
  updatedAt: any; // Example: July 6, 2022
}

export interface TableActions {
  onEdit?: (post: Post) => void;
  onDelete?: (post: Post) => void;
}
