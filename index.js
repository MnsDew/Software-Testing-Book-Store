const BookRepository = require("./src/repositories/BookRepository");
const SearchService = require("./src/services/SearchService");
const BillingService = require("./src/services/BillingService");
const MenuController = require("./src/controllers/MenuController");

const repo = new BookRepository();
const search = new SearchService(repo);
const billing = new BillingService(repo);

const menu = new MenuController(repo, search, billing);
menu.run();