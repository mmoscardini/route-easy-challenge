webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6 col-sm-12\">\n      <app-form></app-form>\n    </div>\n\n    <div class=\"col-lg-8 col-md-6 col-sm-12\">\n      <app-map></app-map>\n    </div>\n    <div class=\"col-sm-12\">\n      <app-table></app-table>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asymmetrik_ngx_leaflet__ = __webpack_require__("../../../../@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_form_form_component__ = __webpack_require__("../../../../../src/app/components/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_map_map_component__ = __webpack_require__("../../../../../src/app/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_table_table_component__ = __webpack_require__("../../../../../src/app/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_requests_service__ = __webpack_require__("../../../../../src/app/services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_integration_service__ = __webpack_require__("../../../../../src/app/services/integration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_table_table_component__["a" /* TableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__asymmetrik_ngx_leaflet__["a" /* LeafletModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_requests_service__["a" /* RequestsService */], __WEBPACK_IMPORTED_MODULE_12__services_integration_service__["a" /* IntegrationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" >\n  <div class=\"panel-heading\">\n    <h2 class=\"panel-title text-center\">Cadastro de entrega</h2>\n  </div>\n  <div class=\"panel-body\" >\n    <form (submit)=\"OnRegisterSubmit()\">\n      <div class=\"form-horizontal\">\n        <div style=\"margin-bottom: 25px\"  class=\"input-group\">\n          <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-user\"></i> </span>\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"nome\" name=\"nome\" placeholder=\"Nome do cliente\">\n          <br>\n        </div>\n        <div style=\"margin-bottom: 25px\"  class=\"input-group\">\n          <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-folder-close\"></i> </span>\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"peso\" name=\"peso\" placeholder=\"Peso do pacote em Kg\">\n          <br>\n        </div>\n        <div   class=\"input-group\">\n          <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-map-marker\"></i> </span>            \n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"endereco\" name=\"endereco\" placeholder=\"Entereço de retirada\">\n        </div>\n        <button type=\"button\" style=\"margin-bottom: 25px;\" class=\"btn btn-default col-sm-12\" (click)=\"SearchAddress()\">Buscar endereço</button>\n      </div>  \n      <input type=\"submit\" style=\"margin-bottom: 25px;\" class=\"btn btn-primary col-sm-12\" value=\"Cadastrar cliente\">\n      <div class=\"col-sm-0\"></div>\n      <button type=\"button\" style=\"margin-bottom: 25px;\" class=\"btn btn-danger col-sm-12\" (click)=\"deleteDB()\">Deletar todos os cadastros</button>      \n    </form>\n  </div>\n\n  \n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_requests_service__ = __webpack_require__("../../../../../src/app/services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_integration_service__ = __webpack_require__("../../../../../src/app/services/integration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormComponent = (function () {
    function FormComponent(requests, flashMessage, integrationService) {
        this.requests = requests;
        this.flashMessage = flashMessage;
        this.integrationService = integrationService;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.SearchAddress = function () {
        var _this = this;
        //Apenas iniciar reqisicão se o campo endereco estiver preenchido
        if (this.endereco != null) {
            this.requests.checkAddress(this.endereco).subscribe(function (data) {
                if (data) {
                    //console.log (data);
                    //Confirmar se o endereco foi preenchido corretamente e retornou ao menos 6 campos
                    if (data.results[0].address_components[6]) {
                        //Verificar a ordem dos componentes de endereco fornecidos pelo google
                        //Alguns enderecos vem com o numero e o endereco em ordens inversas
                        if (data.results[0].address_components[0].types[0] == 'street_number') {
                            _this.newDelivery = {
                                nome: _this.nome,
                                peso: _this.peso,
                                endereco: [
                                    {
                                        logradouro: data.results[0].address_components[1].long_name,
                                        numero: data.results[0].address_components[0].long_name,
                                        bairro: data.results[0].address_components[2].long_name,
                                        complemento: '',
                                        cidade: data.results[0].address_components[3].long_name,
                                        estado: data.results[0].address_components[4].short_name,
                                        pais: data.results[0].address_components[5].short_name,
                                        geolocalizacão: [
                                            {
                                                lat: data.results[0].geometry.location.lat,
                                                long: data.results[0].geometry.location.lng,
                                            }
                                        ]
                                    }
                                ]
                            };
                        }
                        else if (data.results[0].address_components[0].types[0] == 'route') {
                            //salvar objeto para salvar na base de dados
                            _this.newDelivery = {
                                nome: _this.nome,
                                peso: _this.peso,
                                endereco: [
                                    {
                                        logradouro: data.results[0].address_components[0].long_name,
                                        numero: data.results[0].address_components[1].long_name,
                                        bairro: data.results[0].address_components[2].long_name,
                                        complemento: '',
                                        cidade: data.results[0].address_components[3].long_name,
                                        estado: data.results[0].address_components[4].short_name,
                                        pais: data.results[0].address_components[5].short_name,
                                        geolocalizacão: [
                                            {
                                                lat: data.results[0].geometry.location.lat,
                                                long: data.results[0].geometry.location.lng,
                                            }
                                        ]
                                    }
                                ]
                            };
                        }
                        //console.log (this.newDelivery);
                        return _this.flashMessage.show('Enderco encontrado na cidade: ' + data.results[0].address_components[3].long_name + ', ' + data.results[0].address_components[5].short_name, { cssClass: 'alert-info', timeout: 5000 });
                    }
                    else {
                        return _this.flashMessage.show('Enderco não encontrado', { cssClass: 'alert-danger', timeout: 5000 });
                    }
                }
            });
        }
    };
    FormComponent.prototype.OnRegisterSubmit = function () {
        var _this = this;
        //Validar se os campos foram preenchidos corretamente
        if (this.validateFields() == false) {
            return false;
        }
        this.requests.newDelivery(this.newDelivery).subscribe(function (data) {
            //console.log (data);
            if (data.success) {
                _this.integrationService.novoCadastro(true);
                return _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                return _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Validacão se os campos foram preenchidos corretamente
    FormComponent.prototype.validateFields = function () {
        if (this.endereco == undefined || this.nome == undefined || this.peso == undefined) {
            this.flashMessage.show('Preencher todos os campos', { cssClass: 'alert-warning', timeout: 5000 });
            return false;
        }
        if (this.newDelivery == null || this.newDelivery == undefined) {
            this.flashMessage.show('Clicar em buscar endereco antes de cadastrar', { cssClass: 'alert-warning', timeout: 5000 });
            return false;
        }
    };
    FormComponent.prototype.deleteDB = function () {
        var _this = this;
        this.requests.deleteAllDeliveries().subscribe(function (data) {
            _this.integrationService.novoCadastro(true);
            return _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    return FormComponent;
}());
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/components/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/form/form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_requests_service__["a" /* RequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_integration_service__["a" /* IntegrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_integration_service__["a" /* IntegrationService */]) === "function" && _c || Object])
], FormComponent);

var _a, _b, _c;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 400px;\"\n  id=\"mapid\">  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_requests_service__ = __webpack_require__("../../../../../src/app/services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_integration_service__ = __webpack_require__("../../../../../src/app/services/integration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = (function () {
    function MapComponent(requests, flashMessage, integrationService) {
        this.requests = requests;
        this.flashMessage = flashMessage;
        this.integrationService = integrationService;
        this.markers = new __WEBPACK_IMPORTED_MODULE_1_leaflet__["LayerGroup"]();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Inicia o mapa com posicão central e zoom
        this.map = __WEBPACK_IMPORTED_MODULE_1_leaflet__["map"]('mapid').setView([-23.556345, -46.616355], 11);
        //Adiciona a primeira tileLayer com infos provenientes do mapbox
        var tLayers = __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]('https://api.mapbox.com/styles/v1/mmoscardini/cj8ej2rlxa3xa2rk79z3y2pil/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW1vc2NhcmRpbmkiLCJhIjoiY2o4ZWltN2Z0MTMwejJ6cDc3bGVoaWY5cSJ9.0WjqxE4PYPNUkKh09cLWPQ', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(this.map);
        //definir icone customizado para markers
        this.customIcon = __WEBPACK_IMPORTED_MODULE_1_leaflet__["icon"]({
            iconUrl: '../../assets/boxicon2.png',
            iconSize: [30, 30],
            iconAnchor: [5, 5],
            popupAnchor: [10, 0]
        });
        this.addMarkers();
        //Subscribe to the integration service to check for novoCadastro
        this.integrationService.novoCadastroSource.subscribe(function (data) {
            _this.updateMakerkers();
        });
    };
    //Funcão para adicionar marcadores
    MapComponent.prototype.addMarkers = function () {
        var _this = this;
        //Request all saved deliveries
        this.requests.getAllDeliveries().subscribe(function (data) {
            //Loop throw all keys in object
            for (var i = 0; i < Object.keys(data).length; i++) {
                //Create a marker at each location
                var marker = __WEBPACK_IMPORTED_MODULE_1_leaflet__["marker"]([data[i].endereco[0].geolocalizacão[0].lat, data[i].endereco[0].geolocalizacão[0].long], { icon: _this.customIcon });
                marker.bindPopup('<p class="text-center"> <b>' + data[i].nome.toString() + '</b><br>' + data[i].peso.toString() + ' Kg</p>').openPopup();
                _this.markers.addLayer(marker).addTo(_this.map);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MapComponent.prototype.updateMakerkers = function () {
        this.markers.clearLayers();
        this.addMarkers();
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/components/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_requests_service__["a" /* RequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_integration_service__["a" /* IntegrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_integration_service__["a" /* IntegrationService */]) === "function" && _c || Object])
], MapComponent);

var _a, _b, _c;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <h2 class=\"panel-title text-center\">Lista de entregas</h2>\n  </div>\n</div>\n<div class=\"panel-body\">\n  <table class=\"table table-striped table-bordered table-list\">\n    <thead>\n      <tr>\n        <th class=\"text-center\">Nome</th>\n        <th class=\"text-center\">Peso</th>\n        <th class=\"text-center\">Endereco</th>\n        <th class=\"text-center\"><i class=\"glyphicon glyphicon-cog\"></i></th>        \n      </tr> \n    </thead>\n    <tbody>\n      <tr *ngFor=\"let k of objectKeys\">\n          <td class=\"text-center\">{{deliveries[k].nome}}</td>\n          <td class=\"text-center\">{{deliveries[k].peso}}</td>\n          <td class=\"text-center\">{{deliveries[k].endereco[0].logradouro}}, {{deliveries[k].endereco[0].numero}}. {{deliveries[k].endereco[0].bairro}} - {{deliveries[k].endereco[0].cidade}}, {{deliveries[k].endereco[0].pais}}</td>\n          <td class=\"text-center\">\n            <!-- <button class=\"btn btn-default text-center\"><i class=\"glyphicon glyphicon-pencil\"></i></button>-->\n            <button class=\"btn btn-danger text-center\" (click)=\"deleteDelivery(deliveries[k])\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n          </td> \n      </tr> \n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_requests_service__ = __webpack_require__("../../../../../src/app/services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_integration_service__ = __webpack_require__("../../../../../src/app/services/integration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = (function () {
    function TableComponent(integrationService, requests, flashMessage) {
        this.integrationService = integrationService;
        this.requests = requests;
        this.flashMessage = flashMessage;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requests.getAllDeliveries().subscribe(function (data) {
            _this.deliveries = data;
            _this.objectKeys = Object.keys(_this.deliveries);
        });
        this.integrationService.novoCadastroSource.subscribe(function (data) {
            if (data) {
                _this.requests.getAllDeliveries().subscribe(function (data) {
                    if (data) {
                        _this.deliveries = data;
                        _this.objectKeys = Object.keys(_this.deliveries);
                    }
                });
            }
        });
    };
    TableComponent.prototype.deleteDelivery = function (delivery) {
        var _this = this;
        var deleteQuery = {
            logradouro: delivery.endereco[0].logradouro,
            numero: delivery.endereco[0].numero,
            cidade: delivery.endereco[0].cidade
        };
        this.requests.deleteOneDelivery(deleteQuery).subscribe(function (data) {
            if (data.success) {
                _this.integrationService.novoCadastro(true);
                return _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else
                return _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    return TableComponent;
}());
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/components/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/table/table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_integration_service__["a" /* IntegrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_integration_service__["a" /* IntegrationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_requests_service__["a" /* RequestsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], TableComponent);

var _a, _b, _c;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/integration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntegrationService = (function () {
    function IntegrationService() {
        //Observables boolean sources
        this.novoCadastroSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        //Observable streams
        this.novoCadastro$ = this.novoCadastroSource.asObservable();
    }
    //Commands
    IntegrationService.prototype.novoCadastro = function (NovoCadastro) {
        this.novoCadastroSource.next(NovoCadastro);
    };
    return IntegrationService;
}());
IntegrationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], IntegrationService);

//# sourceMappingURL=integration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/requests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestsService = (function () {
    function RequestsService(http) {
        this.http = http;
    }
    RequestsService.prototype.newDelivery = function (newDelivery) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/deliveries/setDeliveries', newDelivery, { headers: headers }).
            map(function (res) { return res.json(); });
    };
    RequestsService.prototype.getAllDeliveries = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/deliveries/getDeliveries', { headers: headers }).
            map(function (res) { return res.json(); });
    };
    RequestsService.prototype.checkAddress = function (address) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD-lVlq6pN3CAA8vc7nj0kzEMhHt334ycI&address=' + address).
            map(function (res) { return res.json(); });
    };
    RequestsService.prototype.deleteAllDeliveries = function () {
        return this.http.delete('http://localhost:3000/deliveries/deleteDeliveries').
            map(function (res) { return res.json(); });
    };
    RequestsService.prototype.deleteOneDelivery = function (delivery) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/deliveries/deleteOneDelivery', { body: delivery, headers: headers }).
            map(function (res) { return res.json(); });
    };
    return RequestsService;
}());
RequestsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RequestsService);

var _a;
//# sourceMappingURL=requests.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map