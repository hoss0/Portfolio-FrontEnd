import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'


export interface cargarImagen{
  cargarImagen: boolean;
  url: string
} 

@Injectable()
export class SharingdataService {

  private sharingObservablePrivate: BehaviorSubject<cargarImagen> = new BehaviorSubject<cargarImagen>({cargarImagen: true, url: ''});

  get sharingObservable(){
    return this.sharingObservablePrivate.asObservable();
  }

  set sharingObservableData(cargarImagen: cargarImagen){
    this.sharingObservablePrivate.next(cargarImagen)
  }
  
}
