import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouvelleFichePage } from './nouvelle-fiche.page';

describe('NouvelleFichePage', () => {
  let component: NouvelleFichePage;
  let fixture: ComponentFixture<NouvelleFichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleFichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouvelleFichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
