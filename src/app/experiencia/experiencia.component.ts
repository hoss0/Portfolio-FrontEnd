import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs'

import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../Services/experiencia.service';
import { cargarImagen, SharingdataService } from '../Services/sharingdata.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  
  // variables----------------------------------------
  token = true
  isLogged = false
  cargarImagen:boolean=false;
  cargarImagen$: cargarImagen = {cargarImagen: false, url: ''};
  edit:boolean= false
  url: string = '';
  identify:Number = -1;
  htmlStr: string='';
  e:Experiencia = {
    "desc": "qweqweqe",
    "periodo":"sdasdxzxc",
    "titulo_empresa": "sdasdasd",
    "titulo_puesto": "sadasdaasda",
    "url_img": ""
  };


  Experiencias: Experiencia[ ] = []


    idList: number[]=[];
    id$:number= -1;
  
  // ------------------------------------------------

  constructor(public sharingServise: SharingdataService, private ExpS:ExperienciaService){
    sharingServise.sharingObservableData = this.cargarImagen$;
    
  }
  
  ngOnInit(): void {
      this.cargarExp();
      if(this.token){
        this.isLogged = true
      }else{
        this.isLogged = false
      }
      
      this.sharingServise.sharingObservable.subscribe(cargarImagen=> {
        this.url = cargarImagen.url
      })
  }

// ------------------
clickImagen(){
  if(!this.cargarImagen){
    this.cargarImagen=true
    this.cargarImagen$ = {cargarImagen: this.cargarImagen, url: ''}
    this.sharingServise.sharingObservableData = this.cargarImagen$;
    this.cargarImagen=false
  }else{
  }
}

// ------------------------

clickEdit(){
  if(!this.edit){
      this.edit=true
    }else{
      this.edit=false
    }
  }


generarFila(){
  let  tempExp: Experiencia = {
    desc: '',
    titulo_puesto: '',
    titulo_empresa: '',
    periodo: '',
    url_img: ''};
    this.Experiencias.push(tempExp)
    console.log("se cargo la experiencia en la lista"+ this.Experiencias[this.Experiencias.length - 1].id)

}
  
eliminarUltima(){
this.Experiencias.pop()
}


  clickSave(){


    if(this.edit){
      this.edit=false
    }
  }


  cargarExp():void{
    this.ExpS.lista().subscribe(
      data => {
        this.Experiencias=data;
      }
    )
    for (let exp of this.Experiencias) {
      if (exp.id === null) {
        this.id$ = exp.id;
        this.idList.indexOf(this.id$) === -1 ? this.idList.push(this.id$) : console.log("");
      }
    }
  }

  
  borrarExp(id?:number){
    if (id != undefined){
      this.ExpS.delete(id).subscribe(
        data=>{this.cargarExp()
        }, err =>{ 
          alert("No se pudo eliminar")
        }
      )
    }
  }





  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}

