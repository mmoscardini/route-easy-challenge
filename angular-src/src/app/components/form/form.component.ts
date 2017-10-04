import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nome: String;
  peso: Number;
  endereço: String;

  constructor() { }

  ngOnInit() {
  }

}
