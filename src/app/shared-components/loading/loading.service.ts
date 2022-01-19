import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isOpen: boolean = false;
  public title: string = '';
  public message: string = '';

  constructor() { }

  public open(title: string, message: string): void {
    this.title = title;
    this.message = message;
    this.isOpen = true;
  }

  public close(): void {
    this.title = '';
    this.message = '';
    this.isOpen = false;
  }
}
