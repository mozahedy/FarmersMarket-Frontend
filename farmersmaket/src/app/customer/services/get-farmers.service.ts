import { Injectable } from '@angular/core';
import { config } from '../../config/config';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GetFarmersService {


  farmersList: any;
  farmerId: any;

  constructor(public http: HttpClient) { }

  getFarmerId() {
    return this.farmerId;
  }

  putFarmerId(id) {
    this.farmerId = id;
  }

  fetchFarmers() {
    const fetchFarmers$ = this.http.get(config.RestUrl + `/farmers/`);

    fetchFarmers$.subscribe((res: any) => { 
      this.farmersList = res.data;
    })

    return fetchFarmers$

  }
}


