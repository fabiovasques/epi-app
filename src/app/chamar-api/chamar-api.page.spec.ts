import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChamarApiPage } from './chamar-api.page';

describe('ChamarApiPage', () => {
  let component: ChamarApiPage;
  let fixture: ComponentFixture<ChamarApiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamarApiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChamarApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
