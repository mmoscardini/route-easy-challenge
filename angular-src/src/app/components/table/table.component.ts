import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../services/requests.service';
import {IntegrationService} from '../../services/integration.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  deliveries: Object;
  objectKeys = Object.keys;

  constructor(
    private integrationService: IntegrationService,
    private requests: RequestsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit():void {

    console. log (this.route.snapshot.data);

    this.integrationService.novoCadastroSource.subscribe(data =>{
      if (data){
        this.requests.getAllDeliveries().subscribe(data=>{
          this.deliveries = data;
        });
        this.integrationService.novoCadastro(false);        
      }
    })
   }
}
