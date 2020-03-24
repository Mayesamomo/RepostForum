import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Community } from 'src/app/DTO/community';
import { CommunityService } from 'src/app/_services/community.service';
import { Post } from 'src/app/DTO/post';
import { CreatePostPayload } from './createPostPayLoad';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  communities: Community[];
  postPayload: CreatePostPayload;
  createPostForm: FormGroup;
  postCheck;
  userId: number;
  currentUser = this.authService.currentUserValue;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private communityService: CommunityService,
    private postService: PostService,
    private authService: AuthService) {
    this.postPayload = {
      postTitle: '',
      postDesc: '',
      communityName: '',
      media: ''
    }

  }
  ngOnInit() {
    this.createPostForm = this.formBuilder.group({
      postTitle: ['', Validators.required],
      postDesc: ['', Validators.required],
      communityName: ['', Validators.required],
      media: ''
    });
    // this.userId = this.currentUser.userId;
    this.communityService.getAllCommunity().subscribe((data) => {
      this.communities = data;
    }, error => {
      console.log("Error : " + error);
    });
  }


  createPost() {
    this.postPayload.postTitle = this.createPostForm.get('postTitle').value;
    this.postPayload.postDesc = this.createPostForm.get('postDesc').value;
    this.postPayload.communityName = this.createPostForm.get('communityName').value;
    this.postPayload.media = this.createPostForm.get('media').value;

    this.postService.createPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('error ' + error);
    })
  }

  discardPost() {
    this.router.navigateByUrl("/");
  }
}
