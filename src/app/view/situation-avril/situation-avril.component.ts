import { Component, OnInit } from '@angular/core';
import {benefGend, benefPop, renfSecurite} from "../../mock";

@Component({
  selector: 'app-situation-avril',
  templateUrl: './situation-avril.component.html',
  styleUrls: ['./situation-avril.component.css']
})
export class SituationAvrilComponent implements OnInit {
  benefPop = benefPop;
  benefGend = benefGend;
  securite = renfSecurite;

  constructor() { }

  ngOnInit(): void {
  }

}
