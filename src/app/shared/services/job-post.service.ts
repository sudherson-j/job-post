import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobPostService {
  constructor(private http: HttpClient) {}

  getJobPosts() {
    return this.http
      .get<any>(
        `http://localhost:4200/job_search/search?keyword=Information%20Technology`
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
