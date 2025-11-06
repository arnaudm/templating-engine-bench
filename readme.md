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

### friends (runned 2000 times) 
`igodust` => **26ms** <br/> 
`pug` => **102ms** <br/> 
`ejs` => **559ms** <br/> 
`handlebars` => **704ms** <br/> 
`eta` => **786ms** <br/> 
`liquidjs` => **13649ms** <br/> 

### if-expression (runned 2000 times) 
`pug` => **16ms** <br/> 
`igodust` => **26ms** <br/> 
`ejs` => **72ms** <br/> 
`liquidjs` => **102ms** <br/> 
`eta` => **317ms** <br/> 

### projects-escaped (runned 2000 times) 
`igodust` => **24ms** <br/> 
`handlebars` => **37ms** <br/> 
`pug` => **88ms** <br/> 
`ejs` => **117ms** <br/> 
`liquidjs` => **151ms** <br/> 
`eta` => **344ms** <br/> 

### projects-unescaped (runned 2000 times) 
`igodust` => **25ms** <br/> 
`handlebars` => **33ms** <br/> 
`pug` => **86ms** <br/> 
`ejs` => **113ms** <br/> 
`liquidjs` => **145ms** <br/> 
`eta` => **329ms** <br/> 

### search-results (runned 2000 times) 
`igodust` => **21ms** <br/> 
`pug` => **43ms** <br/> 
`handlebars` => **124ms** <br/> 
`eta` => **363ms** <br/> 
`ejs` => **406ms** <br/> 
`liquidjs` => **1297ms** <br/> 

### simple-0 (runned 2000 times) 
`pug` => **2ms** <br/> 
`handlebars` => **7ms** <br/> 
`ejs` => **22ms** <br/> 
`liquidjs` => **24ms** <br/> 
`igodust` => **25ms** <br/> 
`eta` => **272ms** <br/> 

### simple-1 (runned 2000 times) 
`pug` => **14ms** <br/> 
`handlebars` => **19ms** <br/> 
`igodust` => **29ms** <br/> 
`ejs` => **98ms** <br/> 
`liquidjs` => **128ms** <br/> 
`eta` => **326ms** <br/> 

### simple-2 (runned 2000 times) 
`pug` => **9ms** <br/> 
`handlebars` => **14ms** <br/> 
`igodust` => **24ms** <br/> 
`ejs` => **89ms** <br/> 
`liquidjs` => **105ms** <br/> 
`eta` => **322ms** <br/> 

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
