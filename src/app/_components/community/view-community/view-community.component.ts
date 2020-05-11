import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/DTO/post';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';
import { CommunityService } from 'src/app/_services/community.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-view-community',
  templateUrl: './view-community.component.html',
  styleUrls: ['./view-community.component.css']
})
export class ViewCommunityComponent implements OnInit {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  communityId: String;
  communityName: string[];
  posts: Post[];
  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private communityService: CommunityService) {
      this.route.queryParams.subscribe(params => {
        this.communityName = params['cname'];
        console.log(params['cname'])
        
    });

    this.communityId = this.route.snapshot.params['id'];
    
    console.log(this.communityId)
    console.log(this.communityName)


    if(this.communityId != null){
      this.postService.getAllPostsByCommunity(this.communityId).subscribe(data => {
        this.posts = data;
        console.log(this.posts)
      }, error => {
        console.log(error);
      })
    }else if(this.communityName != null){
      this.postService.getPostByCommName(this.communityName.toString()).subscribe(data =>{
        this.posts=data;
        console.log(this.posts)
      }, error => {
        console.log(error);
      })
    
    }
   
  }

  ngOnInit(): void {
    
  }

}
