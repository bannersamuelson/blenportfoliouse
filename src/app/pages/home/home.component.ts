import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from 'docs/src/app/services/projects-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ProjectDetailsService) { }
  foodData: any;
  ngOnInit(): void {
    this.foodData = this.service.projectDetails;
  }

}