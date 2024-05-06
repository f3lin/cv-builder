import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalExperiencesComponent } from './technical-experiences.component';

describe('TechnicalExperiencesComponent', () => {
  let component: TechnicalExperiencesComponent;
  let fixture: ComponentFixture<TechnicalExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalExperiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
