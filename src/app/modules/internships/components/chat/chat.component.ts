import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {ChatComment} from '../../../../shared/model/chatComment';
import {AbstractChatService} from '../../services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],

})


export class ChatComponent implements OnInit {

  @ViewChild('warningAlert') warning: ElementRef;
  @ViewChild('jumpTo') jump: ElementRef;

  @Input()
  internshipId: number;


  commentList: ChatComment[] = [];

  comment = '';
  replyCom = '';
  commId = 0;
  replyId = 0;

  constructor(public chatService: AbstractChatService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    // this.commentList = this.chatService.getComments(1);
    this.chatService.getComments(this.internshipId).subscribe((chatComments: any[]) => {
      this.commentList = chatComments;
      for (let i = 0; i < this.commentList.length; i++) {
        this.commentList[i].comments.sort((a, b) => a.id - b.id);
      }
    });
  }

  getReplyId(replyList: ChatComment[]) {
    if (replyList.length === 0) {
      return 0;
    } else {
      return replyList[replyList.length - 1].id;
    }
  }

  public myFunction($event) {
    console.log($event.target.parentElement.getElementsByClassName('alert'));
    const reply = $event.target.parentElement.getElementsByClassName('alert');
    const warningAsHtmlElement = this.warning.nativeElement as HTMLElement;
    const jumpTo = this.jump.nativeElement as HTMLElement;
    console.log(warningAsHtmlElement);
    if (this.comment === '') {
      warningAsHtmlElement.classList.remove('run_animation');
      warningAsHtmlElement.style.opacity = '100';
      setTimeout(function () {
        warningAsHtmlElement.classList.add('run_animation');
      }, 10);

    } else {
      this.commId++;
      this.chatService.addComment(this.internshipId, {
        text: this.comment,
        comments: [],
        likes: 0,
        dislikes: 0,
        name: 'Prost'
      }).subscribe(() => {
        this.chatService.getComments(this.internshipId).subscribe((chatComments: any[]) => {
          console.log(chatComments);
          this.commentList = chatComments;
          setTimeout(function () {
            jumpTo.scrollIntoView();
          }, 1);

        });
      });


      // this.commentList.push({id: this.commId, text: this.comment, comments: [], likes: 0, dislikes: 0, name: 'Prost'});
    }
    this.comment = '';
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
      this.chatService.addReply(comment.id, {
        text: this.replyCom,
        comments: [],
        likes: 0,
        dislikes: 0,
        name: 'Alt Prost'
      }).subscribe((comm: ChatComment) => {
        // this.chatService.getComments(this.internshipId).subscribe((chatComments: any[]) => {
         // console.log(chatComments);
         // this.commentList = chatComments;
        // });
        comment.comments.push(comm);
      });
    }
    this.replyCom = '';

  }

  public like(comment: ChatComment) {
    this.chatService.addLike(comment.id).subscribe((comm: ChatComment) => {
      comment.likes = comm.likes;
    });
  }

  public dislike(comment: ChatComment) {
    this.chatService.addDislike(comment.id).subscribe((comm: ChatComment) => {
      comment.dislikes = comm.dislikes;
    });
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
