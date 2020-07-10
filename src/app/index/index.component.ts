import { Component, OnInit } from '@angular/core';
import{IndexService} from '../index.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  index : any = [];

  getAll(){
    
  }
  constructor(private indexSer : IndexService, private router:Router) { 
    this.indexSer.getAll().subscribe(success => {
      this.index = snapshotToArray(success);
      console.log(this.index);
      
    }, error => {
      console.log(error);
    })
  }
  findbmi(){
    this.router.navigateByUrl('/home');
  }


  ngOnInit() {
    
  }

}

const snapshotToArray = function(snapshotarr){

  let returnArr:any = [];
  snapshotarr.forEach(element => {
    let obj:any = {};
    
    obj = element.payload.val();
    obj.key = element.key;
    returnArr.push(obj);
  });

  return returnArr;
  
}