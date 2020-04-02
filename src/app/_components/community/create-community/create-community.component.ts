import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/DTO/community';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunityService } from 'src/app/_services/community.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {
  createCommunityForm: FormGroup;
  community: Community;
  communityName = new FormControl('');

  constructor(private router: Router, private communityService: CommunityService) {
    this.createCommunityForm = new FormGroup({
      communityName: this.communityName,

    });
    this.community = {
      communityName: '',
      username: ''
    }
  }

  ngOnInit(): void {
  }

  createCommunity() {
    this.community.communityName = this.createCommunityForm.get('communityName').value;
    this.communityService.createCommunity(this.community).subscribe(data => {
      this.router.navigateByUrl("/communities");
      // add alert at home page.        
    }, error => {

    })

  }
  discard() {
    this.router.navigateByUrl("/");
  }
}
