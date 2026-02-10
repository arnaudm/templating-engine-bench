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
`pug` => **173ms** <br/> 
`eta` => **529ms** <br/> 
`igodust` => **774ms** <br/> 
`ejs` => **1113ms** <br/> 
`handlebars` => **1423ms** <br/> 
`liquidjs` => **27889ms** <br/> 

### if-expression (run 5000 times) 
`ejs` => **10ms** <br/> 
`pug` => **10ms** <br/> 
`igodust` => **12ms** <br/> 
`eta` => **23ms** <br/> 
`liquidjs` => **173ms** <br/> 

### projects-escaped (run 5000 times) 
`eta` => **54ms** <br/> 
`igodust` => **65ms** <br/> 
`handlebars` => **66ms** <br/> 
`ejs` => **88ms** <br/> 
`pug` => **196ms** <br/> 
`liquidjs` => **302ms** <br/> 

### projects-unescaped (run 5000 times) 
`igodust` => **12ms** <br/> 
`eta` => **52ms** <br/> 
`handlebars` => **61ms** <br/> 
`ejs` => **84ms** <br/> 
`pug` => **188ms** <br/> 
`liquidjs` => **285ms** <br/> 

### search-results (run 5000 times) 
`igodust` => **18ms** <br/> 
`pug` => **44ms** <br/> 
`eta` => **58ms** <br/> 
`handlebars` => **244ms** <br/> 
`ejs` => **550ms** <br/> 
`liquidjs` => **2601ms** <br/> 

### simple-0 (run 5000 times) 
`pug` => **2ms** <br/> 
`ejs` => **4ms** <br/> 
`igodust` => **6ms** <br/> 
`handlebars` => **14ms** <br/> 
`eta` => **15ms** <br/> 
`liquidjs` => **26ms** <br/> 

### simple-1 (run 5000 times) 
`pug` => **12ms** <br/> 
`igodust` => **13ms** <br/> 
`eta` => **20ms** <br/> 
`handlebars` => **30ms** <br/> 
`ejs` => **49ms** <br/> 
`liquidjs` => **206ms** <br/> 

### simple-2 (run 5000 times) 
`pug` => **9ms** <br/> 
`igodust` => **11ms** <br/> 
`eta` => **20ms** <br/> 
`handlebars` => **24ms** <br/> 
`ejs` => **48ms** <br/> 
`liquidjs` => **192ms** <br/> 

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
