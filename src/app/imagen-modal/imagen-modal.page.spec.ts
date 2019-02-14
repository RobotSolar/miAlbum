import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenModalPage } from './imagen-modal.page';

describe('ImagenModalPage', () => {
  let component: ImagenModalPage;
  let fixture: ComponentFixture<ImagenModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
