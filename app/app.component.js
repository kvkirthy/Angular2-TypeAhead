System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_formBuilder, _http) {
                    var _this = this;
                    this._formBuilder = _formBuilder;
                    this._http = _http;
                    this.searchForm = this._formBuilder.group({
                        'search': ['', common_1.Validators.required]
                    });
                    this.results = this.searchForm.controls.search.valueChanges
                        .debounceTime(500)
                        .switchMap(function (searchQuery) { return _this._http.get("http://localhost:57301/component/api/search?term=" + searchQuery); })
                        .map(function (res) { return res.json(); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        templateUrl: 'app/templates/search.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map