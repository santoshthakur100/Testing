import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tripify';


  name:string = '';
  age:number;
  productImages: Array<any> = [];
  

  constructor(private httpClient:HttpClient){  }
  onNameKeyUp(event:any){
    this.name = event.target.value;
    //this.found = false;
  }
  getProfile(){
    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.age = data[0].age;
        }
      }
    )
  }

  postProfile(){
    //this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
    this.httpClient.post(`http://localhost:62803/Hotels/SearchRequest`,
    {
      "LocationID": "1",
      "CheckInDate": "2018-07-17 00:00:00",
      "CheckOutDate": "2018-07-20 00:00:00",
      "Room": [
        {
          "Adults": 2,
          "Children": []
        }
      ]
    })
    .subscribe(
      (data:any) => {
        console.log(data);
        this.productImages = data;
      }
    )
  }

}
