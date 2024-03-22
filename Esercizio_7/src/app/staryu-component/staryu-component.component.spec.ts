import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaryuComponentComponent } from './staryu-component.component';

describe('StaryuComponentComponent', () => {
  let component: StaryuComponentComponent;
  let fixture: ComponentFixture<StaryuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaryuComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaryuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
