import { Component } from '@angular/core';
import { RootService } from './root.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CURD-Assessment';

  constructor(private root: RootService) {
  }
  collection: any

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    setTimeout(() => {
    //  this.displaySpinner = true;
     this.root.getList().subscribe((result) => {
      // this.displaySpinner = false;
      this.collection = result;
      console.log('dataSource', this.collection);
 
      // this.dataSource = new MatTableDataSource(this.collection);
      // this.dataSource.paginator = this.paginator;
      // console.log('this.dataSource', this.paginator);
      // console.log('this.dataSourcekjhjklhkljhk', this.dataSource);
    });
    }, 100)
   }
}
