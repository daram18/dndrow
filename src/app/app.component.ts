import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData: [];
  private sortingOrd;
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.columnDefs = [
      {
        headerName:"Name",
        field:"athlete",
        width: 150,
        rowDrag: true 
      },
      {
        headerName:"Age",
        field:"age",
        width: 50,
      },
      {
        headerName:"Country",
        field:"country",
        width: 120,
      },
      {
        headerName:"Year",
        field:"year",
        width: 100,
      },
      {
        headerName:"Date",
        field:"date",
        width: 120,
      },
      {
        headerName:"Sport",
        field:"sport",
        width: 100,
      },
      {
        headerName:"Gold",
        field:"gold",
        width: 100,
      },
      {
        headerName:"Silver",
        field:"silver",
        width: 100,
      },
      {
        headerName:"Bronze",
        field:"bronze",
        width: 100,
      },
      {
        headerName:"Total",
        field:"total",
        width: 100
      }
    ];
    this.defaultColDef = {
      width:150,
      sortable: true
    }
    this.sortingOrd=["asc", "desc", null]
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
      .subscribe(data => {
        params.api.setRowData(data);
      });
  }
  getData() {
    var rowNode =this.gridApi.getDisplayedRowAtIndex(0);
    alert(rowNode.data.athlete);
  }
}
