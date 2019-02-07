import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SendDataStudentService } from "../service/dataStudent.service";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.sass"]
})
export class AddStudentComponent implements OnInit {
  imagePath = "";
  success = false;
  addStudentform: FormGroup;
  id: any;
  image: any;
  constructor(public router: Router, private _sendNewData: SendDataStudentService) {
    this.addStudentform = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\d{12}$/)
      ]),
      faculty: new FormControl("", [Validators.required]),
      birth_date: new FormControl("", [Validators.required]),
      address: new FormControl("")
    });
  }

  ngOnInit() {
   this.id = this._sendNewData.lenghtOfData + 1;
  }
  onChangeImage(e) {
    this.imagePath = e.target.value;
    this.image = e;
  }
  addStudent(a) {
    this.success = true;
    a["id"]= this.id;
    a["image"] = this.image;
    this._sendNewData.addStudentToData(a);
    setTimeout(() => {
      this.router.navigateByUrl("/Home");
    }, 1000);
  }
  OnPressBack() {
    this.router.navigateByUrl("/Home");

  }
}
