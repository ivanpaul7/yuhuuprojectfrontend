import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatComment} from '../../../../shared/model/chatComment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('warningAlert') warning: ElementRef;

  commentList: ChatComment[] = [{
    chatMessage: 'mere', commentList: [{chatMessage: 'mere', commentList: [], like: 1, dislike: 2, name: 'Ion'},
      {chatMessage: 'mere2', commentList: [], like: 1, dislike: 2, name: 'Ilie'}],
    like: 5, dislike: 9, name: 'Bubu'
  }];

  comment = '';
  replyCom = '';

  constructor() {
  }

  ngOnInit() {
  }

  public myFunction($event) {
    console.log($event.target.parentElement.getElementsByClassName('alert'));
    const reply = $event.target.parentElement.getElementsByClassName('alert');
    const warningAsHtmlElement = this.warning.nativeElement as HTMLElement;
    console.log(warningAsHtmlElement);
    if (this.comment === '') {
      warningAsHtmlElement.classList.remove('run_animation');
      warningAsHtmlElement.style.opacity = '100';
      setTimeout(function () {
        warningAsHtmlElement.classList.add('run_animation');
      }, 10);

    } else {
      this.commentList.push({chatMessage: this.comment, commentList: [], like: 0, dislike: 0, name: 'Prost'});
    }
  }

  public reply(comment: ChatComment) {


    const warningAsHtmlElement = this.warning.nativeElement as HTMLElement;

    if (this.replyCom === '') {
      warningAsHtmlElement.classList.remove('run_animation');
      warningAsHtmlElement.style.opacity = '100';
      setTimeout(function () {
        warningAsHtmlElement.classList.add('run_animation');
      }, 10);

    } else {
      comment.commentList.push({chatMessage: this.replyCom, commentList: [], like: 0, dislike: 0, name: 'Alt Prost'});
    }

  }

  public moreComments($event: any) {
    const reply = $event.target.parentElement.parentElement.parentElement.getElementsByClassName('repliesNone');
    for (let i = 0; i < reply.length; i++) {
      if ((<HTMLScriptElement> reply.item(i)).style.display === 'block') {
        (<HTMLScriptElement> reply.item(i)).style.display = 'none';
      } else {
        (<HTMLScriptElement> reply.item(i)).style.display = 'block';
      }
    }
  }

}
