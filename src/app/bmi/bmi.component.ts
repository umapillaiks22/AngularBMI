import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  bmi:any;
  constructor(private router:Router, private act: ActivatedRoute) { 

  }

  ngOnInit() {
    this.act.queryParams.subscribe(params => {
      console.log(params);

      this.bmi = params.weight/(params.height * params.height);
    });
  }

}
