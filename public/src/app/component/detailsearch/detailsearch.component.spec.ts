import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsearchComponent } from './detailsearch.component';

describe('DetailsearchComponent', () => {
  let component: DetailsearchComponent;
  let fixture: ComponentFixture<DetailsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
