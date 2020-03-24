import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/DTO/post';
import { Vote } from 'src/app/DTO/vote';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { VoteService } from 'src/app/_services/vote.service';
import { PostService } from 'src/app/_services/post.service';
import { UserService } from 'src/app/_services/user.service';
import { VoteType } from 'src/app/DTO/vote-type.enum';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-votebutton',
  templateUrl: './votebutton.component.html',
  styleUrls: ['./votebutton.component.css']
})
export class VotebuttonComponent implements OnInit {
  @Input() post: Post;
  votePayload: Vote;

  upvoteColor: string;
  downvoteColor: string;
  votes: { voteType: any; postId: any; };
  constructor(private voteService: VoteService, private postService: PostService, private authService: AuthService) {
    this.votes = {
      voteType: undefined,
      postId: undefined
    }
    this.voteService.postChange.subscribe((post) => this.post = post);
  }

  ngOnInit() {
    this.postService.getPostById(this.post.postId).subscribe(post => post);
    this.upvoteColor = this.post.upVote ? this.setColorWhenUpVoteAndUserLoggedIn() : "";
    this.downvoteColor = this.post.downVote ? this.setColorWhenDownVoteAndUserLoggedIn() : "";
  }


  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.upvoteColor = this.post.upVote ? this.setColorWhenUpVoteAndUserLoggedIn() : "";
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.downvoteColor = this.post.downVote ? this.setColorWhenDownVoteAndUserLoggedIn() : "";
  }


  private vote() {
    this.votePayload.postId = this.post.postId;
    this.voteService.vote(this.votePayload);
  }

  private setColorWhenUpVoteAndUserLoggedIn() {
    if (this.authService.isLoggedIn) {
      this.downvoteColor = "";
      return "green";
    }
    return "";
  }

  private setColorWhenDownVoteAndUserLoggedIn() {
    if (this.authService.isLoggedIn) {
      this.upvoteColor = "";
      return "red";
    }
    return "";
  }

}
