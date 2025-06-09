import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisearchComponent } from './emojisearch.component';

describe('EmojisearchComponent', () => {
  let component: EmojisearchComponent;
  let fixture: ComponentFixture<EmojisearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojisearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
