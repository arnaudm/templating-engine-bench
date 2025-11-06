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

### friends (runned 5000 times) 
`pug` => **212ms** <br/> 
`igodust` => **1010ms** <br/> 
`handlebars` => **1726ms** <br/> 
`eta` => **1867ms** <br/> 
`ejs` => **2164ms** <br/> 
`liquidjs` => **34005ms** <br/> 

### if-expression (runned 5000 times) 
`igodust` => **13ms** <br/> 
`pug` => **13ms** <br/> 
`ejs` => **714ms** <br/> 
`eta` => **750ms** <br/> 
`liquidjs` => **2133ms** <br/> 

### projects-escaped (runned 5000 times) 
`igodust` => **65ms** <br/> 
`handlebars` => **78ms** <br/> 
`pug` => **223ms** <br/> 
`eta` => **768ms** <br/> 
`ejs` => **819ms** <br/> 
`liquidjs` => **2102ms** <br/> 

### projects-unescaped (runned 5000 times) 
`igodust` => **15ms** <br/> 
`handlebars` => **79ms** <br/> 
`pug` => **206ms** <br/> 
`eta` => **757ms** <br/> 
`ejs` => **807ms** <br/> 
`liquidjs` => **2121ms** <br/> 

### search-results (runned 5000 times) 
`igodust` => **24ms** <br/> 
`pug` => **70ms** <br/> 
`handlebars` => **294ms** <br/> 
`eta` => **912ms** <br/> 
`ejs` => **1666ms** <br/> 
`liquidjs` => **5133ms** <br/> 

### simple-0 (runned 5000 times) 
`pug` => **3ms** <br/> 
`igodust` => **7ms** <br/> 
`handlebars` => **18ms** <br/> 
`ejs` => **496ms** <br/> 
`eta` => **632ms** <br/> 
`liquidjs` => **1230ms** <br/> 

### simple-1 (runned 5000 times) 
`pug` => **14ms** <br/> 
`igodust` => **19ms** <br/> 
`handlebars` => **42ms** <br/> 
`eta` => **708ms** <br/> 
`ejs` => **806ms** <br/> 
`liquidjs` => **2079ms** <br/> 

### simple-2 (runned 5000 times) 
`pug` => **12ms** <br/> 
`igodust` => **15ms** <br/> 
`handlebars` => **32ms** <br/> 
`ejs` => **747ms** <br/> 
`eta` => **750ms** <br/> 
`liquidjs` => **1891ms** <br/> 

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
