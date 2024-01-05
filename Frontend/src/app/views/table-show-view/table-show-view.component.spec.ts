import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowViewComponent } from './table-show-view.component';

describe('TableShowViewComponent', () => {
  let component: TableShowViewComponent;
  let fixture: ComponentFixture<TableShowViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableShowViewComponent]
    });
    fixture = TestBed.createComponent(TableShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
