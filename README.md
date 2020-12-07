# Markdown Links Validator

## Table of Contents

* [1. About The Project](#1-about-the-project)
* [2. Flowchart](#2-flowchart)
* [3. Implementation Board](#3-implementation-board)
* [4. Install](#4-install)
* [5. Usage](#5-usage)

***

## 1. About The Project

![cli-md-links-direct](https://github.com/MarycieloParionaBernaola/LIM013-fe-md-links/blob/master/img/cli-md-links-direct.png)

![cli-md-links-inquirer](https://github.com/MarycieloParionaBernaola/LIM013-fe-md-links/blob/master/img/cli-md-links-inquirer.png)

### JavaScript API:

<center>

### `mdLinks(path, options)`

</center>

It extracts and validate all markdown links contained in a directory or file, with their properties: `path`, `href` and `text` and if the object `{ validate: true }` is entered as an argument in `options`, it returns the above plus the `status` and if those are valid it shows `ok` and `fail` for those that are broken.


### CLI:

<center>

### `md-links <path-to-file> [options]`

</center>

Validate all markdown links contained in a directory or file and show their statistics with the following options:

* #### --validate
Check the status of the links.

* #### --stats
Shows statistics of the total links and how many are unique.

* #### --validate --stats
Shows statistics for total, unique and broken links.

![md-links-cli]()

## 2. Flowchart
![flowchart-md-links](https://github.com/MarycieloParionaBernaola/LIM013-fe-md-links/blob/master/img/flow-chart-md-links-1.png)


## 3. Implementation Board

![implementation-board](https://github.com/MarycieloParionaBernaola/LIM013-fe-md-links/projects/1)


## 4. Install



## 5. Usage

### JavaScript API

This module can be imported into other Node.js scripts and offers the following interface:

#### `mdLinks(path, options)`

##### Arguments

* `path`: relative or absolute path string
* `options`: an object with the following properties:
  - `validate`: boolean that determines if you want to validate found links.

##### Return value

The function returns a promise (`Promise`) that resolves to an array (`Array`) of objects (`Object`), where each object represents a link and contains the following properties:

* `href`: URL found.
* `text`: text that appeared within the link (`<a>`).
* `path`: path of the file where the link was found.

#### Example

```js
const mdLinks = require("md-links");

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



