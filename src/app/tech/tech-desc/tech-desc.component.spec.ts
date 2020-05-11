import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDescComponent } from './tech-desc.component';

describe('TechDescComponent', () => {
  let component: TechDescComponent;
  let fixture: ComponentFixture<TechDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
