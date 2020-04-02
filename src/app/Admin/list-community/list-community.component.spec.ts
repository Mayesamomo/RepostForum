import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommunityComponent } from './list-community.component';

describe('ListCommunityComponent', () => {
  let component: ListCommunityComponent;
  let fixture: ComponentFixture<ListCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
