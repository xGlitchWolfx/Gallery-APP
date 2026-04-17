/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  const photoServiceSpy = jasmine.createSpyObj<PhotoService>('PhotoService', ['loadSaved', 'addNewToGallery'], {
    photos: [],
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: PhotoService, useValue: photoServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
