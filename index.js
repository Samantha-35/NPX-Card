#!/usr/bin/env node
/* leny/npxcard
 *
 * /index.js - Main Entry point
 *
 * coded by leny@flatLand!
 * refactored at 27/08/2019
 */

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.blue("             Samantha"),
    handle: chalk.white(""),
    work: chalk.green(" Web dev learner at BeCode.org"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("umg_rw"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~umg"),
    github: chalk.gray("https://github.com/Samantha-35?tab=repositories") + chalk.green("samantha-35"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("Samantha"),
    web: chalk.cyan("https://umg.me"),
    npx: chalk.red("npx") + " " + chalk.white("umg_86"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelTwitter} ${data.twitter}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelWeb} ${data.web}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);
