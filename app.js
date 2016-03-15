            var myapp = angular.module('myapp', ["ui.router"])
            myapp.config(function($stateProvider, $urlRouterProvider) {

                // For any unmatched url, send to /route1
                $urlRouterProvider.otherwise("/wc")

                $stateProvider
                    .state('wc', {
                        url: "/wc",
                        templateUrl: "views/route.html",
                        controller: 'tabDemoCtrl'
                    })
                    .state('test', {
                        url: "/test",
                        templateUrl: "views/test.html"
                    })
                    .state('test2', {
                        url: "/test2",
                        templateUrl: "views/test2.html"
                    })
                    .state('wc.tab', {
                        url: '/tab',
                        views: {
                            'route1': {
                                templateUrl: 'views/route1.html',
                                controller: 'route1Ctrl'
                            },
                            'route2': {
                                templateUrl: 'views/route2.html',
                                controller: 'route2Ctrl'
                            },
                            'route3': {
                                templateUrl: 'views/route3.html',
                                controller: 'route3Ctrl'
                            },
                            'route4': {
                                templateUrl: 'views/route4.html',
                                controller: 'route4Ctrl'
                            },
                            'route5': {
                                templateUrl: 'views/route5.html',
                                controller: 'route5Ctrl'
                            }
                        }
                    })
                    // .state('wc.route1', {
                    //     url: "/route1",
                    //     templateUrl: "/views/route1.html",
                    //     controller: 'route1Ctrl'
                    // })
                    // .state('wc.route2', {
                    //     url: "/route2",
                    //     templateUrl: "/views/route2.html",
                    //     controller: 'route2Ctrl'
                    // })
                    // .state('wc.route3', {
                    //     url: "/route3",
                    //     templateUrl: "/views/route3.html",
                    //     controller: 'route3Ctrl'
                    // })
                    // .state('wc.route4', {
                    //     url: "/route4",
                    //     templateUrl: "/views/route4.html",
                    //     controller: 'route4Ctrl'
                    // })
                    // .state('wc.route5', {
                    //     url: "/route5",
                    //     templateUrl: "/views/route5.html",
                    //     controller: 'route5Ctrl'
                    // })
            });
            myapp.controller('tabDemoCtrl', function($scope, $http) {
                $scope.id;
                $scope.tapItems = [];
                $scope.refresh;
                $scope.model = {};
                $scope.ifShow = function(data, evt) {
                    $scope.id = data.id;
                    $scope.refresh();
                }
                $scope.chaceItem = function(data, evt) {
                    if ($.inArray(data, $scope.tapItems) === -1) {
                        $scope.ifShow(data, evt);
                        $scope.tapItems.push(data);
                    };
                }
                $scope.refresh = function() {
                    $http({
                        method: 'GET',
                        url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
                        headers: {
                            // SessionId: sessionStorage.getItem("SessionID")
                        },
                        params: '',
                        data: ''
                    }).success(function(data) {
                        $scope.model.test = data

                    }).error(function(data) {})
                }
                $scope.Routes = [{
                    Base: "wc.tab",
                    id: '1',
                    url: "route1",
                    Name: "路由1"
                }, {
                    Base: "wc.tab",
                    id: '2',
                    url: "route2",
                    Name: "路由2"
                }, {
                    Base: "wc.tab",
                    id: '3',
                    url: "route3",
                    Name: "路由3"
                }, {
                    Base: "wc.tab",
                    id: '4',
                    url: "route4",
                    Name: "路由4"
                }, {
                    Base: "wc.tab",
                    id: '5',
                    url: "route5",
                    Name: "路由5"
                }]
            });
            myapp.controller('route1Ctrl', function($scope, $http) {
                $scope.model = {}
                $http({
                    method: 'GET',
                    url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
                    headers: {
                        // SessionId: sessionStorage.getItem("SessionID")
                    },
                    params: '',
                    data: ''
                }).success(function(data) {
                    $scope.model.test = data

                }).error(function(data) {})

            })
            myapp.controller('route2Ctrl', function($scope) {
                $scope.model = {}

            })
            myapp.controller('route3Ctrl', function($scope) {
                $scope.model = {}

            })
            myapp.controller('route4Ctrl', function($scope) {
                $scope.model = {}

            })
            myapp.controller('route5Ctrl', function($scope) {
                $scope.model = {}

            })
            myapp.controller('MainFramesCtrl', function($scope) {
                
                $scope.ifShow = function(data, evt) {
                
                $scope.id = data.id;
                }
                $scope.frames = {
                    1: {
                        "id": 1,
                        "name": "Mela Sarkar",
                        "src": "frame.html#test",
                        "description": "A professional portfolio site for McGill University professor Mela Sarkar."
                    },

                    2: {
                        "id": 2,
                        "name": "Good Watching",
                        "src": "frame.html#test2",
                        "description": "Weekend experiment to help my mom decide what to watch."
                    },
                    3: {
                        "id": 3,
                        "name": "Good Watching",
                        "src": "frame.html#test5",
                        "description": "Weekend experiment to help my mom decide what to watch."
                    }
                };
            })