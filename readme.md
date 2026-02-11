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
`dot` => **85ms** <br/> 
`pug` => **170ms** <br/> 
`eta` => **518ms** <br/> 
`squirrelly` => **667ms** <br/> 
`igodust` => **757ms** <br/> 
`ejs` => **1121ms** <br/> 
`handlebars` => **1374ms** <br/> 
`nunjucks` => **4339ms** <br/> 
`twig` => **12517ms** <br/> 
`liquidjs` => **28088ms** <br/> 

### if-expression (run 5000 times) 
`dot` => **2ms** <br/> 
`hogan` => **10ms** <br/> 
`pug` => **11ms** <br/> 
`igodust` => **12ms** <br/> 
`mustache` => **14ms** <br/> 
`ejs` => **20ms** <br/> 
`eta` => **22ms** <br/> 
`nunjucks` => **26ms** <br/> 
`squirrelly` => **102ms** <br/> 
`twig` => **145ms** <br/> 
`liquidjs` => **209ms** <br/> 

### projects-escaped (run 5000 times) 
`dot` => **2ms** <br/> 
`eta` => **52ms** <br/> 
`igodust` => **58ms** <br/> 
`hogan` => **61ms** <br/> 
`handlebars` => **64ms** <br/> 
`mustache` => **73ms** <br/> 
`nunjucks` => **79ms** <br/> 
`ejs` => **86ms** <br/> 
`squirrelly` => **137ms** <br/> 
`twig` => **155ms** <br/> 
`pug` => **192ms** <br/> 
`liquidjs` => **301ms** <br/> 

### projects-unescaped (run 5000 times) 
`hogan` => **10ms** <br/> 
`igodust` => **11ms** <br/> 
`dot` => **34ms** <br/> 
`mustache` => **36ms** <br/> 
`nunjucks` => **50ms** <br/> 
`eta` => **51ms** <br/> 
`handlebars` => **60ms** <br/> 
`ejs` => **86ms** <br/> 
`twig` => **155ms** <br/> 
`pug` => **190ms** <br/> 
`liquidjs` => **292ms** <br/> 

### search-results (run 5000 times) 
`dot` => **10ms** <br/> 
`igodust` => **18ms** <br/> 
`pug` => **39ms** <br/> 
`eta` => **55ms** <br/> 
`squirrelly` => **205ms** <br/> 
`handlebars` => **239ms** <br/> 
`ejs` => **556ms** <br/> 
`nunjucks` => **584ms** <br/> 
`mustache` => **677ms** <br/> 
`hogan` => **679ms** <br/> 
`twig` => **1726ms** <br/> 
`liquidjs` => **2678ms** <br/> 

### simple-0 (run 5000 times) 
`dot` => **0ms** <br/> 
`hogan` => **1ms** <br/> 
`nunjucks` => **2ms** <br/> 
`ejs` => **3ms** <br/> 
`mustache` => **3ms** <br/> 
`pug` => **3ms** <br/> 
`igodust` => **6ms** <br/> 
`twig` => **11ms** <br/> 
`handlebars` => **14ms** <br/> 
`eta` => **15ms** <br/> 
`liquidjs` => **26ms** <br/> 
`squirrelly` => **31ms** <br/> 

### simple-1 (run 5000 times) 
`dot` => **2ms** <br/> 
`pug` => **9ms** <br/> 
`igodust` => **13ms** <br/> 
`eta` => **19ms** <br/> 
`handlebars` => **29ms** <br/> 
`ejs` => **49ms** <br/> 
`nunjucks` => **58ms** <br/> 
`squirrelly` => **105ms** <br/> 
`hogan` => **126ms** <br/> 
`mustache` => **151ms** <br/> 
`twig` => **159ms** <br/> 
`liquidjs` => **202ms** <br/> 

### simple-2 (run 5000 times) 
`dot` => **2ms** <br/> 
`igodust` => **10ms** <br/> 
`pug` => **10ms** <br/> 
`hogan` => **12ms** <br/> 
`eta` => **19ms** <br/> 
`mustache` => **20ms** <br/> 
`handlebars` => **23ms** <br/> 
`ejs` => **49ms** <br/> 
`nunjucks` => **59ms** <br/> 
`squirrelly` => **99ms** <br/> 
`twig` => **138ms** <br/> 
`liquidjs` => **193ms** <br/> 

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
