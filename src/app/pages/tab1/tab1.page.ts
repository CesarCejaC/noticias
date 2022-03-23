import { Component, OnInit } from '@angular/core';
import { Article, Noticias } from 'src/app/interfaz';
import { NoticiaService } from 'src/app/servicio/noticia.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  public articulos: Article[]=[]
  
  constructor(private noticias: NoticiaService) {}

  ngOnInit(): void {
    this.noticias.lineas().subscribe(articulos => this.articulos.push(...articulos));
  }
}
