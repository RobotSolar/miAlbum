import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ImagenModalPage } from "../imagen-modal/imagen-modal.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl : ModalController){

  }

  imagenes = [
    '2B1.jpg',
    'atardecer.jpg',
    'casa.jpg',
    'dog.png',
    'dogtwo.jpg',
    'homer.jpg',
    'hqdefault.jpg',
    'numeros.jpg',
    'pokemon.jpg',
    'zebra.jpg',
  ];

  verImagen(index){

    this.modalCtrl.create({
      component : ImagenModalPage,
      componentProps : {
        index : index
       
      }
      
    }).then(modal => modal.present())
  }

}
