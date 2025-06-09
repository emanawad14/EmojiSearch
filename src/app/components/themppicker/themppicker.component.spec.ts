import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemppickerComponent } from './themppicker.component';

describe('ThemppickerComponent', () => {
  let component: ThemppickerComponent;
  let fixture: ComponentFixture<ThemppickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemppickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemppickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
