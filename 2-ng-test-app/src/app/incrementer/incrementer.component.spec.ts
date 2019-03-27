import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementerComponent } from './incrementer.component';

describe('IncrementerComponent', () => {
  let component: IncrementerComponent;
  let fixture: ComponentFixture<IncrementerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Increment');
  });

  it('should display counter set to zero by default', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.count').textContent).toBe('0');
  });

  it('should set counter to one after increment', () => {
    component.incrementCounter();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.count').textContent).toBe('1');
  });

});
