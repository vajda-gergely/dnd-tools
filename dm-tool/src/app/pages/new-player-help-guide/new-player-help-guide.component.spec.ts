import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayerHelpGuideComponent } from './new-player-help-guide.component';

describe('NewPlayerHelpGuideComponent', () => {
  let component: NewPlayerHelpGuideComponent;
  let fixture: ComponentFixture<NewPlayerHelpGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPlayerHelpGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPlayerHelpGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
