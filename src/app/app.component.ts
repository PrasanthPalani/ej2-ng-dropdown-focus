import { Component, ViewChild  } from '@angular/core';
import { AutoCompleteComponent } from '@syncfusion/ej2-ng-dropdowns';
//import DataManager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'my-app',
    // specifies the template string for the AutoComplete component
    template: `<ej-autocomplete id='atcelement' #sample (focus)='getFocus($event)' [dataSource]='sportsData' [fields]='fields' [placeholder]='text' [query]='query' [filterType]='filterType'></ej-autocomplete>`
})
export class AppComponent {
    @ViewChild('sample')
    public AutoCompleteObj: AutoCompleteComponent;
    constructor() {
    }
    //bind the DataManager instance to dataSource property
    public sportsData: DataManager = new DataManager({
            url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        });
    // maps the appropriate column to fields property
    public fields: Object = { value: 'ContactName' };
    //bind the Query instance to query property
    public query: Query = new Query().select(['ContactName', 'CustomerID']);
    //set the placeholder to AutoComplete input
    public text: string = "Find a customer";
    //set the filterType to searching operation
    public filterType: string='StartsWith';
    
    public getFocus = () => {
      this.AutoCompleteObj.value = 'Anabela Domingues';
    }
}