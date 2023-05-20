import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesFormComponent } from './imagenes-form.component';

describe('ImagenesFormComponent', () => {
  let component: ImagenesFormComponent;
  let fixture: ComponentFixture<ImagenesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
