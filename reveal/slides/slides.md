## Warum Testen

* Besseres Design <!-- .element: class="fragment" data-fragment-index="1" -->
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

Oftmals muss vor der Ausführung von Tests ein Setup durchgeführt werden, dass für alle Specs gelten soll: 
z.B. müssen Objekte die später verwendet werden soll initialisiert werden o.ä..

Oder nachdem die Tests durchgeführt wurden sollen bestimmte Operationen durchgeführt werden z.b. Dateien die 
während einem Test erzeugt wurden gelöscht werdne o.ä.


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

### Running Jasmine Test




