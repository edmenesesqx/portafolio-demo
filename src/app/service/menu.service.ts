import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private collapsed = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsed.asObservable();

  toggleCollapsed() {
    this.collapsed.next(!this.collapsed.value);
  }

  setCollapsed(isCollapsed: boolean) {
    this.collapsed.next(isCollapsed);
  }
  constructor() { }
}
