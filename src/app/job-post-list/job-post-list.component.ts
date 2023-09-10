import { Component, OnInit } from '@angular/core';
import { JobPostService } from '../shared/services/job-post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JobDialogComponent } from '../job-dialog/job-dialog.component';

@Component({
  selector: 'app-job-post-list',
  templateUrl: './job-post-list.component.html',
  styleUrls: ['./job-post-list.component.scss'],
})
export class JobPostListComponent implements OnInit {
  jobPosts: any = [];
  selectedJobPost: any;

  constructor(
    private jobPostService: JobPostService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.jobPostService.getJobPosts().subscribe((res: any) => {
      this.jobPosts = res.jobs;
      this.selectedJobPost = this.jobPosts[0];
    });
  }

  // Implement click event to select a job post
  onSelect(jobPost: any): void {
    this.selectedJobPost = jobPost;
  }

  addJob() {
    const dialogRef = this.dialog.open(JobDialogComponent, {
      width: '1200px', // Adjust the width as needed
      // You can add more dialog configuration options here
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobPosts.unshift(result);
        this.selectedJobPost = result;
      }
    });
  }
}
