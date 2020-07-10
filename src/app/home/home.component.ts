import { Component, OnInit } from '@angular/core';
import{IndexService} from '../index.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private indexSer:IndexService,private actRoute:ActivatedRoute, private router:Router) { }

    homeForm = new FormGroup({
      height : new FormControl(''),
      weight : new FormControl(''),
  });
 
  addval(){
    console.log(this.homeForm.value);
    this.router.navigate(['/bmi'], {
      queryParams : this.homeForm.value
    });
   }
  
  ngOnInit() {
    
  }

}
