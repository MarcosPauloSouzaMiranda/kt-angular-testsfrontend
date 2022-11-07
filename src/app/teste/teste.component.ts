import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  @Input('prop')
  public prop: string = 'Teste 1';

  public name: string | null = null;

  constructor() { }


  ngOnInit(): void {
    this.changeName();
  }

  public changeName(): void {
    if (this.prop === 'Teste 1') {
      this.name = 'Teste 1';
      return;
    }
    if (this.prop === 'Teste 2') {
      this.name = 'Teste 2';
      return;
    }
    this.name = null;
  }
}
