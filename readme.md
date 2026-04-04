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

### friends (run 5000 times) 
`pug` => **148ms** <br/> 
`eta` => **775ms** <br/> 
`igodust` => **815ms** <br/> 
`handlebars` => **1055ms** <br/> 
`ejs` => **1099ms** <br/> 
`nunjucks` => **3454ms** <br/> 
`mustache` => **5895ms** <br/> 
`hogan` => **6709ms** <br/> 
`twig` => **11258ms** <br/> 
`liquidjs` => **25342ms** <br/> 

### if-expression (run 5000 times) 
`pug` => **2ms** <br/> 
`nunjucks` => **20ms** <br/> 
`igodust` => **28ms** <br/> 
`eta` => **82ms** <br/> 
`twig` => **119ms** <br/> 
`ejs` => **140ms** <br/> 
`liquidjs` => **563ms** <br/> 

### projects-escaped (run 5000 times) 
`handlebars` => **45ms** <br/> 
`hogan` => **50ms** <br/> 
`igodust` => **53ms** <br/> 
`mustache` => **58ms** <br/> 
`nunjucks` => **64ms** <br/> 
`twig` => **114ms** <br/> 
`eta` => **116ms** <br/> 
`pug` => **169ms** <br/> 
`ejs` => **222ms** <br/> 
`liquidjs` => **579ms** <br/> 

### projects-unescaped (run 5000 times) 
`hogan` => **12ms** <br/> 
`igodust` => **15ms** <br/> 
`mustache` => **33ms** <br/> 
`nunjucks` => **40ms** <br/> 
`handlebars` => **42ms** <br/> 
`eta` => **114ms** <br/> 
`twig` => **132ms** <br/> 
`pug` => **177ms** <br/> 
`ejs` => **228ms** <br/> 
`liquidjs` => **591ms** <br/> 

### search-results (run 5000 times) 
`igodust` => **25ms** <br/> 
`pug` => **53ms** <br/> 
`handlebars` => **161ms** <br/> 
`eta` => **203ms** <br/> 
`nunjucks` => **468ms** <br/> 
`hogan` => **589ms** <br/> 
`mustache` => **635ms** <br/> 
`ejs` => **793ms** <br/> 
`twig` => **1511ms** <br/> 
`liquidjs` => **3057ms** <br/> 

### simple-0 (run 5000 times) 
`hogan` => **1ms** <br/> 
`pug` => **1ms** <br/> 
`mustache` => **2ms** <br/> 
`nunjucks` => **3ms** <br/> 
`handlebars` => **4ms** <br/> 
`twig` => **4ms** <br/> 
`igodust` => **8ms** <br/> 
`ejs` => **45ms** <br/> 
`eta` => **47ms** <br/> 
`liquidjs` => **91ms** <br/> 

### simple-1 (run 5000 times) 
`pug` => **7ms** <br/> 
`handlebars` => **18ms** <br/> 
`igodust` => **19ms** <br/> 
`nunjucks` => **47ms** <br/> 
`eta` => **90ms** <br/> 
`hogan` => **115ms** <br/> 
`mustache` => **128ms** <br/> 
`twig` => **131ms** <br/> 
`ejs` => **200ms** <br/> 
`liquidjs` => **550ms** <br/> 

### simple-2 (run 5000 times) 
`pug` => **5ms** <br/> 
`handlebars` => **13ms** <br/> 
`hogan` => **14ms** <br/> 
`igodust` => **17ms** <br/> 
`mustache` => **18ms** <br/> 
`nunjucks` => **44ms** <br/> 
`eta` => **90ms** <br/> 
`twig` => **115ms** <br/> 
`ejs` => **174ms** <br/> 
`liquidjs` => **480ms** <br/> 

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
