#Co

Install Node.js and then:

```sh
$ git clone https://github.com/freemountain/CoObject
$ cd CoObject
$ sudo npm -g install grunt-cli buster
$ npm install
```

```
$ grunt build
```

danach test.html öffnen. die Klassen sind dann unter window.Co erreichbar.

Testen:

- `$ buster-server &`
- mit browser angegebene url öffnen, capture klicken
- `$ buster-test`

Klasse hinzufügen:

- Datei unter src/co anlegen
- in der Datei die Basisklasse importieren
- Klasse exportieren
- (sollte automatisiert werden) src/co.js öffnen
- (sollte automatisiert werden)angelegte Datei importieren
- (sollte automatisiert werden)Klasse exportieren

Alles was in src/co.js exportiert wird, ist das "public Interface" von Co
