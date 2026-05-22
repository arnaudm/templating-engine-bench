# Templating Engine Benchmark

This project is a benchmark designed to evaluate the performance of various JavaScript template engines. It allows developers to compare rendering performance of several popular template engines in various scenarios.

## Current results

The tests were carried out on:
- Node v22.20.0
- MacBook Pro M3 Pro

<!-- <render performance> -->
## OVERALL SCORE

Engines tested: [`pug`](https://pugjs.org/), [`igodust`](https://igocreate.github.io/igo/dust/getting-started), [`squirrelly`](https://squirrelly.js.org/), [`handlebars`](https://handlebarsjs.com/), [`hogan`](https://twitter.github.io/hogan.js/), [`mustache`](https://github.com/janl/mustache.js), [`eta`](https://eta.js.org/), [`dustjs`](https://github.com/linkedin/dustjs), [`nunjucks`](https://mozilla.github.io/nunjucks/), [`ejs`](https://ejs.co/), [`twig`](https://github.com/twigjs/twig.js)

_geometric mean of (fastest / this engine) across all templates, on a 0–100 scale_

```
pug v3.0.4         ██████████████████████████████████             78/100
igodust v6.0.1     ████████████████████████████                   63/100
squirrelly v9.1.0  ███████████████████████████                    61/100
handlebars v4.7.9  ██████████████                                 32/100
hogan v3.0.2       ██████████████                                 31/100
mustache v4.2.0    ████████████                                   27/100
eta v3.5.0         ███████████                                    26/100
dustjs v3.0.1      ███████████                                    24/100
nunjucks v3.2.4    ███████                                        15/100
ejs v5.0.2         █████                                          12/100
twig v1.17.1       ███                                             6/100
```

## RENDER 

### friends (run 10000 times)

```
igodust     █                                               477ms
eta         ██                                              555ms
squirrelly  ██████                                          733ms
pug         ██████                                          736ms
handlebars  ███████████████                                1527ms
hogan       ██████████████████                             1976ms
dustjs      ████████████████████                           2241ms
mustache    █████████████████████                          2314ms
nunjucks    ██████████████████████████████                 4946ms
ejs         █████████████████████████████████              6029ms
twig        ████████████████████████████████████████████  14011ms
```

### if-expression (run 10000 times)

```
pug         █                                               4ms
igodust     ████████                                        8ms
squirrelly  ████████                                        8ms
dustjs      ████████████████████                           19ms
nunjucks    ██████████████████████                         22ms
ejs         ███████████████████████                        24ms
eta         █████████████████████████                      27ms
twig        ████████████████████████████████████████████  105ms
```

### projects-escaped (run 10000 times)

```
igodust     █                                              41ms
squirrelly  █                                              42ms
handlebars  ██████                                         50ms
eta         ████████████                                   62ms
mustache    ███████████████                                69ms
nunjucks    ████████████████                               70ms
hogan       █████████████████                              74ms
dustjs      ██████████████████████                         86ms
ejs         ██████████████████████████                    101ms
twig        ████████████████████████████████              122ms
pug         ████████████████████████████████████████████  184ms
```

### projects-unescaped (run 10000 times)

```
pug         █                                               5ms
squirrelly  ████                                            7ms
igodust     ██████                                          8ms
hogan       █████████████                                  14ms
handlebars  ███████████████                                17ms
mustache    ████████████████                               18ms
dustjs      █████████████████████                          25ms
eta         ██████████████████████                         28ms
nunjucks    ██████████████████████████                     38ms
ejs         ███████████████████████████                    40ms
twig        ████████████████████████████████████████████  137ms
```

### search-results (run 10000 times)

```
igodust     █                                               45ms
pug         █                                               49ms
squirrelly  ███                                             55ms
eta         █████                                           65ms
handlebars  ██████████████                                 134ms
hogan       ██████████████████                             179ms
dustjs      ███████████████████                            192ms
mustache    ████████████████████                           210ms
nunjucks    ███████████████████████████████                462ms
ejs         █████████████████████████████████              536ms
twig        ████████████████████████████████████████████  1262ms
```

### simple-0 (run 10000 times)

```
pug         █                                              2ms
squirrelly  █████████████████                              6ms
hogan       ███████████████████                            7ms
igodust     ███████████████████                            7ms
mustache    ████████████████████████                       9ms
dustjs      ██████████████████████████                    10ms
nunjucks    ██████████████████████████                    10ms
handlebars  ███████████████████████████                   11ms
ejs         ██████████████████████████████████            16ms
twig        ██████████████████████████████████            16ms
eta         ████████████████████████████████████████████  27ms
```

### simple-1 (run 10000 times)

```
pug         █                                               5ms
igodust     ████████                                        9ms
squirrelly  ████████                                        9ms
handlebars  ██████████████████                             19ms
hogan       ██████████████████                             19ms
mustache    ███████████████████                            20ms
dustjs      ████████████████████                           22ms
eta         ████████████████████████                       30ms
nunjucks    ████████████████████████████████               51ms
ejs         ██████████████████████████████████             59ms
twig        ████████████████████████████████████████████  114ms
```

### simple-2 (run 10000 times)

```
pug         █                                               5ms
squirrelly  ████████                                        9ms
igodust     █████████                                      10ms
handlebars  █████████████████                              17ms
hogan       █████████████████                              17ms
dustjs      ████████████████████                           21ms
mustache    ████████████████████                           21ms
eta         █████████████████████████                      29ms
nunjucks    ████████████████████████████████               48ms
ejs         ██████████████████████████████████             53ms
twig        ████████████████████████████████████████████  105ms
```

<!-- <end> -->

## How to use ?

**1. Clone this repo on your machine:**
```bash
git clone https://github.com/itsarnaud/templating-engine-bench.git
```

**2. Install dependencies:**
```bash
npm install
```

**3. Launch the benchmark by executing:**
```bash
node main.js
```

**4. Results:** once the benchmark is completed, the results above are automatically updated.
