let config = {};
config.db = {};

const username = "chimoney";
const password = "zG8mmGBIcF06KHgP";
const dbname = "list-of-services";

const connectionURL = `mongodb+srv://${username}:${password}@cluster0.rod9r.mongodb.net/${dbname}?retryWrites=true&w=majority`;

config.db.host = connectionURL;

config.db.name = dbname;

module.exports = config;
