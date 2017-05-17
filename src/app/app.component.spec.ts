import { TestBed, async } from '@angular/core/testing';

import {LOCALE_ID} from '@angular/core';
import {CapitalizarPipe} from './pipes/capitalizar.pipe';
import {DomseguroPipe} from './pipes/domSeguro.pipe';
import {ContraseniaPipe} from './pipes/contrasenia.pipe';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CapitalizarPipe,
        DomseguroPipe,
        ContraseniaPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`debe tener la propiedad nombre 'Juan Carlos'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.nombre).toEqual('Juan Carlos');
  }));

it('Debe renderizar la tabla de pipes con id #tablaPipes', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#tablaPipes')).toBeDefined();
    //expect(compiled.querySelector('#tablaPipes').textContent).toContain('app works!');
  }))
});
