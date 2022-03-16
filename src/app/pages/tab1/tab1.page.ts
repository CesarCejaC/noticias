import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/interfaz';
import { NoticiaService } from 'src/app/servicio/noticia.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(private noticias: NoticiaService) {}

  ngOnInit(): void {
    this.noticias.lineas().subscribe((articulos) => {
      console.log(articulos);
    });
  }
}
