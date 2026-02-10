# Templating Engine Benchmark

This project is a benchmark designed to evaluate the performance of various JavaScript template engines. It allows developers to compare rendering performance of several popular template engines in various scenarios.

## Supported Template Engines

All the following template engines are **fully working** with caching enabled for optimal performance:

- ✅ **Pug** - Fast and elegant template engine
- ✅ **Handlebars** - Logic-less templates
- ✅ **EJS** - Embedded JavaScript templating
- ✅ **Eta** - Lightweight, fast, and powerful
- ✅ **LiquidJS** - Shopify Liquid template engine
- ✅ **IgoDust** - Dust.js compatible engine

See [ANALYSIS.md](./ANALYSIS.md) for detailed information about potential engines to add.

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
`pug` => **170ms** <br/> 
`eta` => **539ms** <br/> 
`igodust` => **761ms** <br/> 
`ejs` => **1210ms** <br/> 
`handlebars` => **1395ms** <br/> 
`liquidjs` => **28514ms** <br/> 

### if-expression (run 5000 times) 
`ejs` => **9ms** <br/> 
`igodust` => **9ms** <br/> 
`pug` => **10ms** <br/> 
`eta` => **20ms** <br/> 
`liquidjs` => **171ms** <br/> 

### projects-escaped (run 5000 times) 
`eta` => **53ms** <br/> 
`igodust` => **60ms** <br/> 
`handlebars` => **68ms** <br/> 
`ejs` => **91ms** <br/> 
`pug` => **199ms** <br/> 
`liquidjs` => **291ms** <br/> 

### projects-unescaped (run 5000 times) 
`igodust` => **10ms** <br/> 
`eta` => **51ms** <br/> 
`handlebars` => **62ms** <br/> 
`ejs` => **85ms** <br/> 
`pug` => **195ms** <br/> 
`liquidjs` => **284ms** <br/> 

### search-results (run 5000 times) 
`igodust` => **22ms** <br/> 
`pug` => **38ms** <br/> 
`eta` => **55ms** <br/> 
`handlebars` => **242ms** <br/> 
`ejs` => **576ms** <br/> 
`liquidjs` => **2595ms** <br/> 

### simple-0 (run 5000 times) 
`pug` => **2ms** <br/> 
`ejs` => **4ms** <br/> 
`igodust` => **5ms** <br/> 
`handlebars` => **14ms** <br/> 
`eta` => **15ms** <br/> 
`liquidjs` => **27ms** <br/> 

### simple-1 (run 5000 times) 
`pug` => **10ms** <br/> 
`igodust` => **13ms** <br/> 
`eta` => **18ms** <br/> 
`handlebars` => **29ms** <br/> 
`ejs` => **49ms** <br/> 
`liquidjs` => **209ms** <br/> 

### simple-2 (run 5000 times) 
`pug` => **8ms** <br/> 
`igodust` => **11ms** <br/> 
`eta` => **19ms** <br/> 
`handlebars` => **23ms** <br/> 
`ejs` => **49ms** <br/> 
`liquidjs` => **191ms** <br/> 

<!-- <end> -->

## Recent Improvements

**v2024** - Code simplification and performance improvements:
- ✅ All template engines now use caching for optimal performance
- ✅ Removed unnecessary dependencies (reduced from 179 to 70 packages)
- ✅ Added error handling to prevent crashes
- ✅ Simplified codebase by removing dead code
- ✅ Fixed Eta and improved EJS/LiquidJS performance significantly

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
