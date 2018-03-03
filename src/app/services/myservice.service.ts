import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Post } from '../post';
import { Response } from '@angular/http';


@Injectable()
export class MyserviceService {

  private posts;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    /*this.posts = [
      {title: 'Post one', body: 'This is post one'},
      {title: 'Post two', body: 'This is post two'},
      {title: 'Post three', body: 'This is post three'},
      {title: 'Post four', body: 'This is post four'},
    ];*/
  }

  getPosts(): Observable<Post[]> {
    // return this.posts;
    return this.http.get<Post[]>(this.url);
  }

  addPost(newPost) {
    // this.posts.push(newPost);
  }
}
