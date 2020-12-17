(function(){
    var app = angular.module('starter.controllers',[])

    app.controller('LogCtrl', function($scope, $http, NoteStore, Toggle){
        $scope.users=[];
        $scope.note = { id:'', pass:''};
        $scope.res=0;
        $scope.guide='login';
        $scope.errorMsg='log0';
        $http.get('http://aulal.org:1880/EdUser')
                    .success(function(users){
                    console.log(users);
                    angular.forEach(users, function(user){
                            $scope.users.push(user);
                        });
                    });
        $scope.doRefresh=function(){
            $http.get('http://aulal.org:1880/EdUser')
                    .success(function(users){
                    console.log(users);
                    angular.forEach(users, function(user){
                        users=[];
                        $scope.users.push(user);
                    });
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
        $scope.log = function(){
            $scope.res=NoteStore.signInVerify($scope.note, $scope.users);
            if($scope.res===1){
                $scope.guide='tab/labs';
                $scope.note = { id:'', pass:''};
            } else {
                $scope.note = { id:'', pass:''};
                $scope.errorMsg='log1';
                }
        };
        $scope.showPass = function() {
          Toggle.togglePass("pass1");
        };
    });
    app.controller('RegisterCtrl', function($scope, $http, NoteStore, Toggle, ChangeHTML){
        $scope.users=[];
        $scope.note = { id:'', pass:''};
        $scope.guide='login/register';
        $scope.msgStyle='log0';
        $scope.successMsg="Su cuenta fue creada con éxito, regrese a la página de ingreso";
        $scope.errorMsg="El nombre de usuario ya existe, intente de nuevo";
        $scope.voidMsg="Nombre de usuario o contraseña inválidos";
        $http.get('http://aulal.org:1880/EdUser')
                    .success(function(users){
                    console.log(users);
                    angular.forEach(users, function(user){
                            $scope.users.push(user);
                        });
                    });
        $scope.doRefresh=function(){
            $http.get('http://aulal.org:1880/EdUser')
                    .success(function(users){
                    console.log(users);
                    angular.forEach(users, function(user){
                        users=[];
                        $scope.users.push(user);
                    });
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
        $scope.signUp = function(){
            var passValid=NoteStore.stringValid($scope.note.pass, 'high');
            var userValid=NoteStore.stringValid($scope.note.id, 'low');

            if (NoteStore.registerVerify($scope.note, $scope.users, passValid, userValid)===1){
                let postData={"username":$scope.note.id, "password":$scope.note.pass};
                $http.post('http://aulal.org:1880/EdNewUser', angular.toJson(postData))
                .success(function(response){
                    console.log(response);
                    $scope.note = { id:'', pass:''};
                    $scope.msgStyle='reg1';
                    ChangeHTML.innerContent("regMsg", $scope.successMsg);
                })
                .error(function(){
                    $scope.msgStyle='reg1';
                    ChangeHTML.innerContent("regMsg", "error de conexión con el servidor");
                });
                $scope.doRefresh();
            } else if (NoteStore.registerVerify($scope.note, $scope.users, passValid, userValid)===0) {
                $scope.note = { id:'', pass:''};
                $scope.msgStyle='log1';
                ChangeHTML.innerContent("regMsg", $scope.errorMsg);
                $scope.doRefresh();
            } else if (NoteStore.registerVerify($scope.note, $scope.users, passValid, userValid)===2){
                $scope.note = { id:'', pass:''};
                $scope.msgStyle='log1';
                ChangeHTML.innerContent("regMsg", $scope.voidMsg);
                $scope.doRefresh();
            }

        };
        $scope.showPass = function() {
          Toggle.togglePass("pass2");
        };
    });

    app.controller('LabsCtrl', function($scope, Labs){
        $scope.labs=Labs.all();
    });
    app.controller('LabDetailCtrl', function($scope, $stateParams, Labs){
        $scope.lab = Labs.get($stateParams.labId);
    });

    app.controller('WebViewCtrl', function($scope, Labs){
        $scope.labs = Labs.all();
        $scope.openLink = function(url){
            window.open(url, '_blank', 'hideurlbar=yes', 'zoom=no', 'hidenavigationbuttons=yes');
        };
    });
}());
