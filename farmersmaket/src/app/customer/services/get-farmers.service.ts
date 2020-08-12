import { Injectable } from '@angular/core';
import { config } from '../../config/config';
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetFarmersService {


  farmersList: any;
  farmerId: any;

  fetchFarmersSubscription: Subscription;

  constructor(public http: HttpClient) { }

  getFarmerId() {
    return this.farmerId;
  }

  putFarmerId(id) {
    this.farmerId = id;
  }

  fetchFarmers() {
    const fetchFarmers$ = this.http.get(config.RestUrl + `/farmers/`);

    this.fetchFarmersSubscription = fetchFarmers$.subscribe((res: any) => { 
      this.farmersList = res.data;
    })

    return fetchFarmers$

  }

  ngOnDestroy(): void {
    this.fetchFarmersSubscription.unsubscribe();
  }
}


