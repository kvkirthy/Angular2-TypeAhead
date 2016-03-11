import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, Validators} from 'angular2/common';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'search',
    templateUrl: 'app/templates/search.tpl.html'
})
export class AppComponent
{
    searchForm: any;
    results: Observable<any>;    
    
    constructor(private _formBuilder: FormBuilder, private _http: Http){
        this.searchForm = this._formBuilder.group({
            'search': ['', Validators.required]
        });
        
        this.results = this.searchForm.controls.search.valueChanges
                        .debounceTime(500)
                        .switchMap(searchQuery => this._http.get(`http://localhost:3001/api/search?term=${searchQuery}`))
                        .map(res => res.json());
    }
 
}