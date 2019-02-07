import { Component, OnInit } from "@angular/core";
import { SendDataStudentService } from "../../pages/service/dataStudent.service";

@Component({
  selector: "app-slide-component",
  templateUrl: "./slide-component.component.html",
  styleUrls: ["./slide-component.component.sass"]
})
export class SlideComponentComponent implements OnInit {
  data = [];
  constructor(private _dataSend: SendDataStudentService) {}

  ngOnInit() {
    this.data = this._dataSend.getAllData();
      this.data.forEach((v,i)=> {
        if (typeof v.image !== 'string' ) {
          debugger;
          const reader = new FileReader();
          reader.readAsDataURL(v.image.target.files[0]);
          reader.onload = (e: any) => {
            v.image = e.target.result;
            v.birth_date = v.birth_date.split('/').reverse().join('/');
          };

        }
      })
    this._dataSend.SendLenghtOfData(this.data.length);
    this._dataSend.SpliceData.subscribe((Res)=> {
      if (Res) {
      this._dataSend.spliceDataStudent(Res);
      setTimeout(() => {
        this.data = this._dataSend.getAllData();

      }, 100);

      }
    })
  }
  onPressImageStudent(data) {

    this._dataSend.SendData(data);
  }
}
