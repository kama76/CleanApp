import { Component, OnInit } from '@angular/core';
import { CleaningDataService } from '../shared/cleaning-data.service';
import { Room } from '../clean-list/room';


@Component({
  selector: 'clean-list',
  templateUrl: './clean-list.component.html',
  styleUrls: ['./clean-list.component.css'],
  providers: [ CleaningDataService ]
})
export class CleanListComponent implements OnInit {
  roomArray: Room[] = [];
  constructor(private cleaningDataService: CleaningDataService) { }

  ngOnInit():void {
    this.GetCleaningList();
  }

  GetCleaningList(){
    this.roomArray = [];
    this.cleaningDataService.getCleanList()
    .subscribe(
      cleanListData =>{
        for(let roomdata of cleanListData){
          let room = new Room();
          room.roomName = roomdata.pl_bez;
          room.roomNr = roomdata.pl_nr;
          this.roomArray.push(room);
        }
      }
    )
  }

}
