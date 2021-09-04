import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { ManagersListComponent } from './managers-list/managers-list.component';
import {CreatePlanesComponent} from './create-planes/create-planes.component';
import{PlanesListComponent} from './planes-list/planes-list.component';
import{EditPlanesComponent} from './edit-planes/edit-planes.component';
import {CreatePilotsComponent} from './create-pilots/create-pilots.component';
import {PilotsListComponent} from './pilots-list/pilots-list.component';
import {EditPilotsComponent} from './edit-pilots/edit-pilots.component';
import {CreateHangarComponent} from './create-hangar/create-hangar.component';
import {HangarsListComponent} from './hangars-list/hangars-list.component';
import {EditHangarsComponent} from './edit-hangars/edit-hangars.component'
import { AllocatePlanesComponent } from './allocate-planes/allocate-planes.component';
import { UnallocatedPlanesListComponent } from './unallocated-planes-list/unallocated-planes-list.component';
import { AllocatedPlanesListComponent } from './allocated-planes-list/allocated-planes-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'manager', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'edit', component: EditManagerComponent},
  {path: 'manager', component: ManagersListComponent},
  {path: 'admin/addplanes',component: CreatePlanesComponent},
  {path:'admin/viewplanes',component:PlanesListComponent},
  {path:'admin/viewplanes/edit',component:EditPlanesComponent},
  {path:'admin/addpilots',component:CreatePilotsComponent},
  {path:'admin/viewpilots',component:PilotsListComponent},
  {path:'admin/viewpilots/edit',component:EditPilotsComponent},
  {path:'admin/addhangars',component:CreateHangarComponent},
  {path:'admin/viewhangars',component:HangarsListComponent},
  {path:'admin/viewhangars/edit',component:EditHangarsComponent},
  {path:'manager/viewplanes',component:PlanesListComponent},
  {path:'manager/viewpilots',component:PilotsListComponent},
  {path:'manager/viewhangars',component:HangarsListComponent},
  {path:'manager/viewhangars/allocate',component:AllocatePlanesComponent},
  {path:'manager/viewunallocatedplanes',component:UnallocatedPlanesListComponent},
  {path:'manager/viewallocatedplanes',component:AllocatedPlanesListComponent},
  {path:'**',redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
