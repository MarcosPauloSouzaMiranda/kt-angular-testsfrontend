import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TesteComponent } from './teste.component';

describe('TesteComponent', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteComponent ],
      imports: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instance component name property equals Teste 1', () => {
    component.prop = 'Teste 1';
    component.ngOnInit();
    fixture.detectChanges();
    const nameElement = fixture.debugElement.query(By.css('#teste'));
    expect('Teste 1').toBe(nameElement.nativeElement.innerText);
  });

  it('should instance component name property equals Teste 2', () => {
    component.prop = 'Teste 2';
    component.ngOnInit();
    fixture.detectChanges();
    const nameElement = fixture.debugElement.query(By.css('#teste'));
    expect('Teste 2').toBe(nameElement.nativeElement.innerText);
  });

  it('should instance component name property invalid value', () => {
    component.prop = 'Daniel';
    component.ngOnInit();
    fixture.detectChanges();
    const nameElement = fixture.debugElement.query(By.css('#teste'));
    console.log(nameElement);
    expect(nameElement).toBeNull();
  });
});
