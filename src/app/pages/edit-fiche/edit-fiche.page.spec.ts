import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFichePage } from './edit-fiche.page';

describe('EditFichePage', () => {
  let component: EditFichePage;
  let fixture: ComponentFixture<EditFichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
