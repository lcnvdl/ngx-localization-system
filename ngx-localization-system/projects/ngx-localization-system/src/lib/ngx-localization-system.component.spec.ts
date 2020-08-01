import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLocalizationSystemComponent } from './ngx-localization-system.component';

describe('NgxLocalizationSystemComponent', () => {
  let component: NgxLocalizationSystemComponent;
  let fixture: ComponentFixture<NgxLocalizationSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLocalizationSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLocalizationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
