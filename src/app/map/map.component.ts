import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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




 
 corAzul="#005DAA"
 corAzulClaro="#9BF9F2"
 corAmarelo="#FFCE00"
 corLaranja="#FC7200"
 corVerde="#06CC00"
 corVermelho="#FF0000"
 corRosa="#FC95CE"
 corRoxo="#8A009E"
 
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

//   coronavirusLabel = {
//     color: 'green',
  
//     fontFamily: '',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     text: " "
// }

