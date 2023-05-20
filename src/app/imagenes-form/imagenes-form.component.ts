import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { SharingdataService, cargarImagen } from '../Services/sharingdata.service';

@Component({
  selector: 'app-imagenes-form',
  templateUrl: './imagenes-form.component.html',
  styleUrls: ['./imagenes-form.component.css']
})
export class ImagenesFormComponent implements OnInit {
  
  cargarImagen$: boolean = true;
  carga: cargarImagen = {cargarImagen: false, url: ''};
  url: string = '';
  constructor(public sharingdata: SharingdataService){
  }
  ngOnInit(): void {
      this.sharingdata.sharingObservable.subscribe(cargarImagen=> {
        this.cargarImagen$ = cargarImagen.cargarImagen
      })
  }


  esFalso(){
    this.cargarImagen$=false
    this.carga = {cargarImagen: false, url: this.url}
    this.sharingdata.sharingObservableData = this.carga;
  }

  guardarUrl(){
    this.url = (<HTMLInputElement>document.getElementById("urlInput")).value;
    this.esFalso()
  }

}
