# Templating Engine Benchmark

This project is a benchmark designed to evaluate the performance of various JavaScript template engines. It allows developers to compare rendering performance of several popular template engines in various scenarios.

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

**4. Results:<br/>**
Once the benchmark is completed, the results will be automatically updated in the readme file.

## Current results

The tests were carried out on:
- Node v20.12.0
- MacBook Pro M1, 13-inch with 16GB of RAM (2020)

<!-- <render performance> -->
## RENDER 

### friends (run 2000 times) 
`pug` => **70ms** <br/> 
`igodust` => **380ms** <br/> 
`eta` => **388ms** <br/> 
`ejs` => **533ms** <br/> 
`handlebars` => **563ms** <br/> 
`nunjucks` => **1602ms** <br/> 
`mustache` => **2766ms** <br/> 
`hogan` => **3012ms** <br/> 
`twig` => **5076ms** <br/> 
`liquidjs` => **11789ms** <br/> 

### if-expression (run 2000 times) 
`pug` => **1ms** <br/> 
`nunjucks` => **12ms** <br/> 
`igodust` => **17ms** <br/> 
`eta` => **45ms** <br/> 
`twig` => **61ms** <br/> 
`ejs` => **69ms** <br/> 
`liquidjs` => **274ms** <br/> 

### projects-escaped (run 2000 times) 
`handlebars` => **24ms** <br/> 
`hogan` => **26ms** <br/> 
`igodust` => **30ms** <br/> 
`mustache` => **30ms** <br/> 
`nunjucks` => **31ms** <br/> 
`eta` => **57ms** <br/> 
`twig` => **58ms** <br/> 
`pug` => **76ms** <br/> 
`ejs` => **102ms** <br/> 
`liquidjs` => **286ms** <br/> 

### projects-unescaped (run 2000 times) 
`hogan` => **8ms** <br/> 
`igodust` => **8ms** <br/> 
`mustache` => **15ms** <br/> 
`nunjucks` => **21ms** <br/> 
`handlebars` => **22ms** <br/> 
`eta` => **57ms** <br/> 
`twig` => **63ms** <br/> 
`pug` => **77ms** <br/> 
`ejs` => **113ms** <br/> 
`liquidjs` => **285ms** <br/> 

### search-results (run 2000 times) 
`igodust` => **24ms** <br/> 
`pug` => **31ms** <br/> 
`handlebars` => **75ms** <br/> 
`eta` => **97ms** <br/> 
`nunjucks` => **266ms** <br/> 
`hogan` => **280ms** <br/> 
`mustache` => **296ms** <br/> 
`ejs` => **367ms** <br/> 
`twig` => **697ms** <br/> 
`liquidjs` => **1413ms** <br/> 

### simple-0 (run 2000 times) 
`hogan` => **0ms** <br/> 
`pug` => **0ms** <br/> 
`mustache` => **1ms** <br/> 
`nunjucks` => **1ms** <br/> 
`handlebars` => **2ms** <br/> 
`twig` => **2ms** <br/> 
`igodust` => **4ms** <br/> 
`ejs` => **21ms** <br/> 
`eta` => **21ms** <br/> 
`liquidjs` => **42ms** <br/> 

### simple-1 (run 2000 times) 
`pug` => **4ms** <br/> 
`handlebars` => **9ms** <br/> 
`igodust` => **10ms** <br/> 
`nunjucks` => **24ms** <br/> 
`eta` => **43ms** <br/> 
`hogan` => **58ms** <br/> 
`mustache` => **62ms** <br/> 
`twig` => **66ms** <br/> 
`ejs` => **92ms** <br/> 
`liquidjs` => **279ms** <br/> 

### simple-2 (run 2000 times) 
`pug` => **3ms** <br/> 
`handlebars` => **7ms** <br/> 
`hogan` => **7ms** <br/> 
`igodust` => **7ms** <br/> 
`mustache` => **9ms** <br/> 
`nunjucks` => **25ms** <br/> 
`eta` => **44ms** <br/> 
`twig` => **57ms** <br/> 
`ejs` => **82ms** <br/> 
`liquidjs` => **232ms** <br/> 

<!-- <end> -->

## Adding a new Template Engine

To add a new template engine to this project, follow these simple steps:

**1. Create a file for the template engine:<br/>**
In the `engines` directory, create a new file named after your template engine, for example `my-engine.js`. Take a look at the files already created for the syntax.

```
engines
 ├── igodust.js
 ├── my-engine.js
 └── ...
```
**⚠️ WARNING: Asynchronous rendering methods, such as those returning Promises, are not supported by the benchmarking tool at the moment. Ensure that your rendering method is synchronous to work with the benchmarking tool effectively. ⚠️**

**2. Add test templates: <br/>**
Place your template files in the templates directory, following the existing structure. Each test group should have a data file (.js or .json) and template files for each template engine you want to include in the benchmark.

```
templates
 ├── group1
 │   ├── data.js (or json)
 │   ├── template.dust
 │   ├── template.my-engine
 │   └── ...
 └── ...
```

 And that's it, all you have to do is launch the benchmark!
