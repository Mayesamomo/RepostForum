import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/_services/community.service';
import { Router } from '@angular/router';
import { Community } from 'src/app/DTO/community';

@Component({
  selector: 'sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.css']
})
export class SidebarViewComponent implements OnInit {
  communities: Community[];
  displayViewAll: Boolean;
  constructor(private communityService: CommunityService, private router: Router) { }

  ngOnInit(): void {
    this.communityService.getAllCommunity().subscribe(community => {
      if (community.length > 3) {
        this.communities = community.splice(0, 2);
        this.displayViewAll = true;
      } else {
        this.communities = community;
      }
    })
  }
  goToSubreddit(communitytName: string) {
    this.router.navigateByUrl('/view-community/' + communitytName);
  }

}
