import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  faJsSquare,
  faCss3,
  faHtml5,
  faAngular,
  faVuejs,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})


export class AccueilComponent implements OnInit{

    avatar:string =  "assets/img/LogoWoody.jpg";
    cplusicon:string =  "assets/img/c.svg";

      // brand icons
    public faJsSquare = faJsSquare;
    public faCss3 = faCss3;
    public faHtml5 = faHtml5;
    public faAngular = faAngular;
    public faVuejs = faVuejs;
    public faBootstrap = faBootstrap;

      // Declaration des des variable
      // haut de page
    public title: string;
    public catch_phrase: string;
    public btn_header_name: string;
    public btn_header_link: string;

      // a propos
    public name: string;
    public desc: string;
    public avatar_url: string;
    public avatar_alt: string;
    
    // skills
    public skillsLanguageTab: [{ "name": string, "icon": IconProp, "color": string, "value": string },];
    public skillsFrameworksTab: [{ "name": string, "icon": IconProp, "color": string, "value": string },];
    
    // professionnal_career
    public professionnal_careerTab: [{ "title": string, "date": string, "entreprise": string, "lieu": string, "desc": string },];

    // formation
    public formationTab: [{ "title": string, "etablisement": string, "lieu": string },];

    // informations
    public hobbies_list: string;
    public languageTab: [{ "language": string, "origine": string },];;

    // achievements
    public achievementsTab: [{ "title": string, "url": string },];;

    constructor(private http: HttpClient){
      // haut de page
      this.title = "";
      this.catch_phrase = "";
      this.btn_header_name = "";
      this.btn_header_link = "";

      // a propos
      this.name = "";
      this.desc = "";
      this.avatar_url = "";
      this.avatar_alt = "";

      // skills
      this.skillsLanguageTab = [{ "name": "", "icon": faAngular, "color": "", "value": "0" },];
      this.skillsFrameworksTab = [{ "name": "", "icon": faAngular, "color": "", "value": "0" },];
      
      // professionnal_career
      this.professionnal_careerTab = [{ "title": "", "date": "", "entreprise": "", "lieu": "", "desc": "" },];

      // formation
      this.formationTab = [{ "title": "", "etablisement": "", "lieu": "" },];
      
      // informations
      this.hobbies_list = "";
      this.languageTab = [{ "language": "", "origine": "" },];

      // achievements
      this.achievementsTab = [{ "title": "", "url": "" },];

    }

    ngOnInit(): void {
      this.LoadDataJson();
    }

    public LoadDataJson(){
      return this.http.get("assets/data/data.json")
      .subscribe((data) =>{
        let jsonObj = Object.create(data);

        // haut de page
        this.title = jsonObj["home_page"]["title"];
        this.catch_phrase = jsonObj["home_page"]["catch_phrase"];
        this.btn_header_name = jsonObj["home_page"]["btn_header_name"];
        this.btn_header_link = jsonObj["home_page"]["btn_header_link"];

        // a propos
        this.name = jsonObj["home_page"]["infocv"]["about_me"]["name"];
        this.desc = jsonObj["home_page"]["infocv"]["about_me"]["desc"];
        this.avatar_url = jsonObj["home_page"]["infocv"]["about_me"]["avatar_url"];
        this.avatar_alt = jsonObj["home_page"]["infocv"]["about_me"]["avatar_alt"];

        // skills
        this.skillsLanguageTab = jsonObj["home_page"]["infocv"]["skills"]["language"];
        this.skillsFrameworksTab = jsonObj["home_page"]["infocv"]["skills"]["frameworks"];

        // professionnal_career
        this.professionnal_careerTab = jsonObj["home_page"]["infocv"]["professionnal_career"];

        // formation
        this.formationTab = jsonObj["home_page"]["infocv"]["formation"];

        // informations
        this.hobbies_list = jsonObj["home_page"]["infocv"]["information"]["hobbies_list"];
        this.languageTab = jsonObj["home_page"]["infocv"]["information"]["language"];

        // achievements
        this.achievementsTab = jsonObj["home_page"]["infocv"]["achievements"];

      });
    }


}
