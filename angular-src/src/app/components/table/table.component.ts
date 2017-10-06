import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../services/requests.service';
import {IntegrationService} from '../../services/integration.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  deliveries: Object;
  objectKeys;

  constructor(
    private integrationService: IntegrationService,
    private requests: RequestsService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    

    this.requests.getAllDeliveries().subscribe(data=>{
      this.deliveries = data;
      this.objectKeys = Object.keys(this.deliveries);      
    })

    this.integrationService.novoCadastroSource.subscribe(data =>{
      if (data){
        this.requests.getAllDeliveries().subscribe(data=>{
          if (data){
            this.deliveries = data;
            this.objectKeys = Object.keys(this.deliveries);                  
          }
        });
      }
    })
   }

   deleteDelivery(delivery){
    const deleteQuery = {
        logradouro: delivery.endereco[0].logradouro,
        numero: delivery.endereco[0].numero,
        cidade:delivery.endereco[0].cidade 
    }
    this.requests.deleteOneDelivery(deleteQuery).subscribe(data=>{
      if (data.success){
        this.integrationService.novoCadastro(true);
        return this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000 });                
      }
      else 
        return this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000 });               
    })
    
   }
}
