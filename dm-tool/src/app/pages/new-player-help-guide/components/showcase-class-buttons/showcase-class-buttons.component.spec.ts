import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseClassButtonsComponent } from './showcase-class-buttons.component';

describe('ShowcaseClassButtonsComponent', () => {
  let component: ShowcaseClassButtonsComponent;
  let fixture: ComponentFixture<ShowcaseClassButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseClassButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseClassButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
