import { Component, OnInit } from '@angular/core';
import {dataProject} from "../../mock";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  public  data = dataProject;

  constructor() { }

  ngOnInit(): void {
  }

}
