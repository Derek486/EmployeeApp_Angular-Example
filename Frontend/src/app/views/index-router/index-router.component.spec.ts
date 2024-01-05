import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRouterComponent } from './index-router.component';

describe('IndexRouterComponent', () => {
  let component: IndexRouterComponent;
  let fixture: ComponentFixture<IndexRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexRouterComponent]
    });
    fixture = TestBed.createComponent(IndexRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
