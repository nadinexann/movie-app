import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailPageComponent } from './people-detail-page.component';

describe('PeopleDetailPageComponent', () => {
  let component: PeopleDetailPageComponent;
  let fixture: ComponentFixture<PeopleDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleDetailPageComponent]
    });
    fixture = TestBed.createComponent(PeopleDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
