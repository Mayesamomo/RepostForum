import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Community } from '../DTO/community';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommunityService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  }
  community: Community[] = [];
  communityUrl: string = 'http://localhost:8080/WebApp/webresources/Community';
  constructor(private http: HttpClient) { }

  getCommunityByUserId(userId: Number) {
    let url = this.communityUrl + "/communityByUser/" + userId;
    return this.http.get<Community[]>(url);
  }
  getAllCommunity(): Observable<Community[]> {
    return this.http.get<Community[]>(this.communityUrl);
  }

  createSubreddit(communityModel: Community): Observable<Community> {
    let jsonStr = JSON.stringify(communityModel);
    return this.http.post<Community>(this.communityUrl, jsonStr);
  }
}
