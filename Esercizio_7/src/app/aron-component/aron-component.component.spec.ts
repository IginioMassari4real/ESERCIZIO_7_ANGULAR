import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AronComponentComponent } from './aron-component.component';

describe('AronComponentComponent', () => {
  let component: AronComponentComponent;
  let fixture: ComponentFixture<AronComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AronComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AronComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
