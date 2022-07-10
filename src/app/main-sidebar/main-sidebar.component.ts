import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {

  page_name: string = 'dashboard1';

  constructor(private route: ActivatedRoute) {
    this.page_name = route.snapshot.data['pagename'];
  }

  ngOnInit(): void {
  }

}
