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

  communityUrl: string = 'http://localhost:8080/WebApp/webresources/Community';
  constructor(private http: HttpClient) { }
  getCommunityById(communityId: Number) {
    return this.http.get<Community>('http://localhost:8080/WebApp/webresources/Community/getCommunityById/' + communityId);
  }
  getCommunityByUserId(userId: Number) {
    return this.http.get<Community[]>('http://localhost:8080/WebApp/webresources/Community/communityByUser/' + userId);
  }
  getAllCommunity(): Observable<Community[]> {
    return this.http.get<Community[]>("http://localhost:8080/WebApp/webresources/Community/getAllCommunity");
  }

  createCommunity(communityModel: Community): Observable<Community> {
    let jsonStr = JSON.stringify(communityModel);
    return this.http.post<Community>(this.communityUrl, jsonStr);
  }
}
