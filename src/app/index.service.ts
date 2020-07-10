import { Injectable } from '@angular/core';
import{AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private afd: AngularFireDatabase) { 

  }
  add(m){
    return this.afd.list('home').push(m);
  }
  getAll(){
    return this.afd.list('home').snapshotChanges();
  }
}
