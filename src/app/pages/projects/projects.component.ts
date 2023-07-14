import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from 'src/app/services/projects-details.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service: ProjectDetailsService) { }
  foodData: any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }


}
