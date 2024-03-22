import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawkComponentComponent } from './sawk-component.component';

describe('SawkComponentComponent', () => {
  let component: SawkComponentComponent;
  let fixture: ComponentFixture<SawkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SawkComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SawkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
