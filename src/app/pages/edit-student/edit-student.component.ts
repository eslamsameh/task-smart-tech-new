import { Component, OnInit } from "@angular/core";
import { SendDataStudentService } from "../service/dataStudent.service";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-student",
  templateUrl: "./edit-student.component.html",
  styleUrls: ["./edit-student.component.sass"]
})
export class EditStudentComponent implements OnInit {
  data = { id: "", name: "", address: "", faculty: "", image: "", date: "", phone: "" };
  addStudentform: FormGroup;
  imagePath: any;
  success = false;
  id: any;
  image: any;
  constructor(
    private _dataStudentProvider: SendDataStudentService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
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
    this.id = this.activeRoute.snapshot.params.id;
    let Res = this._dataStudentProvider.currentData;
    let date = Res.birth_date.split("/").reverse().join("-");
    setTimeout(() => {
      this.addStudentform.patchValue({ name: Res.name });
      this.addStudentform.patchValue({ faculty: Res.faculty });
      this.addStudentform.patchValue({ image: Res.image });
      this.addStudentform.patchValue({ birth_date: date });
      this.addStudentform.patchValue({ phone: Res.phone });
      this.addStudentform.patchValue({ address: Res.address });
      this.imagePath = Res.image;
      this.image = Res.image;
    }, 10);
  }
  onChangeImage(e) {
    this.imagePath = e.target.value;
    this.image = e;
  }
  addStudent(a) {
    a["image"] = this.image;
    a["id"] = this.id;
    this._dataStudentProvider.editStudent(a);
    this.success = true;
    setTimeout(() => {
      this.router.navigateByUrl("/Home");
    }, 1000);
  }
  OnPressBack() {
    this.router.navigateByUrl("/Home");
  }
}
