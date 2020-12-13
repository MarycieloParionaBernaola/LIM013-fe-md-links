# Markdown Links Validator

## Table of Contents

* [1. About The Project](#1-about-the-project)
* [2. Flowchart](#2-flowchart)
* [3. Implementation Board](#3-implementation-board)
* [4. Install](#4-install)
* [5. Usage](#5-usage)

***

## 1. About The Project

***Markdown-Links-Validator*** provides a ***Javascript API*** that parses, lists and validates the Markdown links contained in a directory or file, it also provides a ***Command Line*** that, in addition to the above, displays its statistics.

## 2. Flowchart

### **API**
<p align="center">
<img src="https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/flow-chart-api-md-links.png" width="100%" height="100%">
</p>

### **CLI**
<p align="center">
<img src="https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/flow-chart-cli-md-links.png" width="80%" height="80%">
</p>


## 3. Implementation Board

[MD-Links Implementation Board](https://github.com/MarycieloParionaBernaola/LIM013-fe-md-links/projects/1)


## 4. Installation

<center>

### `MarycieloParionaBernaola/@md-links-validator`

</center>


## 5. Usage

* ### JavaScript API:

<center>

### `mdLinks(path, options)`
</center>

#### Arguments:

* **`path`**: relative or absolute path string to points to a directory or file.
* **`options`**: an object `{ validate: true}` to validate links.

#### Return value:

It returns an `array` of `objects`, where each object contains properties of a link.

* *`href`*: URL found.
* *`text`*: text that appeared within the link `<a>`.
* *`path`*: path of the file where the link was found.

#### Example:

```js
const mdLinks = require("md-links-validator");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, message }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

* ### Command Line:

The command line is run in two ways through the terminal:

To get started, run the following command line:

<center>

### `md-links`

</center>

![start-md-links](https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/start-md-links.png)


### With guide:

If you select this option, the first step will be to enter a valid path (it must exist and be a string) that points to your file or directory containing markdown files, otherwise these errors will appear.

![enter-path-erros-md-links](https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/enter-path-errors-md-links.png)

Then wil be appear the following options:

![options-md-links](https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/options-md-links.png)

Select one of those and the result will appear

![options-md-links](https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/list-i-md-links.png)

You can select another option after that and repeat the process.

### Direct way (on your own):

If you want to do it on this way, you can start all the process with the next command line and structure.
<center>

### `md-links <path-to-file> [options]`

</center>

#### Options


The options are:

**--validate**: check status links.

If you pass the `--validate` option, the module will make an HTTP request to find out if the link works or not. If the link results in a redirect to a URL that responds "OK", then the link is considered "OK", otherwise the respective status will appear in red and if the request was rejected it will appear "FAIL".

![validate-d-md-links](https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/validate-d-md-links.png)

**--stats**: display statistics of total and unique links.

If you pass the option `--stats` the output will be a text with basic statistics about the links.

![stats-d-md-links](https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/stats-d-md-links.png)

**--validate --stats**: display statistics of total, unique and broken links

You can also combine `--stats` and` --validate` to get needed statistics from the validation results.

![validate-stats-d-md-links](https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/validate-stats-d-md-links.png)



