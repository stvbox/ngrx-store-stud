import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from './../../store/counter';
import { selectFeatureCounter } from '../../store/feature';

interface AppState {
  cnt: number;
}

@Component({
  selector: 'app-cnt',
  templateUrl: './cnt.component.html',
  styleUrls: ['./cnt.component.css']
})
export class CntComponent implements OnInit {
  cnt$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.cnt$ = store.pipe(select('cnt'));
  }

  ngOnInit() { }

  test() {

    this.store.pipe(select(selectFeatureCounter)).subscribe( value => {
      console.log(value);
    });

    // console.log('...');
    // selectFeatureCounter
  }

  incriment() {
    this.store.dispatch(new CounterActions.Increment());
  }

  decriment() {
    this.store.dispatch(new CounterActions.Decrement());
  }

}
