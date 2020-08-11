import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent } from './components/city/city-list.component'
import { CityEditComponent } from './components/city/city-edit.component'
// import { CityNewComponent } from './components/city/city-new.component'

const routes: Routes = [
  {
    path: 'cities',
    component: CityListComponent,
    data: { title: 'List of Cities' }
  },
  {
    path: 'city-edit/:id',
    component: CityEditComponent,
    data: { title: 'Edit City' }
  },
  // {
  //   path: 'city-new',
  //   component: CityNewComponent,
  //   data: { title: 'Add City' }
  // },
  { path: '',
    redirectTo: '/cities',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
