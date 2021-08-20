import { Component } from '@angular/core';
import {UsersDataService} from './users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lat:number= 51.678418;
  long:number= 7.809007;
  // locationChosen = false;
  title = 'project';
  hotel: any={};
  allData: any={};
  hotelData:any={};
 
  showMe:boolean=true;
  showMeDesc:boolean=false;
  showMeFasc:boolean=false;
  showMeLoc:boolean=false;
  hotelImageArray: any;




  toggleTag(){
    this.showMe=!this.showMe;
  }
  toggleTagDesc(){
    this.showMeDesc=!this.showMeDesc;
  }
  toggleTagFasc(){
    this.showMeFasc=!this.showMeFasc;
  }
  toggleTagLoc(){
    this.showMeLoc=!this.showMeLoc;
  }
  
 
  constructor(private user:UsersDataService)
  {
    
    this.user.getData().subscribe(
      (data:any)=>{
        // console.log(data.data.hotel);
      console.log(data);
      this.hotel=data.data.hotels.hotel;
      
    }
    )
    this.user.getImgData().subscribe(
      (data:any)=>{
        this.hotelImageArray=[];
        console.log(data);
        this.hotelData=JSON.parse(data.data[0].local_db_data[0].IMAGES);
        console.log(this.hotelData);
        
        
        // console.log(arr);
        Object.keys(this.hotelData).forEach((key)=>{
          this.hotelImageArray.push({
            "name":key,
            "src":this.hotelData[key]
          })
        });
        console.log(this.hotelImageArray);

      }
    )


    
   
  }
  
}
