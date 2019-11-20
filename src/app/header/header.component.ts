import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainmenu: any[] = [
    {
      "pageName" : "Disrupt Kerala",
      "link" : "/disrupt-kerala"
    },
    {
      "pageName" : "Speakers",
      "link" : "/speakers"
    },
    {
      "pageName" : "Gallery",
      "link" : "/gallery"
    },
    {
      "pageName" : "Contact",
      "link" : "/contact"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
