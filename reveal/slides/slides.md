## Warum Testen

* Ggf. Besseres Design durch kleinere Codeeinheiten <!-- .element: class="fragment" data-fragment-index="1" -->
* Einfacheres Refactoring <!-- .element: class="fragment" data-fragment-index="2" -->
* Neue Features/Updates können einfacher hinzugefügt werden ohne etwas kaputt zu machen <!-- .element: class="fragment" data-fragment-index="3" -->
* Dokumentation des Codes <!-- .element: class="fragment" data-fragment-index="4" -->

---

## Angular
<img src="../img/angular.svg" width="100">

* TypeScript-basiertes Front-End-Webapplikationsframework <!-- .element: class="fragment" data-fragment-index="1" -->

---

## Jasmine
<img src="../img/jasmine.svg" width="100">

* JavaScript Testing Framework für BDD <!-- .element: class="fragment" data-fragment-index="1" -->
* Tests werden in einer menschenlesbaren Sprache definiert <!-- .element: class="fragment" data-fragment-index="2" -->

---

### Beispiel

---

````javascript
function helloWorld() {
  return 'Hello world!';
}

````

````javascript
describe('Hello world', () => { (1)
  it('says hello', () => { (2)
    expect(helloWorld()) (3)
        .toEqual('Hello world!'); (4)
  });
});

````
* (1) Test Suite, eine Sammlung einzelner Test Specs. <!-- .element: class="fragment small" data-fragment-index="1" -->
* (2) Test Spec, besteht aus einer oder mehrere Test Expectations. <!-- .element: class="fragment small" data-fragment-index="2" -->
* (3) Expectation: Beschreibt in Kombination mit einem Matcher des erwartete Verhalten. <!-- .element: class="fragment small" data-fragment-index="3" -->
* (4) Matcher: Vergleicht das tatsächliche mit dem erwarteten Rückgabewert. <!-- .element: class="fragment small" data-fragment-index="4" -->

---

### BuiltIn - Matchers


````javascript
    expect(array).toContain(member);
    expect(fn).toThrow(string);
    expect(fn).toThrowError(string);
    expect(instance).toBe(instance);
    expect(mixed).toBeDefined();
    expect(mixed).toBeFalsy();
    expect(mixed).toBeNull();
    expect(mixed).toBeTruthy();
    expect(mixed).toBeUndefined();
    expect(mixed).toEqual(mixed);
    expect(mixed).toMatch(pattern);
    expect(number).toBeCloseTo(number, decimalPlaces);
    expect(number).toBeGreaterThan(number);
    expect(number).toBeLessThan(number);
    expect(number).toBeNaN();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(number);
    expect(spy).toHaveBeenCalledWith(...arguments);
````

---

### Setup und Teardown

* Ofmals spezfisiches Setup vor allen Specs einer Suite z.B. Objekte initialisert <!-- .element: class="fragment" data-fragment-index="1" -->
* Oder Aufräumarbeiten o.ä nach Tests z.B. im Test generierte Dateien von Festplatte Löschen o.ä. <!-- .element: class="fragment" data-fragment-index="2" -->

---


Diese Aktivitäten werden `setup` and `teardown` genannt

* <!-- .element: class="fragment" data-fragment-index="1" --> `beforeAll` wird einmal vor Ausführung **aller** Specs bzw. der Suite ausgeführt
* <!-- .element: class="fragment" data-fragment-index="2" --> `afterAll` wird **einmal** nach Ausführung aller Specs bzw. der Suite ausgeführt
* <!-- .element: class="fragment" data-fragment-index="3" --> `beforeEach` wird vor **jedem Spec** ausgeführt
* <!-- .element: class="fragment" data-fragment-index="4" --> `afterEach` wird nach **jedem Spec**  ausgeführt

---

````javascript
describe('Hello world', () => {

  let expected = "";

  beforeEach(() => {
    expected = "Hello World";
  });

  afterEach(() => {
    expected = "";
  });

  it('says hello', () => {
    expect(helloWorld())
        .toEqual(expected);
  });
  
  it('says hello once again', () => {
      expect(helloWorld())
          .toEqual(expected);
    });
});

````

---

### Running Jasmine Tests

1-jasmine-example


---

## Karma
<img src="../img/karma.svg" width="100">

* JavaScript Test Runner <!-- .element: class="fragment" data-fragment-index="1" -->
* Öffnet Browser* und führt Tests innerhalb von diesem aus <!-- .element: class="fragment" data-fragment-index="2" -->
* <!-- .element: class="fragment" data-fragment-index="3" -->Bereitet Ergebnisse CL-_freundlich_ auf  
* <!-- .element: class="fragment" data-fragment-index="4" -->Kann innerhalb CI Prozess genutzt werden

 <!-- .element: class="fragment small" data-fragment-index="5" -->*Statt einem tatsächlichen Browser kann auch PhantomJS (Headless Browser) verwendet werdne

---


### Testen in Angular


<img src="../img/angular.svg" width="100"><!-- .element: class="fragment" data-fragment-index="1" -->
<img src="../img/heart.svg" width="100"><!-- .element: class="fragment" data-fragment-index="2" -->
<img src="../img/jasmine.svg" width="100"><!-- .element: class="fragment" data-fragment-index="3" -->
<img src="../img/karma.svg" width="100"><!-- .element: class="fragment" data-fragment-index="4" -->


* <!-- .element: class="fragment" data-fragment-index="5" -->Seit AngularJS bereits fest ins Framework integriert
* <!-- .element: class="fragment" data-fragment-index="6" -->Specs werden automatisch beim Erstellen von Codeeinheiten via Angular CLI erstellt

---

### Komponenten in Angular

>Components are the most basic building block of an UI in an Angular application. 
An Angular application is a tree of Angular components. 
[...]components always have a template and only one component can be instantiated per an element in a template.


---

````typescript
@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent {}

````

* <!-- .element: class="fragment" data-fragment-index="1" -->Wird via `@Component` Decorator definiert
* <!-- .element: class="fragment" data-fragment-index="2" -->Hat einen Selector
* <!-- .element: class="fragment" data-fragment-index="3" -->Hat ein verknüpftes Template
* <!-- .element: class="fragment" data-fragment-index="3" -->Hat verknüpfte Styles


---

### Generierte Spec

````typescript
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementerComponent } from './incrementer.component';

describe('IncrementerComponent', () => {
  let component: IncrementerComponent;
  let fixture: ComponentFixture<IncrementerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

---

### Angular TestBed


* Angular spezifisches TestingFramework <!-- .element: class="fragment" data-fragment-index="1" -->
* Tests werden weiterhin in Jasmine geschrieben<!-- .element: class="fragment" data-fragment-index="2" -->
* Einfacheres Testen von der Erstellung von Komponenten, Handling von Depndendencies etc.<!-- .element: class="fragment" data-fragment-index="3" -->

---

````typescript

  beforeEach(async(() => { (1)
    TestBed.configureTestingModule({
      declarations: [ IncrementerComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementerComponent); (2)
    component = fixture.componentInstance; (3)
    fixture.detectChanges(); (4)
  });

````

* <!-- .element: class="fragment small" data-fragment-index="1" -->(1) Im `beforeEach` der TestSuite wird ein TestingModul mit Hilfe von `TestBed` konfiguriert
* <!-- .element: class="fragment small" data-fragment-index="2" -->(2) Via TestBed wird eine FixtureKomponente erstellt (Wrapper für Komponente und Template) 
* <!-- .element: class="fragment small" data-fragment-index="3" -->(3) Die eigentliche Komponente steckt in `fixture.componentInstance`
* <!-- .element: class="fragment small" data-fragment-index="4" -->(4) Interne ChangeDetection wird ausgeführt ≈ Template wird neu gerendert (Property Binding etc.)
