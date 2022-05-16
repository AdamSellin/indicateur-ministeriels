import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reinforcement',
  templateUrl: './reinforcement.component.html',
  styleUrls: ['./reinforcement.component.css']
})
export class ReinforcementComponent implements OnInit {
  @Input() title!: string;
  @Input() securite!: any;
  @Input() bgColor!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
