import { Component, OnInit } from '@angular/core';
import {
  faJsSquare,
  faCss3,
  faHtml5,
  faAngular,
  faVuejs,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})


export class AccueilComponent implements OnInit{

    avatar:string =  "assets/img/LogoWoody.jpg";
    cplusicon:string =  "assets/img/c.svg";

    // brand icons
    faJsSquare = faJsSquare;
    faCss3 = faCss3;
    faHtml5 = faHtml5;
    faAngular = faAngular;
    faVuejs = faVuejs;
    faBootstrap = faBootstrap;


    public maTab: [];
    public navBlockFooterTab: [];

    codeBarSaisi = new FormControl("");

    constructor(private http: HttpClient){
      this.maTab = [];
      this.navBlockFooterTab = [];
    }

    ngOnInit(): void {
      this.LoadDataJson();
    }

    public LoadDataJson(){
      return this.http.get("assets/data/data.json")
      .subscribe((data) =>{
        let jsonObj = Object.create(data);

        this.maTab = jsonObj["footer"]["tab"];
        if (this.maTab.length != 0){
          for (let i = 0; i < this.maTab.length; i++) {
              for (let j = 0; j < this.maTab[i]; j++) {
                alert(this.maTab[i][j]);
              }            

          }

          
        }else{
          alert(JSON.stringify(this.maTab.length) + " le tableaux est vide");
        }

      });
    }


}
