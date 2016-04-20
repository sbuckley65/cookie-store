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
    for (var i = 0; i < this.hourlyCustomer().length; i++) {
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
  allStores.push(this);
};

//table header gets 'Location', hours from hours[], and 'Total'
function putHoursInTable() {
  var appendHeader = document.getElementById('hours');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = ('Location');
  tr.appendChild(th);
  appendHeader.appendChild(tr);
//adding hours to the header
  for (var i = 0; i < hours.length; i++){
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = ('Total');
  tr.appendChild(th);
}

// table body gets location sales
var appendRow = document.getElementById('store-info');
function putSalesInTable(location) {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = location.storeName; //addidng location name to the first column
  tr.appendChild(th);
  appendRow.appendChild(tr);//only appending to <tbody> here in this function

  for (var i = 0; i < location.hourlySales().length; i++){
    td = document.createElement ('td');
    td.textContent = location.hourlySales()[i]; //addidng hourly sales to the row
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = location.salesDailyTotals(); //adding total sales for each location to the last column
  tr.appendChild(td);
};

var pikePlace = new LocationSales ('Pike Place', 17, 88, 5.2);
var seaTac = new LocationSales ('Sea Tac Airport', 6, 24, 1.2);
var southCenter = new LocationSales ('Southcenter', 11, 38, 1.9);
var bellevue = new LocationSales ('Bellevue', 20, 48, 3.3);
var alki = new LocationSales ('Alki', 3, 24, 2.6);

putHoursInTable();
for(i = 0; i < allStores.length; i++){
  putSalesInTable(allStores[i]);
}

function handleAddChangeStore(event) {
  event.preventDefault();
  var store = event.target.store.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var averageCookie = parseInt(event.target.averageCookie.value);

  appendRow.textContent = '';

  var newStore = new LocationSales(store, minCust, maxCust, averageCookie);
  for (var i = 0; i < allStores.length; i++){
    putSalesInTable(allStores[i]);
  }
}
var salesPage = document.getElementById('stores-sales');
salesPage.addEventListener('submit', handleAddChangeStore);
