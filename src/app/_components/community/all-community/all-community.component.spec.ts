import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommunityComponent } from './all-community.component';

describe('AllCommunityComponent', () => {
  let component: AllCommunityComponent;
  let fixture: ComponentFixture<AllCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
