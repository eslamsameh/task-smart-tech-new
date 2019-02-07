import { Component, OnInit } from "@angular/core";
import { SendDataStudentService } from "../../pages/service/dataStudent.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-details-component",
  templateUrl: "./user-details-component.component.html",
  styleUrls: ["./user-details-component.component.sass"]
})
export class UserDetailsComponentComponent implements OnInit {
  toggle = false;
  success = false;
  error = false;
  toggleBettweenSuccessAndFailure = false;
  data = {id: "",name: "", address: "", faculty: "", image: "", date: "", phone: ""}
  constructor(private _resiveData: SendDataStudentService, private router: Router) {}

  ngOnInit() {
    this._resiveData.Data.subscribe(Res => {
      if (Res) {
        this.toggle = true;
        this.data.name = Res.name;
        this.data.faculty = Res.faculty;
        this.data.image = Res.image;
        this.data.address = Res.address;
        this.data.date = Res.birth_date;
        this.data.phone = Res.phone;
        this.data.id = Res.id;
      } else {
        this.toggle = true;
        this.data.name = "";
        this.data.faculty = "";
        this.data.image = "";
        this.data.address = "";
        this.data.date = "";
        this.data.phone = "";
        this.data.id = Res.id;
      }

    });
  }
  handlePressYesToDelete() {
    if (this.toggleBettweenSuccessAndFailure === false) {
      this.toggle = false;
      this.success = true;
      this._resiveData.SendToSplice(this.data);
      setTimeout(() => {
        this.success = false;
        this.toggleBettweenSuccessAndFailure = true;
      }, 2000);
    } else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
        this.toggleBettweenSuccessAndFailure = false;
      }, 2000);
    }
  }
  onPressEdit() {
    this._resiveData.CurrentSendData(this.data);
    this.router.navigate(["edit-Student", this.data.id]);
  }
}
