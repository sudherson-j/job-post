import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPostListComponent } from './job-post-list/job-post-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/job-posts', pathMatch: 'full' },
  { path: 'job-posts', component: JobPostListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
