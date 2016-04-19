var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'];
var allStores = [];
function LocationSales (storeName, minCustomer, maxCustomer, avgSales) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSales = avgSales;
  this.randomNumber = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  this.hourlyCustomer = function(){
    this.hCustomer = [];
    for (var i = 0; i < hours.length; i++) {
      this.hCustomer.push(Math.floor(this.randomNumber(this.minCustomer,this.maxCustomer)));
    }
    return this.hCustomer;
  };
  this.hourlySales = function() {
    this.hSales = [];
    for (var i = 0; i < this.hCustomer.length; i++) {
      this.hSales.push(Math.floor(this.hCustomer[i] * this.avgSales));
    };
    return this.hSales;
  };
  this.salesDailyTotals = function() {
    this.dSalesTotal = 0;
    for (var i = 0; i < this.hSales.length; i++) {
      this.dSalesTotal = this.dSalesTotal + this.hSales[i];
    }
    return this.dSalesTotal;
  };
};

function putSalesInTable(location) {
//table header gets hours from hours[]
  var appendHeader = document.getElementById('hours');
  var th = document.createElement('th');
  th.textContent = ('Location');
  appendHeader.appendChild(th);
  for (var i = 0; i < hours.length; i++){
    var td = document.createElement('td');
    var tr = document.createElement('tr');
    td.textContent = hours[i];
    appendHeader.appendChild(td);
  }
  th = document.createElement('th');
  th.textContent = ('Total');
  appendHeader.appendChild(th);
// table body gets location sales
  var appendRow = document.getElementById('store-info');
  //var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = location.storeName;
  appendRow.appendChild(th);
  for (var i = 0; i < location.hourlySales().length; i++){
    var td = document.createElement ('td');
    var tr = document.createElement('tr');
    td.textContent = location.hourlySales()[i];
    //tr.appendChild(td);
    appendRow.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = location.salesDailyTotals();
  //tr.appendChild(td);
  appendRow.appendChild(td);
};

var pikePlace = new LocationSales ('Pike Place', 17, 88, 5.2);
var seaTacAirport = new LocationSales ('Sea Tac Airport', 6, 24, 1.2);
var southcenter = new LocationSales ('Southcenter', 11, 38, 1.9);
var bellevue = new LocationSales ('Bellevue', 20, 48, 3.3);
var alki = new LocationSales ('Alki', 3, 24, 2.6);

//AllStores.push(pikePlace, seaTacAirport, southcenter, bellevue, alki);
allStores.push(this);
for(i = 0; i < allStores.length; i++){
  putSalesInTable(allStores[i]);
}
