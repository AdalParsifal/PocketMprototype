import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaNacionalPage } from './galeria-nacional.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonTitle, IonicModule } from '@ionic/angular'; // Importa IonTitle e IonicModule de Ionic

describe('GaleriaNacionalPage', () => {
  let component: GaleriaNacionalPage;
  let fixture: ComponentFixture<GaleriaNacionalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaleriaNacionalPage],
      imports: [HttpClientTestingModule, IonicModule.forRoot()], // Agrega IonicModule.forRoot() aquí si es necesario
      providers: [], // No es necesario el proveedor de IpGeolocationService para esta prueba
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaNacionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const compiled = fixture.nativeElement;
    const ionTitle = compiled.querySelector('ion-title');
    expect(ionTitle.textContent).toContain('Galeria Nacional');
  });

  // Puedes añadir más pruebas según sea necesario

  afterEach(() => {
    // Limpia después de cada prueba si es necesario
  });

  afterAll(() => {
    // Limpia después de todas las pruebas si es necesario
  });
});
