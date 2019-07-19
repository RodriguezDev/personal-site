import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBorderComponent } from './app-border.component';

describe('AppBorderComponent', () => {
  let component: AppBorderComponent;
  let fixture: ComponentFixture<AppBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
