import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiverseCreatorComponent } from './multiverse-creator.component';

describe('MultiverseCreatorComponent', () => {
  let component: MultiverseCreatorComponent;
  let fixture: ComponentFixture<MultiverseCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiverseCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiverseCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
