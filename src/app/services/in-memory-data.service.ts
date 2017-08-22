import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ListModel } from './../models/list.model';
import { TaskModel } from './../models/task.model';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const LISTS = [
        new ListModel(
            1,
            'Complete the test task for Ruby Garage', 
            [
                new TaskModel('Open this mock-up in Adobe Fireworks', false),
                new TaskModel('Attentively check the file', true),
                new TaskModel('Write HTML & CSS', false),
                new TaskModel('Add Javascript to implement adding / editing/ removing for todo items and lists taking into account as more use cases as possible', false),
            ]
        ),
        new ListModel(
            2,
            'For Home', 
            [
                new TaskModel('Buy a milk', true),
                new TaskModel('Call Mam', false),
                new TaskModel('Clean the room', true),
                new TaskModel('Repair the DVD Player', false)
            ]
        )
    ];

    return { LISTS };
  }
}