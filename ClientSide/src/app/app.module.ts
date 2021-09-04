import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { ManagersListComponent } from './managers-list/managers-list.component';
import { CreatePlanesComponent } from './create-planes/create-planes.component';
import { PlanesListComponent } from './planes-list/planes-list.component';
import { PlanesDetailsComponent } from './planes-details/planes-details.component';
import { EditPlanesComponent } from './edit-planes/edit-planes.component';
import { CreatePilotsComponent } from './create-pilots/create-pilots.component';
import { PilotsListComponent } from './pilots-list/pilots-list.component';
import { PilotsDetailsComponent } from './pilots-details/pilots-details.component';
import { EditPilotsComponent } from './edit-pilots/edit-pilots.component';
import { CreateHangarComponent } from './create-hangar/create-hangar.component';
import { HangarsDetailsComponent } from './hangars-details/hangars-details.component';
import { HangarsListComponent } from './hangars-list/hangars-list.component';
import { EditHangarsComponent } from './edit-hangars/edit-hangars.component';
import { AllocatePlanesComponent } from './allocate-planes/allocate-planes.component';
import { AllocatedPlanesListComponent } from './allocated-planes-list/allocated-planes-list.component';
import { AllocatedPlanesDetailsComponent } from './allocated-planes-details/allocated-planes-details.component';
import { UnallocatedPlanesListComponent } from './unallocated-planes-list/unallocated-planes-list.component';
import { UnallocatedPlanesDetailsComponent } from './unallocated-planes-details/unallocated-planes-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    EditManagerComponent,
    ManagersListComponent,
    CreatePlanesComponent,
    PlanesListComponent,
    PlanesDetailsComponent,
    EditPlanesComponent,
    CreatePilotsComponent,
    PilotsListComponent,
    PilotsDetailsComponent,
    EditPilotsComponent,
    CreateHangarComponent,
    HangarsDetailsComponent,
    HangarsListComponent,
    EditHangarsComponent,
    AllocatePlanesComponent,
    AllocatedPlanesListComponent,
    AllocatedPlanesDetailsComponent,
    UnallocatedPlanesListComponent,
    UnallocatedPlanesDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
