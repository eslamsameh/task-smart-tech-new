// imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// decleartion
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { EditUserComponentComponent } from "./components/edit-user-component/edit-user-component.component";
import { SlideComponentComponent } from "./components/slide-component/slide-component.component";
import { UserDetailsComponentComponent } from "./components/user-details-component/user-details-component.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AddStudentComponent } from "./pages/add-student/add-student.component";
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
// provider
import { SendDataStudentService } from "./pages/service/dataStudent.service";

const routes: Routes = [
  // { path: "", component: AppComponent },
  { path: "Home", component: HomePageComponent },
  { path: "Add-Student", component: AddStudentComponent },
  { path: "edit-Student/:id", component: EditStudentComponent },
  { path: "", redirectTo: "Home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditUserComponentComponent,
    SlideComponentComponent,
    UserDetailsComponentComponent,
    HomePageComponent,
    AddStudentComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [SendDataStudentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
