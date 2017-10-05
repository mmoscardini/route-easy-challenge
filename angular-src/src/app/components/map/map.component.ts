import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {RequestsService} from '../../services/requests.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {IntegrationService} from '../../services/integration.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  options: Object;
  map;
  customIcon;
  
  constructor(
    private requests: RequestsService,
    private flashMessage: FlashMessagesService,
    private integrationService: IntegrationService
  ) { }

  ngOnInit() {
    
    //Inicia o mapa com posição central e zoom
    this.map = L.map('mapid').setView([ -23.556345, 	-46.616355 ], 11);
  
    //Adiciona a primeira tileLayer com infos provenientes do mapbox
    const tLayers = L.tileLayer('https://api.mapbox.com/styles/v1/mmoscardini/cj8ej2rlxa3xa2rk79z3y2pil/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW1vc2NhcmRpbmkiLCJhIjoiY2o4ZWltN2Z0MTMwejJ6cDc3bGVoaWY5cSJ9.0WjqxE4PYPNUkKh09cLWPQ', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets'
      }).addTo(this.map);  
    

    //definir icone customizado para markers
    this.customIcon = L.icon({
      iconUrl: '../../assets/boxicon2.png',
      iconSize: [40, 40],
      iconAnchor: [15, 15],
      popupAnchor: [-3, -76]
    });

    this.integrationService.novoCadastroSource.subscribe(data =>{
      if (data){
        this.addMarkers();
        this.integrationService.novoCadastro(false);        
      }
    })
  }

  //Função para adicionar marcadores
  addMarkers(){
    //Request all saved deliveries
    this.requests.getAllDeliveries().subscribe(data=>{
      //Loop throw all keys in object
      for(var i =0; i < Object.keys(data).length; i++){
        //Create a marker at each location
        const layer = L.marker([ data[i].endereço[0].geolocalização[0].lat, data[i].endereço[0].geolocalização[0].long ], {icon: this.customIcon}).addTo(this.map);        
      }
    }, err =>{
      console.log (err);
    })
  }
}
