import {Component, Input, OnInit} from '@angular/core';
import {renfSecurite} from "../../../mock";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  securite = renfSecurite;

  constructor() { }

  ngOnInit(): void {
  }

}
