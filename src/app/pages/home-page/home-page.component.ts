import { Component, OnInit, DoCheck, AfterViewChecked } from "@angular/core";
import { SendDataStudentService } from "../service/dataStudent.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.sass"]
})
export class HomePageComponent implements OnInit {
  data = [];
  dataDetail: any;
  showDetails = false;
  constructor(private _dataStudentProvider: SendDataStudentService) {


  }

  ngOnInit() {
    this.data = this._dataStudentProvider.getData$();
    this.data.forEach((v,i) => {
      if (typeof v.image !== 'string' ) {
        const reader = new FileReader();
        reader.readAsDataURL(v.image.target.files[0]);
        reader.onload = (e: any) => {
          v.image = e.target.result;
        }
      }
    });
  }

  onPressImageStudent(data) {
    this.dataDetail = data;
    this.showDetails = true;
  }
  resviceIdFromChild(id) {
    this.showDetails = false;
    this._dataStudentProvider.DeleteData(id);
    this.data = this.data.filter(item => item.id != id);

  }
}
