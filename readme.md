# Template Engine Benchmark

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
- Node v21.7.2
- MacBook Air M2, 15-inch with 16GB of RAM (2023)

<!-- <render performance> -->
## RENDER 

### friends (runned 5000 times) 
`pug` => **459ms** <br/> 
`igodust` => **513ms** <br/> 
`eta` => **604ms** <br/> 
`handlebars` => **1193ms** <br/> 
`ejs` => **4670ms** <br/> 
`liquidjs` => **15967ms** <br/> 

### if-expression (runned 5000 times) 
`pug` => **5ms** <br/> 
`igodust` => **8ms** <br/> 
`liquidjs` => **93ms** <br/> 
`eta` => **153ms** <br/> 
`ejs` => **212ms** <br/> 

### projects-escaped (runned 5000 times) 
`igodust` => **38ms** <br/> 
`handlebars` => **42ms** <br/> 
`pug` => **122ms** <br/> 
`liquidjs` => **163ms** <br/> 
`eta` => **175ms** <br/> 
`ejs` => **276ms** <br/> 

### projects-unescaped (runned 5000 times) 
`igodust` => **8ms** <br/> 
`handlebars` => **41ms** <br/> 
`pug` => **122ms** <br/> 
`liquidjs` => **160ms** <br/> 
`eta` => **176ms** <br/> 
`ejs` => **263ms** <br/> 

### search-results (runned 5000 times) 
`igodust` => **15ms** <br/> 
`pug` => **55ms** <br/> 
`handlebars` => **151ms** <br/> 
`eta` => **225ms** <br/> 
`ejs` => **749ms** <br/> 
`liquidjs` => **1475ms** <br/> 

### simple-0 (runned 5000 times) 
`pug` => **1ms** <br/> 
`igodust` => **4ms** <br/> 
`handlebars` => **9ms** <br/> 
`liquidjs` => **17ms** <br/> 
`eta` => **126ms** <br/> 
`ejs` => **133ms** <br/> 

### simple-1 (runned 5000 times) 
`pug` => **7ms** <br/> 
`igodust` => **11ms** <br/> 
`handlebars` => **23ms** <br/> 
`liquidjs` => **117ms** <br/> 
`eta` => **160ms** <br/> 
`ejs` => **258ms** <br/> 

### simple-2 (runned 5000 times) 
`pug` => **7ms** <br/> 
`igodust` => **9ms** <br/> 
`handlebars` => **16ms** <br/> 
`liquidjs` => **106ms** <br/> 
`eta` => **155ms** <br/> 
`ejs` => **238ms** <br/> 

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

 PRs are welcome 😃❤️
