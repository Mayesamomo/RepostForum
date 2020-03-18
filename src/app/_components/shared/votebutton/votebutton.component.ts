import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/DTO/post';
import { Vote } from 'src/app/DTO/vote';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { VoteService } from 'src/app/_services/vote.service';
import { PostService } from 'src/app/_services/post.service';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-votebutton',
  templateUrl: './votebutton.component.html',
  styleUrls: ['./votebutton.component.css']
})
export class VotebuttonComponent implements OnInit {
  @Input() post: Post;
  votePayload: Vote;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  vote: { voteType: any; postId: any; };
  constructor(private voteService: VoteService, private postService: PostService, private authService: UserService) {
    this.vote = {
      voteType: undefined,
      postId: undefined
    }
    this.voteService.postChange.subscribe((post) => this.post = post);
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  /** *ngOnInit(): void {
     this.postService.getPostById(this.post.id).subscribe(post => this.post = post);
     this.upvoteColor = this.post.upVote ? this.setColorWhenUpVoteAndUserLoggedIn() : "";
     this.downvoteColor = this.post.downVote ? this.setColorWhenDownVoteAndUserLoggedIn() : "";
   }**/

}
