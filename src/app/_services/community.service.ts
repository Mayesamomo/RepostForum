import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Community } from '../DTO/community';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommunityService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  }

  communityUrl: string = 'http://localhost:8080/repostitRestServer/webresources/community';
  constructor(private http: HttpClient) { }
//  getCommunityById(communityId: Number) {
//    return this.http.get<Community>('http://localhost:8080/WebApp/webresources/Community/getCommunityById/' + communityId);
//  }
  getCommunityByUserId(userId: Number) {
    return this.http.get<Community[]>('http://localhost:8080/repostitRestServer/webresources/community/getUserCommunity/{user_id}' + userId);
  }
  getAllCommunity(): Observable<Community[]> {
    return this.http.get<Community[]>("http://localhost:8080/repostitRestServer/webresources/community/getAllCommunitys");
  }

  createCommunity(communityModel: Community): Observable<any> {
    let reg= "http://localhost:8080/repostitRestServer/webresources/community/CreateCommunity";
    let jsonStr = JSON.stringify(communityModel);
    return this.http.post<any>(reg, jsonStr).pipe(map(post => {
      console.log(post);
    }));
  }

  getCommId(commName:string){
    return this.http.get<string>('http://localhost:8080/repostitRestServer/webresources/community/getCommIdByName/' + commName);
  }
}
