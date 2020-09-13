"use strict";

//Dependencies
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const prompts = require("./prompts");
const db = require("./db");
require("console.table");

require("./db/connection")


async function viewAllTitles() {

    const titles = await db.viewAllTitles();

    console.log("\n");
    console.table(titles);

    mainPrompt();
}