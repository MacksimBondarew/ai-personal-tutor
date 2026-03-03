export type AttemptProps = {
  title: string;
  score: number;
  date: string;
  correct: number;
  total: number;
  duration: number;
};
export type AttemptArray = {
  id: string;
  title: string;
  score: number;
  finished_at: string;
  correct_count: number;
  total_count: number;
  duration_seconds: number;
}[];
