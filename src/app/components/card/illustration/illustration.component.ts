import {Component, Input, OnInit} from '@angular/core';
import { benefPop } from "../../../mock/fake-data";

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css']
})
export class IllustrationComponent implements OnInit {
  @Input() title!: string;
  @Input() illustration!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
