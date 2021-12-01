import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeokoFeedsAndSpeedsComponent } from './shapeoko-feeds-and-speeds.component';

describe('ShapeokoFeedsAndSpeedsComponent', () => {
  let component: ShapeokoFeedsAndSpeedsComponent;
  let fixture: ComponentFixture<ShapeokoFeedsAndSpeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeokoFeedsAndSpeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeokoFeedsAndSpeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
