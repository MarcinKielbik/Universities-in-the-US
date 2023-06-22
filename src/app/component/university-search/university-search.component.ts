import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/interface/university';
import { UniversityService } from 'src/app/service/university.service';

@Component({
  selector: 'app-university-search',
  templateUrl: './university-search.component.html',
  styleUrls: ['./university-search.component.scss']
})
export class UniversitySearchComponent implements OnInit {

  universities: University[] = [];
  searchTerm:string='';

  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
    this.searchUniversities();
  }

  searchUniversities(): void {
    this.universityService.searchUniversities()
      .subscribe(universities => {
        this.universities = universities.filter(university =>
          university.name.toLowerCase().includes(this.searchTerm?.toLowerCase())
        );
      });
  }

}
