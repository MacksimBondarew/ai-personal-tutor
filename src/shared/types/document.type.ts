export type DocumentRow = {
  id: string;
  user_id: string;
  title: string;
  storage_path: string;
  status: 'uploaded' | 'processing' | 'ready' | 'failed';
  created_at: string;
  updated_at: string;
  file_name: string | null;
  file_size: number | null;
  mime_type: string | null;
};
