import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaComponent } from './nava.component';

describe('NavaComponent', () => {
  let component: NavaComponent;
  let fixture: ComponentFixture<NavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
