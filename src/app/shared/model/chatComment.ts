export interface ChatComment {
  chatMessage?: string;
  commentList?: ChatComment[];
  like: number;
  dislike: number;
  name: string;
}
