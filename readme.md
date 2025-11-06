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
`igodust` => **27ms** <br/> 
`pug` => **108ms** <br/> 
`ejs` => **578ms** <br/> 
`handlebars` => **742ms** <br/> 
`eta` => **786ms** <br/> 
`dustjs` => **1132ms** <br/> 
`liquidjs` => **14530ms** <br/> 

### if-expression (runned 2000 times) 
`pug` => **12ms** <br/> 
`dustjs` => **13ms** <br/> 
`igodust` => **27ms** <br/> 
`ejs` => **74ms** <br/> 
`liquidjs` => **103ms** <br/> 
`eta` => **336ms** <br/> 

### projects-escaped (runned 2000 times) 
`igodust` => **24ms** <br/> 
`handlebars` => **40ms** <br/> 
`dustjs` => **41ms** <br/> 
`pug` => **89ms** <br/> 
`ejs` => **116ms** <br/> 
`liquidjs` => **158ms** <br/> 
`eta` => **326ms** <br/> 

### projects-unescaped (runned 2000 times) 
`dustjs` => **17ms** <br/> 
`igodust` => **25ms** <br/> 
`handlebars` => **37ms** <br/> 
`pug` => **80ms** <br/> 
`ejs` => **114ms** <br/> 
`liquidjs` => **147ms** <br/> 
`eta` => **317ms** <br/> 

### search-results (runned 2000 times) 
`igodust` => **24ms** <br/> 
`pug` => **44ms** <br/> 
`dustjs` => **103ms** <br/> 
`handlebars` => **139ms** <br/> 
`ejs` => **397ms** <br/> 
`eta` => **402ms** <br/> 
`liquidjs` => **1367ms** <br/> 

### simple-0 (runned 2000 times) 
`dustjs` => **2ms** <br/> 
`pug` => **2ms** <br/> 
`handlebars` => **8ms** <br/> 
`igodust` => **21ms** <br/> 
`ejs` => **24ms** <br/> 
`liquidjs` => **27ms** <br/> 
`eta` => **302ms** <br/> 

### simple-1 (runned 2000 times) 
`pug` => **9ms** <br/> 
`dustjs` => **13ms** <br/> 
`handlebars` => **23ms** <br/> 
`igodust` => **31ms** <br/> 
`ejs` => **101ms** <br/> 
`liquidjs` => **114ms** <br/> 
`eta` => **343ms** <br/> 

### simple-2 (runned 2000 times) 
`pug` => **7ms** <br/> 
`dustjs` => **11ms** <br/> 
`handlebars` => **17ms** <br/> 
`igodust` => **29ms** <br/> 
`ejs` => **93ms** <br/> 
`liquidjs` => **115ms** <br/> 
`eta` => **329ms** <br/> 

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
