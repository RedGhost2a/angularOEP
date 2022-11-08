import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientsComponent} from './clients/clients.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {DialogComponent} from './dialog/dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDialogModule} from "@angular/material/dialog";
import {EditComponent} from './clients/edit/edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NavbarComponent} from './navbar/navbar.component';
import {DevisComponent} from './devis/devis.component';
import {BibliothequesComponent} from './bibliotheques/bibliotheques.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ParametresComponent} from './parametres/parametres.component';
import {ListClientComponent} from './clients/list-client/list-client.component';
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {UserComponent} from './parametres/user/user.component';
import {UserEditComponent} from './parametres/user-edit/user-edit.component';
import {UserListComponent} from './parametres/user-list/user-list.component';
import {MatCardModule} from "@angular/material/card";

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SidenavComponent,
    DialogComponent,
    EditComponent,
    NavbarComponent,
    DevisComponent,
    BibliothequesComponent,
    DashboardComponent,
    ParametresComponent,
    ListClientComponent,
    UserComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDialogModule,
    FontAwesomeModule,
    MatTableModule,
    MatListModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
