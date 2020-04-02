import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/DTO/community';
import { CommunityService } from 'src/app/_services/community.service';

@Component({
  selector: 'app-all-community',
  templateUrl: './all-community.component.html',
  styleUrls: ['./all-community.component.css']
})
export class AllCommunityComponent implements OnInit {
  communities: Community[];
  constructor(private communityService: CommunityService) { }

  ngOnInit(): void {
    this.communityService.getAllCommunity().subscribe(data => {
      this.communities = data;
    }, error => {
      console.log(error);
    })
  }

}
