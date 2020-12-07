#! /usr/bin/env node
/* eslint-disable no-use-before-define */

const process = require('process');
const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');
const { mdLinks } = require('../src/md-links');
const { statsLinks } = require('../src/stats-links');

const givenPath = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];

// Validate and Stats option
const validateStatsOption = (pathStr) => {
  mdLinks((pathStr), { validate: true })
    .then((res) => {
      console.log(statsLinks(res, true));
    })
    .catch((err) => console.log(chalk.redBright(err.message)));
};

// Validate option
const validateOption = (pathStr) => {
  mdLinks(pathStr, { validate: true })
    .then((res) => {
      res.forEach((e) => {
        const statusText = e.statusText === 'OK' ? chalk.bold.rgb(160, 233, 55)(e.statusText) : chalk.bold.rgb(255, 0, 40)(e.statusText);
        console.log(chalk.bold.bgHex('403233').rgb(171, 237, 198)`│ Path: ${chalk.rgb(188, 163, 113)(e.path)} │ Link: ${chalk.underline.rgb(241, 154, 62)(e.href)} │ Status: ${chalk.rgb(255, 255, 95)(e.status)} ${statusText} │ Text: ${chalk.rgb(154, 135, 157)(e.text)}`);
      });
    })
    .catch((err) => console.log(chalk.redBright(err.message)));
};

// Stats option
const statsOption = (pathStr) => {
  mdLinks(pathStr, { validate: false })
    .then((res) => {
      console.log(statsLinks(res));
    })
    .catch((err) => console.log(chalk.redBright(err.message)));
};

// List option
const listOption = (pathStr) => {
  mdLinks(pathStr)
    .then((res) => {
      res.forEach((e) => {
        console.log(chalk.bold.bgHex('403233').rgb(171, 237, 198)`│ Path: ${chalk.rgb(188, 163, 113)(e.path)} │ Link: ${chalk.underline.rgb(241, 154, 62)(e.href)} │ Text: ${chalk.rgb(154, 135, 157)(e.text)}`);
      });
    })
    .catch((err) => console.log(chalk.redBright(err.message)));
};

// Options without Inquirer
const withoutInquirer = (pathStr) => {
  if ((option1 === '--validate' && option2 === '--stats') || (option1 === '--v' && option2 === '--s') || (option1 === '--stats' && option2 === '--validate') || (option1 === '--s' && option2 === '--v')) {
    validateStatsOption(pathStr);
  } else if (option1 === '--validate' || option1 === '--v') {
    validateOption(pathStr);
  } else if (option1 === '--stats' || option1 === '--s') {
    statsOption(pathStr);
  } else if (option1 === undefined && option2 === undefined) {
    listOption(pathStr);
  }
};

// Options with Inquirer
const withInquirer = (answerPath, answerOptions) => {
  switch (answerOptions) {
    case 'List':
      listOption(answerPath);
      break;
    case 'Validate':
      validateOption(answerPath);
      break;
    case 'Stats':
      statsOption(answerPath);
      break;
    case 'Validate and stats':
      validateStatsOption(answerPath);
      break;
    default: // do nothing;
      break;
  }
};

// 5. Continue options
const continueOptions = (answerPath) => {
  inquirer
    .prompt([
      {
        name: 'continue',
        type: 'confirm',
        message: 'Do you want to continue?',
      },
    ])
    .then((answer) => (answer.continue ? options(answerPath) : startInquirer()));
};

// 4. Select options
const options = (answerPath) => {
  inquirer
    .prompt([
      {
        name: 'options',
        type: 'list',
        message: 'What do you want to do with md links:',
        choices: ['List', 'Validate', 'Stats', 'Validate and stats'],
      },
    ])
    .then((answer) => withInquirer(answerPath, answer.options))
    .then(() => continueOptions(answerPath));
};

// 3. Enter path and verify it, if it is valid, call options function
// otherwise it shows the error message
const path = () => {
  inquirer
    .prompt([
      {
        name: 'path',
        type: 'input',
        message: 'Enter a path to parse md links:',
      },
    ])
    .then((answer) => mdLinks(answer.path)
      .then(() => options(answer.path))
      .catch((err) => {
        console.log(chalk.redBright(err.message));
        path();
      }));
};

// 2. Start Inquirer
const startInquirer = () => {
  inquirer
    .prompt([
      {
        name: 'start',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Parse md links with guide', 'Parse md links on my own', 'Exit'],
      },
    ])
    .then((answer) => {
      if (answer.start === 'Parse md links with guide') {
        path();
      }
    });
};

// 1. Start App
const startApp = () => {
  if (givenPath) {
    withoutInquirer(givenPath);
  } else {
    console.log(chalk.bgHex('403233').bold.rgb(171, 237, 198)(figlet.textSync('MD-LINKS', { horizontalLayout: 'full' })));
    startInquirer();
  }
};

startApp();
