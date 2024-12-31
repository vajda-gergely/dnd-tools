import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureCreatorComponent } from './adventure-creator.component';

describe('AdventureCreatorComponent', () => {
  let component: AdventureCreatorComponent;
  let fixture: ComponentFixture<AdventureCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
