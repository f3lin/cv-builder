import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDatePickerComponent } from './resume-date-picker.component';

describe('ResumeDatePickerComponent', () => {
  let component: ResumeDatePickerComponent;
  let fixture: ComponentFixture<ResumeDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeDatePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
