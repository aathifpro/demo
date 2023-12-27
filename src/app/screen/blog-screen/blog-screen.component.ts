import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/models/blogs.model';
import { HeaderItems } from 'src/app/models/header-items.model';

@Component({
  selector: 'app-blog-screen',
  templateUrl: './blog-screen.component.html',
  styleUrls: ['./blog-screen.component.css']
})
export class BlogScreenComponent implements OnInit {

  ngOnInit(): void {

  }

  public headerItems: HeaderItems = {
    headerTitle: "Stories Page",
    pageName: "Stories",
    headerImage: "assets/images/bg_5.jpg"
  };


}
