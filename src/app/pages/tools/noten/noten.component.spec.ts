import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NotenComponent} from './noten.component';

describe('NotenComponent', () => {
  let component: NotenComponent;
  let fixture: ComponentFixture<NotenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotenComponent]
    });
    fixture = TestBed.createComponent(NotenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
