import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {TableComponent} from '../components/table/table.component';
import {RequestsService} from '../services/requests.service';
import {Observable} from "rxjs";

@Injectable()
export class TaskResolverService implements Resolve<any> {

  constructor(
    private requests: RequestsService,
    private tableComponent: TableComponent
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
      this.requests.getAllDeliveries().subscribe(data=>{
      return data;
    })
  }
}
