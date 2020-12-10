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
![flow-chart-api-md-links](https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/flow-chart-api-md-links.png)

### **CLI**
![flow-chart-cli-md-links](https://github.com/MarycieloParionaBernaola/Markdown-Links-Validator/blob/master/img/flow-chart-cli-md-links.png)


## 3. Implementation Board

![MD-Links-Implementation-Board](https://github.com/MarycieloParionaBernaola/LIM013-fe-md-links/projects/1)


## 4. Installation



<center>

### `MarycieloParionaBernaola/@md-links-validator`

</center>


## 5. Usage

* ### JavaScript API:

This module can be imported into other Node.js scripts and provides the following interface:

<center>

### `mdLinks(path, options)`
</center>

#### Arguments:

* **`path`**: relative or absolute path string to points to a directory or file
* **`options`**: an object `{ validate: true}`

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

<center>

### `md-links <path-to-file> [options]`

</center>



<center>

### `mdLinks(path, options)`
</center>


### CLI (Command Line Interface)

The executable runs as follows through the terminal:

#### `md-links <path-to-file> [options]`

Example:

```sh
$ md-links ./some/example.md
./some/example.md http://something.com/2/3/ Link a algo
./some/example.md https://another-thing.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```


#### Options


The options are:

**--validate**: check status links.

**--stats**: display statistics of total and unique links.

**--validate --stats**: display statistics of total, unique and broken links

##### `--validate`

If you pass the `--validate` option, the module will make an HTTP request to find out if the link works or not. If the link results in a redirect to a URL that responds ok, then the link is considered ok.

Example:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://something.com/2/3/ ok 200 Link a algo
./some/example.md https://another-thing.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

We see that the _output_ in this case includes the word `ok` or` fail` after the URL, as well as the status of the response received to the HTTP request to said
URL.


##### `--stats`

If you pass the option `--stats` the output will be a text with basic statistics about the links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

You can also combine `--stats` and` --validate` to get needed statistics from the validation results.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```



