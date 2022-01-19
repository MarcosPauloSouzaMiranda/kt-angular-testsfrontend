import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

import { LoadingComponent } from './loading.component';
import { By } from '@angular/platform-browser';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let service: LoadingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      providers: [LoadingService]
    })
    .compileComponents();
    service = TestBed.inject(LoadingService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    service.open('Test', 'Message');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should service instance', () => {
    expect(service).toBeTruthy();
  })

  it('Should must check if the popup was opened in the component layout after triggering the open method', () => {
    const modal = fixture.debugElement.query(By.css('[data-testid="modalLoading"]'));
    expect(modal !== null).toBeTruthy();
  });

  it('Should check if the popup was closed in the component layout after triggering the close method', () => {
    service.close();
    fixture.detectChanges();
    const modal = fixture.debugElement.query(By.css('[data-testid="modalLoading"]'));
    expect(modal === null).toBeTruthy();
  });

  it('Should must check if the name passed in the opening of the popup is being loaded on the screen', () => {
    const modal = fixture.debugElement.query(By.css('[data-testid="modalLoading"]'));
    const title = modal.query(By.css('[data-testid="modalTitle"]'));
    expect(title.nativeElement.textContent.trim()).toBe('Test');
  });

  it('Should must check if the message being sent on opening is loaded on the screen', () => {
    const modal = fixture.debugElement.query(By.css('[data-testid="modalLoading"]'));
    const title = modal.query(By.css('[data-testid="modalMessage"]'));
    expect(title.nativeElement.textContent.trim()).toBe('Message');
  });

  it('Should close the modal when clicking on the button', () => {
    const btnClose = fixture.debugElement.query(By.css('[data-testid="btnClose"]'));
    btnClose.triggerEventHandler('click', null);
    fixture.detectChanges();
    const modal = fixture.debugElement.query(By.css('[data-testid="modalLoading"]'));
    expect(modal === null).toBeTruthy();
  });
});
