import { Component,  OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';








@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor(private firestore: AngularFirestore) { 

    this.firestore=firestore;

  };

  
  ngOnInit(){
   
    this.firestore.collection('coronavirusPins').valueChanges()
    .subscribe(val=>console.log(val));

    

  }

 

public all=true;
public coronavirus=false;
public poverty=false;
public hunger=false;
public water = false;
public climateChange=false;
public refugees=false;
public genderEquality=false;
public domesticViolence=false;




  latitude = 51.678418;
  longitude = 7.809007;

 pinAzul="..//assets/images/pinAzul.png" // Coronavirus
 pinAzulClaro="..//assets/images/pinAzulClaro.png" // Water
 pinAmarelo="..//assets/images/pinAmarelo.png" // Poverty
 pinLaranja="..//assets/images/pinLaranja.png" //  Refugees
 pinVerde="..//assets/images/pinVerde.png" // Climate Change
 pinVermelho="..//assets/images/pinVermelho.png" //Hunger
 pinRosa="..//assets/images/pinRosa.png" // Gender Equality
 pinRoxo="..//assets/images/pinRoxo.png" // Domestic Violencce





 
 showIndependentIssues(){

  this.all=false;

 }

 clearIndependentIssues(){

this.coronavirus=false;
this.poverty=false;
this.hunger=false;
this.water = false;
this.climateChange=false;
this.refugees=false;
this.genderEquality=false;
this.domesticViolence=false;

 }

}

