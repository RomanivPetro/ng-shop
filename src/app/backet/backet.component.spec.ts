import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacketComponent } from './backet.component';

describe('BacketComponent', () => {
  let component: BacketComponent;
  let fixture: ComponentFixture<BacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
