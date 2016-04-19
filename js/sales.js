var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var storeOne = {
  minCustomer: 17,
  maxCustomer: 88,
  avgSales: 5.2,
  storeName: 'Park Place',
  customerNumber: [],

  randomNumber: function (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  hourlyCustomer: function () {
    this.hCustomer = [];
    for (var i = 0; i < 15; i++) {
      this.hCustomer.push(Math.floor(this.randomNumber(this.minCustomer,this.maxCustomer)));
    }
    console.log(this.hCustomer);
    for (var i = 0; i < 15; i++) {
      var customerList = document.getElementById('customerList');
      var hourlyListItem = document.createElement('li');
      hourlyListItem.textContent = hours[i] + ': ' + this.hCustomer[i];
      customerList.appendChild(hourlyListItem);
    }
  },

  hourlySales: function () {
    this.hSales = [];
    for (var i = 0; i < this.hCustomer.length; i++) {
      this.hSales.push(Math.floor(this.hCustomer[i] * this.avgSales));
    }
    console.log(this.hSales);
    for (var i = 0; i < 15; i++) {
      var salesList = document.getElementById('salesList');
      var hourlyListItem = document.createElement('li');
      hourlyListItem.textContent = hours[i] + ': ' + this.hSales[i];
      salesList.appendChild(hourlyListItem);
    }
  },
//I wanted to make one function for both totals, but couldn't figure it out.
//I had trouble figuring out how to set it up to pull either array, and
//how to call it with either array.
  // dailyTotals: function(allHours) {
  //   this.dTotal = 0;
  //   for (var i = 0; i < this.allHours.length; i++) {
  //     this.dTotal = this.dTotal + this.allHours[i];
  //   }
  //   console.log(this.allHours);
  //   var customerList = document.getElementById('customerList');
  //   var lastListItem = document.createElement('li');
  //   lastListItem.textContent = 'Total: ' + this.dTotal;
  // }

  customerDailyTotals: function() {
    this.dTotal = 0;
    for (var i = 0; i < this.hCustomer.length; i++) {
      this.dTotal = this.dTotal + this.hCustomer[i];
    }
    console.log(this.dTotal);
    var customerList = document.getElementById('customerList');
    var lastListItem = document.createElement('li');
    lastListItem.textContent = 'Total: ' + this.dTotal;
    customerList.appendChild(lastListItem);
  },

  salesDailyTotals: function() {
    this.dSalesTotal = 0;
    for (var i = 0; i < this.hSales.length; i++) {
      this.dSalesTotal = this.dSalesTotal + this.hSales[i];
    }
    console.log(this.dSalesTotal);
    var salesList = document.getElementById('salesList');
    var lastListItem = document.createElement('li');
    lastListItem.textContent = 'Total: ' + this.dSalesTotal;
    salesList.appendChild(lastListItem);
  }

};

var storeName = document.getElementById('storeName');
var addStoreName = document.createElement('h2');
addStoreName.textContent = storeOne.storeName;
storeName.appendChild(addStoreName);
storeOne.hourlyCustomer();
storeOne.hourlySales();
storeOne.customerDailyTotals();
storeOne.salesDailyTotals();
