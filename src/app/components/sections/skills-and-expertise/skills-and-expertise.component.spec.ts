import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndExpertiseComponent } from './skills-and-expertise.component';

describe('SkillsAndExpertiseComponent', () => {
  let component: SkillsAndExpertiseComponent;
  let fixture: ComponentFixture<SkillsAndExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsAndExpertiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsAndExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
