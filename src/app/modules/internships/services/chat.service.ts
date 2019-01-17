import {Injectable} from '@angular/core';
import {ChatComment} from '../../../shared/model/chatComment';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export abstract class AbstractChatService {
  public abstract getComments(internshipId: number): Observable<ChatComment[]>;

  public abstract addComment(internshipId: number, comment: ChatComment): Observable<ChatComment>;

  public abstract addReply(commentId: number, reply: ChatComment): Observable<ChatComment>;

  public abstract addLike(commentId: number): Observable<ChatComment>;

  public abstract addDislike(commentId: number): Observable<ChatComment>;

}

export class ServerChatService implements AbstractChatService {

  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api/comment/';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3d' +
          'HJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiY29tcGFueSIs' +
          'InNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NzY3MDcxNjgsImF1dGhvcml0aWVzIjpbIkNP' +
          'TVBBTlkiXSwianRpIjoiYjNjNTlmZDctMTlhNy00NDIzLWFjN2EtMTVkZDQxZmJiZTEyIiwiY2xpZW50X2lk' +
          'IjoidGVzdGp3dGNsaWVudGlkIn0.e6QTmifb1YFYSYgZE37PfQQINrUS2hlWyLUssTnjAGk'
      })
  };

  getComments(internshipId: number): Observable<ChatComment[]> {

    const fullUrl = this.url + internshipId + '/all';

    return this.http.get<ChatComment[]>(fullUrl, this.httpOptions);
  }

  addComment(internshipId: number, comment: ChatComment): Observable<ChatComment> {

    const fullUrl = this.url + internshipId + '/add';
    return this.http.post<ChatComment>(fullUrl, comment, this.httpOptions);
  }

  addReply(commentId: number, reply: ChatComment): Observable<ChatComment> {
    const fullUrl = this.url + 'reply/' + commentId + '/add';
    return this.http.post<ChatComment>(fullUrl, reply, this.httpOptions);
  }

  addLike(commentId: number): Observable<ChatComment> {
    const fullUrl = this.url + commentId + '/like';
    return this.http.put<ChatComment>(fullUrl, {}, this.httpOptions);
  }

  addDislike(commentId: number): Observable<ChatComment> {
    const fullUrl = this.url + commentId + '/dislike';
    return this.http.put<ChatComment>(fullUrl, {}, this.httpOptions);
  }

}

export class MockChatService implements AbstractChatService {


  getComments(internshipId: number): Observable<ChatComment[]> {
    return of([{
      id: 1, text: 'mere', comments: [{id: 1, text: 'mere', comments: [], likes: 1, dislikes: 2, name: 'Ion'},
        {id: 2, text: 'mere2', comments: [], likes: 1, dislikes: 2, name: 'Ilie'}],
      likes: 5, dislikes: 9, name: 'Bubu'
    }]);
  }

  addComment(internshipId: number, comment: ChatComment): Observable<ChatComment> {
    return null;
  }

  addReply(commentId: number, reply: ChatComment): Observable<ChatComment> {
    return null;
  }

  addLike(commentId: number): Observable<ChatComment> {
    return null;
  }

  addDislike(commentId: number): Observable<ChatComment> {
    return null;
  }

}
