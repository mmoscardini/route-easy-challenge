import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RequestsService} from '../../services/requests.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {IntegrationService} from '../../services/integration.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nome: String;
  peso: Number;
  endereco: String;

  newDelivery: Object;

  constructor(
    private requests: RequestsService,
    private flashMessage: FlashMessagesService,
    private integrationService: IntegrationService
  ) { 
  }

  ngOnInit() {
  }

  SearchAddress(){
    //Apenas iniciar reqisição se o campo endereço estiver preenchido
      if (this.endereco != null){
      this.requests.checkAddress(this.endereco).subscribe(data => {
        if (data){
          console.log (data);
          //Confirmar se o endereço foi preenchido corretamente e retornou ao menos 6 campos
          if (data.results[0].address_components[6]){

            //Verificar a ordem dos componentes de endereço fornecidos pelo google
            //Alguns endereços vem com o numero e o endereço em ordens inversas
            if (data.results[0].address_components[0].types[0] == 'street_number'){
              this.newDelivery = {
                nome: this.nome,
                peso: this.peso,
                endereço : [
                  {
                      logradouro: data.results[0].address_components[1].long_name,
                      numero: data.results[0].address_components[0].long_name,
                      bairro: data.results[0].address_components[2].long_name,
                      complemento: '',
                      cidade: data.results[0].address_components[3].long_name,
                      estado: data.results[0].address_components[4].short_name,
                      pais: data.results[0].address_components[5].short_name,
                      geolocalização : [
                        {
                            lat: data.results[0].geometry.location.lat,
                            long: data.results[0].geometry.location.lng,
                      }
                    ]
                  }
                ]
              }
            }
            else if (data.results[0].address_components[0].types[0] == 'route'){          
              //salvar objeto para salvar na base de dados
              this.newDelivery = {
                nome: this.nome,
                peso: this.peso,
                endereço : [
                  {
                      logradouro: data.results[0].address_components[0].long_name,
                      numero: data.results[0].address_components[1].long_name,
                      bairro: data.results[0].address_components[2].long_name,
                      complemento: '',
                      cidade: data.results[0].address_components[3].long_name,
                      estado: data.results[0].address_components[4].short_name,
                      pais: data.results[0].address_components[5].short_name,
                      geolocalização : [
                        {
                            lat: data.results[0].geometry.location.lat,
                            long: data.results[0].geometry.location.lng,
                      }
                    ]
                  }
              ]
            }
          }
          //console.log (this.newDelivery);
          return this.flashMessage.show('Enderço encontrado na cidade: ' + data.results[0].address_components[3].long_name +', ' + data.results[0].address_components[5].short_name, {cssClass: 'alert-info', timeout: 5000 })          
          
          } else{
            return this.flashMessage.show('Enderço não encontrado', {cssClass: 'alert-danger', timeout: 5000 })        
          }
        }
      })
    }
  }

  OnRegisterSubmit(){
    //Validar se os campos foram preenchidos corretamente
    if(this.validateFields() == false){
      return false;
    }
   
    this.requests.newDelivery(this.newDelivery).subscribe(data =>{
      //console.log (data);
      if(data.success){
        this.integrationService.novoCadastro(true);
        return this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000 });
      }
      else {
        return this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000 });          
      }
    }, err => {
      console.log (err);
    })
  }

  //Validação se os campos foram preenchidos corretamente
  validateFields(){
    if (this.endereco == undefined || this.nome == undefined || this.peso == undefined){
      this.flashMessage.show('Preencher todos os campos', {cssClass: 'alert-warning', timeout: 5000 });                
      return false;
    }

    if (this.newDelivery == null || this.newDelivery == undefined){
      this.flashMessage.show('Clicar em buscar endereço antes de cadastrar', {cssClass: 'alert-warning', timeout: 5000 })          
      return false;
    }
  }

  deleteDB(){
    this.requests.deleteAllDeliveries().subscribe(data =>{
      this.integrationService.novoCadastro(true);      
      return this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000 });      
    })
  }
}
