import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationAvrilComponent } from './situation-avril.component';

describe('SituationAvrilComponent', () => {
  let component: SituationAvrilComponent;
  let fixture: ComponentFixture<SituationAvrilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationAvrilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationAvrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
