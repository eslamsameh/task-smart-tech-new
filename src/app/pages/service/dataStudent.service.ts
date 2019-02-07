import { Injectable, NgZone } from "@angular/core";

import { Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class SendDataStudentService {
  public Data: Subject<any> = new Subject<any>();
  public SpliceData: Subject<any> = new Subject<any>();
  CurrentData: any;
  lenghtOfData: any;
  newData = [];
  arrayOfAllData = [
    {
      id: 1,
      image: "https://gp1.com/wp-content/uploads/2016/11/student.jpg",
      name: "Eslam",
      faculty: "Computer Science",
      age: "23",
      address: "Giza",
      birth_date: "06/07/1993",
      phone: "201112334234"
    },
    {
      id: 2,
      image:
        "https://amp.businessinsider.com/images/5ac518b57a74af23008b4642-750-563.jpg",
      name: "Sameh",
      faculty: "Information System",
      age: "27",
      address: "Cairo",
      birth_date: "06/07/1994",
      phone: "201112334234"
    },
    {
      id: 3,
      image:
        "https://www.gannett-cdn.com/-mm-/1406738037af2189b628f886370bcb5a46e24595/c=0-0-1882-1415/local/-/media/USATODAY/USATODAY/2014/11/07/635509882498682692-138017387.jpg?width=534&height=401&fit=crop",
      name: "Omnia",
      faculty: "Faculty Of Art",
      age: "18",
      address: "Fisal",
      birth_date: "10/10/1992",
      phone: "201112334234"
    },
    {
      id: 4,
      image:
        "http://www.nrgfitness.ie/site/wp-content/uploads/student-image-2-300x212.jpg",
      name: "Laila",
      faculty: "Faculty Of Commerce",
      age: "25",
      address: "Dokki",
      birth_date: "10/07/1994",
      phone: "201148442784"
    }
  ];
  constructor() {}

  getData$() {
    return this.Data.asObservable();
  }
  getToData$() {
    return this.SpliceData.asObservable();
  }

  SendData(value) {
    this.Data.next(value);
  }
  SendToSplice(value) {
    this.SpliceData.next(value);

  }
  spliceDataStudent(value) {
    this.arrayOfAllData.forEach((v, i)=> {
      if (v.id == value.id) {
          this.arrayOfAllData.splice(i,1);

      }
    })
  }
  CurrentSendData(value) {
    this.CurrentData = value;
  }
  resviceCurrentData() {
    return this.CurrentData;
  }
  addStudentToData(value) {
    this.arrayOfAllData.push(value);
  }
  resiveDataToPushToStudentArray() {
    return this.newData;
  }
  SendLenghtOfData(value) {
    this.lenghtOfData = value;
  }
  getAllData() {
    return this.arrayOfAllData;
  }
  editStudentData(obj) {
    this.arrayOfAllData.forEach((v,i)=>{
      if (obj.id == v.id) {
        this.arrayOfAllData.splice(i,1);
        this.addStudentToData(obj);
      }
    })
  }

}


