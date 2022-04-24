import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  societe: string;
  typedech: string;
  position: number;
  poids: number;
  transporteur: string;
  date: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, societe: 'Hydrogen', typedech: 'dasri', poids: 1.0079, transporteur: 'H', date: '22-22-2022' },
  { position: 2, societe: 'Helium', typedech: 'dasri', poids: 4.0026, transporteur: 'He', date: '22-22-2022' },
  { position: 3, societe: 'Lithium', typedech: 'dasri', poids: 6.941, transporteur: 'Li', date: '22-22-2022'},
  { position: 4, societe: 'Beryllium', typedech: 'dasri', poids: 9.0122, transporteur: 'Be', date: '22-22-2022' },
  { position: 5, societe: 'Boron', typedech: 'dasri', poids: 10.811, transporteur: 'B', date: '22-22-2022' },
  { position: 6, societe: 'Carbon', typedech: 'dasri', poids: 12.0107, transporteur: 'C', date: '22-22-2022' },
  { position: 7, societe: 'Nitrogen', typedech: 'dasri', poids: 14.0067, transporteur: 'N', date: '22-22-2022' },
  { position: 8, societe: 'Oxygen', typedech: 'dasri', poids: 15.9994, transporteur: 'O', date: '22-22-2022' },
  { position: 9, societe: 'Fluorine', typedech: 'dasri', poids: 18.9984, transporteur: 'F', date: '22-22-2022' },
  { position: 10, societe: 'Neon', typedech: 'dasri', poids: 20.1797, transporteur: 'Ne', date: '22-22-2022' },
  { position: 11, societe: 'Sodium',typedech: 'dasri', poids: 22.9897, transporteur: 'Na', date: '22-22-2022' },
  { position: 12, societe: 'Magnesium',typedech: 'dasri', poids: 24.305, transporteur: 'Mg', date: '22-22-2022' },
  { position: 13, societe: 'Aluminum',typedech: 'dasri', poids: 26.9815, transporteur: 'Al', date: '22-22-2022' },
  { position: 14, societe: 'Silicon',typedech: 'dasri', poids: 28.0855, transporteur: 'Si', date: '22-22-2022' },
  { position: 15, societe: 'Phosphorus',typedech: 'dasri', poids: 30.9738, transporteur: 'P', date: '22-22-2022' },
  { position: 16, societe: 'Sulfur',typedech: 'dasri', poids: 32.065, transporteur: 'S', date: '22-22-2022' },
  { position: 17, societe: 'Chlorine', typedech: 'dasri', poids: 35.453, transporteur: 'Cl', date: '22-22-2022' },
  { position: 18, societe: 'Argon',typedech: 'dasri', poids: 39.948, transporteur: 'Ar', date: '22-22-2022' },
  { position: 19, societe: 'Potassium',typedech: 'dasri', poids: 39.0983, transporteur: 'K', date: '22-22-2022' },
  { position: 20, societe: 'Calcium',typedech: 'dasri', poids: 40.078, transporteur: 'Ca', date: '22-22-2022' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'societe', 'typedech', 'poids', 'transporteur', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
