// Abstracts warehouse storage for both warehouse and outbound inventory
module.exports = function () {

  let config = require("../config");

  // Initialize the warehouse
  let warehouseInventory = new Array(config.NUM_WAREHOUSE_ROWS);
  for (let i = 0; i < warehouseInventory.length; i++) {
    warehouseInventory[i] = new Array(config.NUM_ROW_SQUARES);
  }

  // A simple array to track the outbound inventory
  let outboundInventory = [];

  return {
    // Returns the underlying warehouse data structure, for testing purposes
    getWarehouseInventory() {
      return warehouseInventory;
    },

    // Gets an array of all outbound lots
    getOutboundInventory() {
      return outboundInventory;
    },

    // Will get a lot object for given id
    getLot: function (row, square) {
      return warehouseInventory[row][square];
    },

    // Will store a lot in the system at a given location if it's empty or contains an empty lot.
    // Returns a boolean indicating success or failure.
    addLot: function (lot, row, square) {

      if(row > 25 || square > 10 || warehouseInventory[row][square]) {
        return false;
      }

      warehouseInventory[row][square] = lot;
      return true;
    },

    //Updates lot amount in at specified inventory location
    //when lot has changed.
    updateLotAmount: function(amount, row, square) {

      if(row > 25 || square > 10) {
        return false;
      }

      warehouseInventory[row][square].amount = amount;
      return true;
    },

    // Will add a lot to the outbound inventory queue
    shipLot: function (lot) {
      outboundInventory.push(lot);
    }
  };
};