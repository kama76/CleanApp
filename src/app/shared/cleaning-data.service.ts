import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class CleaningDataService {
  private backendURL = 'http://localhost:8080/cleanlist';
  constructor(private http : Http) { }  

  getCleanList(): Observable<{}>{
        return this.http.get(this.backendURL)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
    //To do: error Handling!!!
}
