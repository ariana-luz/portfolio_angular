import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerExpComponent } from './traer-exp.component';

describe('TraerExpComponent', () => {
  let component: TraerExpComponent;
  let fixture: ComponentFixture<TraerExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraerExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraerExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
