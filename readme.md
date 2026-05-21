# Templating Engine Benchmark

This project is a benchmark designed to evaluate the performance of various JavaScript template engines. It allows developers to compare rendering performance of several popular template engines in various scenarios.

## Current results

The tests were carried out on:
- Node v22.20.0
- MacBook Pro M3 Pro

<!-- <render performance> -->
## OVERALL SCORE

Engines tested: [`pug`](https://pugjs.org/), [`igodust`](https://igocreate.github.io/igo/dust/getting-started), [`hogan`](https://twitter.github.io/hogan.js/), [`handlebars`](https://handlebarsjs.com/), [`eta`](https://eta.js.org/), [`dustjs`](https://github.com/linkedin/dustjs), [`mustache`](https://github.com/janl/mustache.js), [`nunjucks`](https://mozilla.github.io/nunjucks/), [`ejs`](https://ejs.co/), [`twig`](https://github.com/twigjs/twig.js), [`liquidjs`](https://liquidjs.com/)

_geometric mean of (fastest / this engine) across all templates, on a 0–100 scale_

```
pug         ██████████████████████████████████             77/100
igodust     ████████████████████████████                   64/100
hogan       ██████████████████                             40/100
handlebars  ████████████████                               37/100
eta         ███████████████                                33/100
dustjs      █████████████                                  29/100
mustache    █████████████                                  29/100
nunjucks    █████████                                      20/100
ejs         ████████                                       18/100
twig        ███                                             7/100
liquidjs    ██                                              4/100
```

## RENDER 

### friends (run 10000 times)

```
igodust     █                                               656ms
eta         █                                               737ms
pug         ████                                            973ms
handlebars  ███████████                                    1780ms
hogan       █████████████                                  2148ms
dustjs      ███████████████                                2429ms
mustache    ████████████████                               2632ms
nunjucks    ███████████████████████                        5027ms
ejs         █████████████████████████                      6030ms
twig        ████████████████████████████████████          15573ms
liquidjs    ████████████████████████████████████████████  31561ms
```

### if-expression (run 10000 times)

```
pug       █                                               5ms
igodust   █████████████                                  16ms
dustjs    █████████████████                              22ms
ejs       █████████████████                              22ms
nunjucks  █████████████████                              23ms
eta       ███████████████████                            26ms
twig      ██████████████████████████████████████        126ms
liquidjs  ████████████████████████████████████████████  204ms
```

### projects-escaped (run 10000 times)

```
igodust     █                                              45ms
handlebars  █████                                          55ms
eta         ████████                                       65ms
nunjucks    ███████████                                    73ms
mustache    █████████████                                  78ms
hogan       ██████████████                                 82ms
dustjs      ████████████████                               90ms
ejs         █████████████████                              93ms
twig        ███████████████████████████                   143ms
pug         █████████████████████████████████████         224ms
liquidjs    ████████████████████████████████████████████  300ms
```

### projects-unescaped (run 10000 times)

```
pug         █                                               6ms
igodust     ████                                            9ms
hogan       █████████                                      15ms
handlebars  █████████████                                  21ms
mustache    █████████████                                  22ms
eta         ███████████████                                26ms
dustjs      █████████████████                              30ms
ejs         ███████████████████                            38ms
nunjucks    ████████████████████                           41ms
twig        ████████████████████████████████████████      235ms
liquidjs    ████████████████████████████████████████████  338ms
```

### search-results (run 10000 times)

```
igodust     █                                               78ms
pug         █                                               83ms
eta         ███                                             97ms
handlebars  ██████████                                     180ms
hogan       ████████████                                   215ms
dustjs      █████████████                                  239ms
mustache    ███████████████                                273ms
nunjucks    ██████████████████████                         492ms
ejs         ████████████████████████                       558ms
twig        ███████████████████████████████████           1453ms
liquidjs    ████████████████████████████████████████████  2982ms
```

### simple-0 (run 10000 times)

```
pug         █                                              3ms
hogan       ████████████                                   7ms
igodust     ██████████████                                 8ms
dustjs      █████████████████                             10ms
nunjucks    █████████████████                             10ms
mustache    ███████████████████                           11ms
handlebars  ████████████████████                          12ms
ejs         ███████████████████████                       14ms
twig        ███████████████████████████                   18ms
eta         █████████████████████████████████             26ms
liquidjs    ████████████████████████████████████████████  50ms
```

### simple-1 (run 10000 times)

```
pug         █                                               8ms
igodust     █████                                          12ms
hogan       ███████████                                    19ms
dustjs      ██████████████                                 23ms
handlebars  ██████████████                                 24ms
eta         █████████████████                              29ms
mustache    █████████████████                              29ms
ejs         ████████████████████████                       49ms
nunjucks    █████████████████████████                      52ms
twig        █████████████████████████████████████         129ms
liquidjs    ████████████████████████████████████████████  211ms
```

### simple-2 (run 10000 times)

```
pug         █                                               6ms
igodust     ███████                                        11ms
hogan       ████████████                                   17ms
handlebars  ███████████████                                21ms
dustjs      ████████████████                               22ms
mustache    ██████████████████                             27ms
eta         ███████████████████                            29ms
nunjucks    ██████████████████████████                     48ms
ejs         ██████████████████████████                     51ms
twig        █████████████████████████████████████         115ms
liquidjs    ████████████████████████████████████████████  198ms
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
