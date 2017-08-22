import { Component } from '@angular/core';
import { ListModel } from './../../models/list.model';
import { ListService } from './../../services/list.service';

@Component({
  selector: 'main-todo',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  busy: Promise<any>;
  lists: ListModel[];

  constructor(private listService: ListService) {  }

  ngOnInit() {
    this.busy = this.listService.getLists()
      .then(lists => this.lists = lists);

    this.listService.changedList.subscribe(
      () => {
        this.busy = this.listService.getLists()
          .then(lists => this.lists = lists);
      }
    );
  
  }

  addList() {    
    this.listService.addList();
  }

}
