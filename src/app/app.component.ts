import { Component } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
export interface Restaurante {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  restaurantes: Restaurante[] = [];

  spinner: boolean;
  sorteado: number;
  resultado: boolean;

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim() && !this.restaurantes.find(x => x.name === value.toUpperCase())) {
      this.restaurantes.push({name: value.trim().toUpperCase()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(restaurante: Restaurante): void {
    const index = this.restaurantes.indexOf(restaurante);

    if (index >= 0) {
      this.restaurantes.splice(index, 1);
    }
  }

  sortear(){
    this.spinner = true;
    this.resultado = false;
    this.sorteado = Math.floor(Math.random() * (this.restaurantes.length));
    setTimeout(() => {
      this.spinner = false;
      this.resultado = true;
      
    }, 3000);
  }
  Limpar(){
    this.restaurantes = [];
    this.spinner = false;
    this.resultado = false;
  }
}

