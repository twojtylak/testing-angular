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

