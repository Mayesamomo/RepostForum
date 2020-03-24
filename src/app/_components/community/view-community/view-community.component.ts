import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/DTO/post';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';
import { CommunityService } from 'src/app/_services/community.service';

@Component({
  selector: 'app-view-community',
  templateUrl: './view-community.component.html',
  styleUrls: ['./view-community.component.css']
})
export class ViewCommunityComponent implements OnInit {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  communityId: Number;
  communityName: string;
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private communityService: CommunityService) {
    this.communityId = this.activatedRoute.snapshot.params['communityId'];
    this.communityService.getCommunityById(this.communityId).subscribe(data => {
      this.communityName = data.communityName;
    }, error => {

    })
    this.postService.getAllPostsByCommunity(this.communityId).subscribe(data => {
      this.posts = data;
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
