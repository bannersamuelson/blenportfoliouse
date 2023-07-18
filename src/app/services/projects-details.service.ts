import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }

  // project details 

  projectDetails = [
    {
      id: 1,
      projectName: "Curiosity Stream",
      projectDetails: "Curiosity Stream 2",
      projectImg: "../../assets/curiosity/CS.png",
      projectImg1: "../../assets/curiosity/adpromo.png",
      projectImg2: "../../assets/curiosity/anthonybourdain.jpeg",
      projectImg3: "../../assets/curiosity/becomingmartian.jpeg",
      projectImg4: "../../assets/curiosity/beer.jpeg",
      projectImg5: "../../assets/curiosity/beyondthespotlight.jpeg",
      projectImg6: "../../assets/curiosity/butterfly.png",
      projectImg7: "../../assets/curiosity/Facebookpromo.gif",
      projectImg8: "../../assets/curiosity/fathersday.png",
      projectImg9: "../../assets/curiosity/goingocular.jpeg",
      projectImg10: "../../assets/curiosity/JFK.jpeg",
      projectImg11: "../../assets/curiosity/lightonearth.jpeg",
      projectImg12: "../../assets/curiosity/naturesflightclub.jpeg",
      projectImg13: "../../assets/curiosity/winattrivianight.jpeg",
    },
    {
      id: 2,
      projectName: "Bahel Coffee Roaster",
      projectDetails: "Bahel Coffee Roasters is a specialty coffee roaster soon to open in Addis Ababa, Ethiopia. The word Bahal means ‘culture’ in the Amharic language. Bahel's mission is to create a space with the community for all to enjoy the highest quality coffee with a cultural touch. The visual identity was developed this in mind, helping to create a brand that feels approachable. The colors used to develop this brand was inspired by simple yet elegant furniture color schemes that will be used in the store."

      ,
      projectImg: "../../assets/bahel/signpost.jpeg",
      projectImg1: "../../assets/bahel/mainimage.jpeg",
      projectImg2: "../../assets/bahel/localshop.jpeg",
      projectImg3: "../../assets/bahel/coffee1.jpeg",
      projectImg4: "../../assets/bahel/coffee2.jpeg",
      projectImg5: "../../assets/bahel/coffee3.jpeg",
      projectImg6: "../../assets/bahel/coffee4.jpeg",
      projectImg7: "../../assets/bahel/tshirt.jpeg",
      projectImg8: "../../assets/bahel/tshirt2.jpeg",
      projectImg9: "../../assets/bahel/tshirt3.jpeg",
    },
    {
      id: 3,
      projectName: "Modern Rugs",
      projectDetails: "panner",
      projectImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id: 4,
      projectName: "HerFit App",
      projectDetails: "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      projectImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id: 5,
      projectName: "Geneia",
      projectDetails: "(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      projectImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id: 6,
      projectName: "Christopher Fareed",
      projectDetails: "Oreo ice cream",
      projectImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]




}