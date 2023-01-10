import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit{

  //Déclaration des variable
  public galerieTab: [{ "name": string, "alt": string, "url_img": string, "extension": string },];
  
  ngOnInit(){ this.LoadDataJson();}

  constructor(private http: HttpClient){
  
    // initialisation des variable

    //galerie var
    this.galerieTab = [ {"name": "", "alt": "", "url_img": "", "extension": "" },];

  }
  
  
  public LoadDataJson(){
    return this.http.get("assets/data/data.json")
    .subscribe((data) =>{
      let jsonObj = Object.create(data);

      //galerie
      this.galerieTab = jsonObj["galerie_page"]["img"];

    });
  }

}