import { Injectable, Output, EventEmitter } from '@angular/core';
import { Post } from '../DTO/post';
import { HttpClient } from '@angular/common/http';
import { Vote } from '../DTO/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  @Output() postChange: EventEmitter<Post> = new EventEmitter<Post>();
  constructor(private http: HttpClient) { }

  vote(vote: Vote): void {
    this.http.post<Post>("http://localhost:8080/api/votes/", vote).subscribe(data => {
      this.postChange.emit(data);
    }, error => {
      console.log(error);
    });
  }
}
