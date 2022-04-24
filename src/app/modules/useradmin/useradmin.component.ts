import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DashboardService } from '../dashboard.service';
import { Societe } from 'src/app/model/societe.model';
import { SocieteService } from 'src/app/services/societe.service';


export interface PeriodicElement {
  societe: string;
  typedech: string;
  position: number;
  poids: number;
  transporteur: string;
  date: string;
  

}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, societe: 'Tunicleany', typedech: 'dasri', poids: 1.0079, transporteur: 'H', date: '22-22-2022' },
  { position: 2, societe: 'Tunicleany', typedech: 'dasri', poids: 4.0026, transporteur: 'He', date: '22-22-2022' },
  { position: 3, societe: 'Tunicleany', typedech: 'dasri', poids: 6.941, transporteur: 'Li', date: '22-22-2022'},
  { position: 4, societe: 'Tunicleany', typedech: 'dasri', poids: 9.0122, transporteur: 'Be', date: '22-22-2022' },
  { position: 5, societe: 'Tunicleany', typedech: 'dasri', poids: 10.811, transporteur: 'B', date: '22-22-2022' },
  { position: 6, societe: 'Tunicleany', typedech: 'dasri', poids: 12.0107, transporteur: 'C', date: '22-22-2022' },
  { position: 7, societe: 'Tunicleany', typedech: 'dasri', poids: 14.0067, transporteur: 'N', date: '22-22-2022' },
  { position: 8, societe: 'Tunicleany', typedech: 'dasri', poids: 15.9994, transporteur: 'O', date: '22-22-2022' },
  { position: 9, societe: 'Tunicleany', typedech: 'dasri', poids: 18.9984, transporteur: 'F', date: '22-22-2022' },
];

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.scss']
})
export class UseradminComponent implements OnInit {
  societes: Societe[];
  bigChart = [];
  cards = [];
  pieChart = [];


  displayedColumns: string[] = ['position', 'societe', 'typedech', 'poids', 'transporteur', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

 
 
  constructor(private dashboardService: DashboardService , private societeService: SocieteService) { 
    this.societes = societeService.listeSociete();
  }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }
  
  
}
