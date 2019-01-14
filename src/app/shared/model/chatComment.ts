import * as models from './models';

export interface ChatComment {
  comments?: Array<models.ChatComment>;

  dislikes?: number;

  dislikingUsers?: Array<models.User>;

  id?: number;

  likeningUsers?: Array<models.User>;

  likes?: number;

  text?: string;

  name?: string;
}
