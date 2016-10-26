import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class CleaningDataService {
  private backendURL = 'http://localhost:8080/cleanlist';
  constructor(private http : Http) { }  

  getCleanList(): Observable<any>{
        return this.http.get(this.backendURL)
        .map(this.extractData)

  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
    //To do: error Handling!!!
}
