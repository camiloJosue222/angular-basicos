import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['spiderman','ironman','hulk','thor'];
  heroesBorr: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(){
    this.heroesBorr = this.heroes.shift() || '';

  }

}
