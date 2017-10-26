angular.module("app")
.component("firstComponent" , {
    template : '<h1> {{name}}</h1>',
    controller : 'firstController'
})
.component("secondComponent" , {
    templateUrl : 'best.html'
})
