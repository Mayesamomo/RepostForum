import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotebuttonComponent } from './votebutton.component';

describe('VotebuttonComponent', () => {
  let component: VotebuttonComponent;
  let fixture: ComponentFixture<VotebuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotebuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
