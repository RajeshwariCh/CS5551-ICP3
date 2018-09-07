angular.module('audio', [])
    .controller('audioctrl', function($scope, $sce,$http) {
        $scope.visible = false;
        $scope.getaudio = function () {


            $http.get("https://api.nutritionix.com/v1_1/search/" + $scope.Ccode + "?results=0:1&fields=*&appId=9b957ac3&appKey=e50e0ceeb9749bef58010d5412027c35").then(function (info) {
                console.log(info) ;
                console.log(info.data.hits.length);
                console.log($scope.Ccode);
                $scope.temp = info.data.hits;
                //$scope.temp1 = info.data.hits[0].fields.nf_cholesterol;
                $scope.visible = true;
                var sound = new Audio("https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=ec7521a4-c213-41a7-8d5b-ac4ca7588a00&password=iI3Jwg08VlsZ&text=" + $scope.Ccode);
                sound.play();
            });


        }

    });