import { Component, OnInit } from '@angular/core';
import { MoveDirection, HoverMode, OutMode, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { HttpClient } from '@angular/common/http';

import {
  faYoutube,
  faTwitter,
  faTwitch,
  faInstagram,
  faFacebook,
  faGithub,
  faGitlab
} from '@fortawesome/free-brands-svg-icons';

import {
  faLocationDot,
  faPhoneVolume,
  faPaperPlane,
  faCakeCandles,
  faFlag,
  faCarRear,
  faClock
} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  
    title = 'CvWeb';

  // brand icons
    faYoutube = faYoutube;
    faTwitter = faTwitter;
    faTwitch = faTwitch;
    faInstagram = faInstagram;
    faFacebook = faFacebook;
    faGithub = faGithub;
    faGitlab = faGitlab;

    // solid icon
    faLocationDot = faLocationDot ;
    faPhoneVolume = faPhoneVolume ;
    faPaperPlane = faPaperPlane ;
    faCakeCandles = faCakeCandles ;
    faFlag = faFlag ;
    faCarRear = faCarRear ;
    faClock = faClock ;

    // Declaration des des variable

    //footer var
    public navBlockFooterTab: [{ "name": string, "link": string },];
    public navRootFooterTab: [{ "root_name": string, "root_link": string },];
    public Copyrite: string;
    public location: string;
    public phone_Number: string;
    public mail: string;
    public birthday: string;
    public nationality: string;
    public driver_license: string;
    public availablity: string;
    public youtube: string;
    public twitter: string;
    public twitch: string;
    public instagram: string;
    public facebook: string;
    public github: string;
    public gitlab: string;

    //footer var
    public brand_name: string;
    public brand_link: string;
    public navBlockHeaderTab: [{ "name": string, "link": string },];
    public navRootHeaderTab: [{ "nav_root_name": string, "nav_root_link": string },];







  ngOnInit(): void {this.LoadDataJson();}

  constructor(private http: HttpClient){

    
    this.navBlockFooterTab = [ {"name": "", "link": "" },];
    this.navRootFooterTab = [ {"root_name": "", "root_link": "" },];
    this.Copyrite = "";
    this.location = "";
    this.phone_Number = "";
    this.mail = "";
    this.birthday = "";
    this.nationality = "";
    this.driver_license = "";
    this.availablity = "";
    this.youtube = "";
    this.twitter = "";
    this.twitch = "";
    this.instagram = "";
    this.facebook = "";
    this.github = "";
    this.gitlab = "";

    //footer var
    this.brand_name = "";
    this.brand_link = "";
    this.navBlockHeaderTab = [ {"name": "", "link": "" },];
    this.navRootHeaderTab = [ {"nav_root_name": "", "nav_root_link": "" },];




  }
  

  public LoadDataJson(){
    return this.http.get("assets/data/data.json")
    .subscribe((data) =>{
        let jsonObj = Object.create(data);
      
        //footer
        this.navBlockFooterTab = jsonObj["footer"]["nav_blocks_footer"];
        this.navRootFooterTab = jsonObj["footer"]["root"];
        this.Copyrite = jsonObj["footer"]["copyrite"];
        this.location = jsonObj["footer"]["contact"]["location"];
        this.phone_Number = jsonObj["footer"]["contact"]["phone_number"];
        this.mail = jsonObj["footer"]["contact"]["mail"];
        this.birthday = jsonObj["footer"]["contact"]["birthday"];
        this.nationality = jsonObj["footer"]["contact"]["nationality"];
        this.driver_license = jsonObj["footer"]["contact"]["driver_license"];
        this.availablity = jsonObj["footer"]["contact"]["availablity"];
        this.youtube = jsonObj["footer"]["social_media"]["youtube"];
        this.twitter = jsonObj["footer"]["social_media"]["twitter"];
        this.twitch = jsonObj["footer"]["social_media"]["twitch"];
        this.instagram = jsonObj["footer"]["social_media"]["instagram"];
        this.facebook = jsonObj["footer"]["social_media"]["facebook"];
        this.github = jsonObj["footer"]["social_media"]["github"];
        this.gitlab = jsonObj["footer"]["social_media"]["gitlab"];

        //navigate bar
        this.brand_name = jsonObj["navigate_bar"]["brand_name"];
        this.brand_link = jsonObj["navigate_bar"]["brand_link"];
        this.navBlockHeaderTab = jsonObj["navigate_bar"]["nav_blocks"];
        this.navRootHeaderTab = jsonObj["navigate_bar"]["nav_root"];

    });
  }


  id = "tsparticles";

  particlesOptions = {

        background: {
            color: {
            value: ""
            },
        },

        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: HoverMode.repulse,
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
  };  

  particlesLoaded(): void {}

  async particlesInit(engine: Engine){
      await loadFull(engine);
  }
}

