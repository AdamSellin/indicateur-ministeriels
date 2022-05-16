import { Component, OnInit } from '@angular/core';
import {benefGend, benefPop} from "../../mock";

@Component({
  selector: 'app-situation-avril',
  templateUrl: './situation-avril.component.html',
  styleUrls: ['./situation-avril.component.css']
})
export class SituationAvrilComponent implements OnInit {
  benefPop = benefPop;
  benefGend = benefGend;

  constructor() { }

  ngOnInit(): void {
  }

}
