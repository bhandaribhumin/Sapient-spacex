import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap,distinctUntilChanged, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IFilter, IProgram } from '../shared/madel';



@Injectable({
     providedIn:'root'
})
export class SpaceXService {
    private _spaceXData: BehaviorSubject<any[]> = new BehaviorSubject([]);
    spaceXData: Observable<any[]> = this._spaceXData.asObservable();
    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);
    isLoading: Observable<boolean> = this._isLoading.asObservable();
    
    constructor(private _http: HttpClient) { }    
 
    getSpaceXLaunches(filterQuery?:IFilter){
        this._isLoading.next(true);
        let url = environment.url;
        if(filterQuery){
           if(filterQuery.launchSuccess !== undefined){
               url = url + `&launch_success=${filterQuery.launchSuccess}`;
           }
           if(filterQuery.landSuccess !== undefined){
            url = url + `&land_success=${filterQuery.landSuccess}`;
        }
        if(filterQuery.launchYear !== undefined){
            url = url + `&launch_year=${filterQuery.launchYear}`;
        }
        } 
        console.log("url ", url);
      return this._http.get(url)
      .pipe(
          map((res: []) => {
            console.log("inside map url", url);
            let temp: IProgram[] = []
             res.forEach((value: any) => {
             temp.push({
                     title: value.mission_name,
                     image: value.links.mission_patch_small,
                     launchYear: value.launch_year,
                     launchSuccess: value.launch_success
                 })
             })
             this._spaceXData.next(temp);
             return temp;
          }),
          finalize(() => {
            // Do some work after complete...
            this._isLoading.next(false);
          })
      )
    }

    

   
}
