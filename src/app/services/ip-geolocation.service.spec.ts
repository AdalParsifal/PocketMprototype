import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IpGeolocationService } from './ip-geolocation.service';

describe('IpGeolocationService', () => {
  let service: IpGeolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientModule aquí si es necesario
      providers: [IpGeolocationService],   // Asegúrate de proporcionar tu servicio aquí si no está en tu módulo
    });
    service = TestBed.inject(IpGeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Puedes añadir más pruebas según sea necesario

  afterEach(() => {
    // Limpia después de cada prueba si es necesario
  });

  afterAll(() => {
    // Limpia después de todas las pruebas si es necesario
  });
});