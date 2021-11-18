import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../services/blog/blog.service";
import {IBlog} from "../../../services/blog/blog.interface";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [
  ]
})
export class BlogComponent implements OnInit {
  blogList: IBlog[] = [];
  constructor(public blogService: BlogService) {
  this.blogService.getListPosts().subscribe((response:IBlog[]) => {
    this.blogList = response;
  });
  }

  ngOnInit(): void {}


}
