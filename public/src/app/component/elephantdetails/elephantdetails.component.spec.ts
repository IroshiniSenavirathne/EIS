import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantdetailsComponent } from './elephantdetails.component';

describe('ElephantdetailsComponent', () => {
  let component: ElephantdetailsComponent;
  let fixture: ComponentFixture<ElephantdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
