import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/DTO/post";
import { Vote } from "src/app/DTO/vote";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { VoteService } from "src/app/_services/vote.service";
import { PostService } from "src/app/_services/post.service";
import { UserService } from "src/app/_services/user.service";
import { VoteType } from "src/app/DTO/vote-type.enum";
import { AuthService } from "src/app/_services/auth.service";
@Component({
  selector: "app-votebutton",
  templateUrl: "./votebutton.component.html",
  styleUrls: ["./votebutton.component.css"],
})
export class VotebuttonComponent implements OnInit {
  @Input() post: Post;
  votePayload: Vote;
  votes: number;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  //  votes: { voteType: any; postId: any; };
  constructor(
    private voteService: VoteService,
    private postService: PostService,
    private authService: AuthService
  ) {
    this.voteService.postChange.subscribe((post) => (this.post = post));
  }

  ngOnInit() {
    this.postService.getVotes(this.post.post_id).subscribe((vote) => {
      this.votes = vote;
      console.log(this.votes);
      console.log(localStorage.getItem("user_id"));
    });
  }

  addLike(likeVal: number) {
    this.postService
      .addvote(this.post.post_id, localStorage.getItem("user_id"), likeVal)
      .subscribe((data) => {
        console.log(data);
      });
    window.location.reload();
  }
  /* upvotePost() {
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
*/
}
