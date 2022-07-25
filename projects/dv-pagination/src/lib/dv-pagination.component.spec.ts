import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvPaginationComponent } from './dv-pagination.component';

describe('DvPaginationComponent', () => {
  let component: DvPaginationComponent;
  let fixture: ComponentFixture<DvPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
