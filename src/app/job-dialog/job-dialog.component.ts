import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-job-dialog',
  templateUrl: './job-dialog.component.html',
  styleUrls: ['./job-dialog.component.scss'],
})
export class JobDialogComponent {
  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<JobDialogComponent>
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      jobId: ['', Validators.required],
      company: ['', Validators.required],
      category: ['', Validators.required],
      body: ['', Validators.required],
      location: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zip: ['', Validators.required],
      }),
    });
  }

  get locationForm() {
    return this.form.get('location') as FormGroup;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.dialogRef.close({ ...this.form.value, postedAt: new Date() });
  }
}
