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
function putSalesInTable(location) {
  var appendRow = document.getElementById('store-info');
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

allStores.push(new LocationSales ('Pike Place', 17, 88, 5.2));
allStores.push(new LocationSales ('Sea Tac Airport', 6, 24, 1.2));
allStores.push(new LocationSales ('Southcenter', 11, 38, 1.9));
allStores.push(new LocationSales ('Bellevue', 20, 48, 3.3));
allStores.push(new LocationSales ('Alki', 3, 24, 2.6));

putHoursInTable();
for(i = 0; i < allStores.length; i++){
  putSalesInTable(allStores[i]);
}
