const { saveDetails, loadDetails }  = require("./customer");

module.exports= function main() {
  saveDetails();
  loadDetails();
}