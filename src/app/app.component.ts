import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './services/myservice.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private posts: Post[];
  public body;
  public title;
  public newPost;
  constructor(private mss: MyserviceService) {
    // this.posts = this.mss.getPosts();
  }

  ngOnInit() {
    this.mss.getPosts().subscribe(posts => {
    this.posts = posts;
    });
  }

  addPost() {
    this.newPost = {
      title: this.title,
      body: this.body
    };

    this.mss.addPost(this.newPost);
  }
}
