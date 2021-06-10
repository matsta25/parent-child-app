import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        title: 'lorem ipsum1',
        content: 'lorem ipsum ed see1',
        author: 'lorem1'
      },
      {
        title: 'lorem ipsum2',
        content: 'lorem ipsum ed see2',
        author: 'lorem2'
      }
    ];
  }

}
