import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevendayForecastComponent } from './sevenday-forecast.component';

describe('SevendayForecastComponent', () => {
  let component: SevendayForecastComponent;
  let fixture: ComponentFixture<SevendayForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevendayForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevendayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
