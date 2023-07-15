import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }

  // fooddetails 

  foodDetails = [
    {
      id: 1,
      foodName: "Amazon Prime",
      foodDetails: "Amazon Prime",
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq",
      foodImg2: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq",
      foodImg3: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"

    },
    {
      id: 2,
      foodName: "Bahel Coffee Roaster",
      foodDetails: "Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id: 3,
      foodName: "Modern Rugs",
      foodDetails: "panner",
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id: 4,
      foodName: "HerFit App",
      foodDetails: "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id: 5,
      foodName: "Geneia",
      foodDetails: "(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id: 6,
      foodName: "Christopher Fareed",
      foodDetails: "Oreo ice cream",
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]




}