import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IdService {

  private id : any;

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

}
