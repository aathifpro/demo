import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/models/blogs.model';

@Component({
  selector: 'app-recent-blog-tag',
  templateUrl: './recent-blog-tag.component.html',
  styleUrls: ['./recent-blog-tag.component.css']
})
export class RecentBlogTagComponent implements OnInit {

  ngOnInit(): void {

  }

  public blogList: Blogs[] = [
    { title: 'Taste the delicious foods in Asia', blogger: "admin", dates: "Sept. 06, 2019", blogImage: "assets/images/image_1.jpg"},
    { title: 'Slurp-worthy Asian Noodle Delights', blogger: "Waiter", dates: "Aug. 25, 2020", blogImage: "assets/images/image_2.jpg"},
    { title: 'A Global Adventure in Asian Curries', blogger: "Customer", dates: "Jan. 17, 2022", blogImage: "assets/images/image_3.jpg"},
  ]

}
