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
`pug` => **67ms** <br/> 
`eta` => **368ms** <br/> 
`igodust-sync` => **369ms** <br/> 
`igodust` => **376ms** <br/> 
`handlebars` => **452ms** <br/> 
`ejs` => **496ms** <br/> 
`nunjucks` => **1549ms** <br/> 
`mustache` => **2778ms** <br/> 
`hogan` => **2838ms** <br/> 
`twig` => **5069ms** <br/> 
`liquidjs` => **11510ms** <br/> 

### if-expression (run 2000 times) 
`pug` => **1ms** <br/> 
`igodust-sync` => **6ms** <br/> 
`nunjucks` => **11ms** <br/> 
`igodust` => **16ms** <br/> 
`eta` => **45ms** <br/> 
`twig` => **59ms** <br/> 
`ejs` => **68ms** <br/> 
`liquidjs` => **269ms** <br/> 

### projects-escaped (run 2000 times) 
`handlebars` => **23ms** <br/> 
`hogan` => **25ms** <br/> 
`igodust-sync` => **25ms** <br/> 
`mustache` => **28ms** <br/> 
`igodust` => **30ms** <br/> 
`nunjucks` => **31ms** <br/> 
`eta` => **55ms** <br/> 
`twig` => **55ms** <br/> 
`pug` => **76ms** <br/> 
`ejs` => **102ms** <br/> 
`liquidjs` => **269ms** <br/> 

### projects-unescaped (run 2000 times) 
`hogan` => **7ms** <br/> 
`igodust-sync` => **7ms** <br/> 
`igodust` => **8ms** <br/> 
`mustache` => **15ms** <br/> 
`handlebars` => **20ms** <br/> 
`nunjucks` => **22ms** <br/> 
`eta` => **53ms** <br/> 
`twig` => **60ms** <br/> 
`pug` => **74ms** <br/> 
`ejs` => **105ms** <br/> 
`liquidjs` => **257ms** <br/> 

### search-results (run 2000 times) 
`igodust-sync` => **13ms** <br/> 
`igodust` => **16ms** <br/> 
`pug` => **28ms** <br/> 
`handlebars` => **76ms** <br/> 
`eta` => **95ms** <br/> 
`nunjucks` => **217ms** <br/> 
`hogan` => **267ms** <br/> 
`mustache` => **282ms** <br/> 
`ejs` => **355ms** <br/> 
`twig` => **694ms** <br/> 
`liquidjs` => **1332ms** <br/> 

### simple-0 (run 2000 times) 
`hogan` => **0ms** <br/> 
`pug` => **0ms** <br/> 
`handlebars` => **1ms** <br/> 
`mustache` => **1ms** <br/> 
`nunjucks` => **1ms** <br/> 
`twig` => **1ms** <br/> 
`igodust-sync` => **2ms** <br/> 
`igodust` => **4ms** <br/> 
`ejs` => **21ms** <br/> 
`eta` => **21ms** <br/> 
`liquidjs` => **43ms** <br/> 

### simple-1 (run 2000 times) 
`pug` => **4ms** <br/> 
`handlebars` => **8ms** <br/> 
`igodust-sync` => **8ms** <br/> 
`igodust` => **10ms** <br/> 
`nunjucks` => **24ms** <br/> 
`eta` => **42ms** <br/> 
`hogan` => **51ms** <br/> 
`mustache` => **59ms** <br/> 
`twig` => **60ms** <br/> 
`ejs` => **90ms** <br/> 
`liquidjs` => **249ms** <br/> 

### simple-2 (run 2000 times) 
`pug` => **3ms** <br/> 
`handlebars` => **6ms** <br/> 
`hogan` => **6ms** <br/> 
`igodust-sync` => **6ms** <br/> 
`igodust` => **7ms** <br/> 
`mustache` => **8ms** <br/> 
`nunjucks` => **23ms** <br/> 
`eta` => **43ms** <br/> 
`twig` => **56ms** <br/> 
`ejs` => **83ms** <br/> 
`liquidjs` => **216ms** <br/> 

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
