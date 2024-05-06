import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Profile} from "../../models/profile.data.model";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private readonly _data = new BehaviorSubject<Profile>({} as Profile);

  readonly data$ = this._data.asObservable();

  get data(): Profile {
    return this._data.getValue();
  }

  set data(val: Profile) {
    this._data.next(val);
  }

  setData(val: Profile) {
    this.data = val;
  }
}
