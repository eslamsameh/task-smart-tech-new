import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  @Input() dataSource: any;
  @Output() sendIdToPerant = new EventEmitter<any>();
  constructor(private _dataStudentProvider: SendDataStudentService, private router: Router) {}

  ngOnInit() {
  }
  handlePressYesToDelete(id) {
    this.sendIdToPerant.emit(id);
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 2000);
  }
  onPressEdit() {
    this._dataStudentProvider.currentStudent(this.dataSource);
    this.router.navigate(["edit-Student", this.dataSource.id]);
  }
}
