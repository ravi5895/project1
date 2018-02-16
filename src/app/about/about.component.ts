import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { trigger,style,transition,animate,keyframes,query,stagger } from "@angular/animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('goals',[
      transition('* => *', [
        query(':leave', style({ opacity:1}),{optional:true}),
        query(':leave',stagger('300ms', [
           animate('.6s ease-in', keyframes([
             style({opacity: 1, transform: 'translateY(0)',offset: 0}),
             style({opacity: .5, transform: 'translateY(35px)',offset: .3}),
             style({opacity: 0, transform: 'translateY(-75%)',offset: 1}),
            ]))]), {optional:true})
          ])
        ])
      ]
})
export class AboutComponent implements OnInit {
  goals: any;
  

  constructor(private route: ActivatedRoute,private router: Router,private _data: DataService) {}

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals =res);
  }
  sendMeHome(){
    this.router.navigate(['']);
  }
  removeItem(i) {
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
  }}
