angular.module('starter.controllers', ["ngStorage"])

.controller('storeCntrl', function($scope, $stateParams, $http, $ionicLoading) {
	$ionicLoading.show({    
	template: '<ion-spinner icon="crescent"/>', 
    maxWidth: 200,
    showBackdrop: true 
	});
	
 $http.post("http://qoffers.qatarperfectmedia.com/app/outlets.php").success(function(outlets){		
	   $scope.all_data = outlets;
	   $scope.idid = outlets[0].outlet_id;
	   $ionicLoading.hide();	   
       });
})

.controller('storeDetailsCtrl', function($scope, $stateParams, $http, $ionicLoading,$localStorage) {
	$scope.img_data = [];
	$ionicLoading.show({    
	template: '<ion-spinner icon="crescent"/>',
    maxWidth: 200,
    showBackdrop: true
	});
	$localStorage.retailer = $stateParams.outletId;
 $http.post("http://qoffers.qatarperfectmedia.com/app/branches.php?outlet_id="+$stateParams.outletId).success(function(outlets){		
	   $scope.data = outlets; 
	   $scope.outlet_name =outlets[0].outlet_name;
	   $ionicLoading.hide();	   
       });
})
.controller('storeDealsCtrl', function($scope, $stateParams, $http, $ionicLoading,$interval, $ionicSlideBoxDelegate,$localStorage) {
	
  $ionicLoading.show({    
	template: '<ion-spinner icon="crescent"/>',
    maxWidth: 200,
    showBackdrop: true
	});
$http.post("http://qoffers.qatarperfectmedia.com/app/category.php").success(function(categories){
	$scope.category = categories;});	
	
$scope.changeCat = function($catId) {	
		if ($catId == 0)
		{ loadOffers(); } else {
			$ionicLoading.show({    
	template: '<ion-spinner icon="crescent"/>',
    maxWidth: 200,
    showBackdrop: true
	});
		$http.post("http://qoffers.qatarperfectmedia.com/app/filter.php?branch_id="+$stateParams.branch_id+"&catid="+$catId).success(function(offer_list){
		$scope.data = offer_list;
		$ionicLoading.hide();
}); }
		}	

$scope.retailer	= null;	
var loadOffers = function(){


	$http.get("http://qoffers.qatarperfectmedia.com/app/outlet_offers.php?branch_id="+$stateParams.branch_id, {header : {'Content-Type' : 'text/html; charset=UTF-8'}
}).success(function(offer_list){		
	   $scope.data = offer_list;
	   $scope.outlet_name =offer_list[0].outlet_name;
	   $scope.retailer_id =offer_list[0].retailer_id;
	   
	   });
}
loadOffers(); 	
$scope.slides = [];

$http.post("http://qoffers.qatarperfectmedia.com/app/outlet_slider.php?retailer_id="+$localStorage.retailer).success(function(sliders){		
	 
	 //  $scope.img_data.push(sliders)
	   $scope.slides = sliders; 
	    $ionicSlideBoxDelegate.$getByHandle('image-viewer').update();
	   $ionicLoading.hide();	   
       });
	   

})
			
			
			 
.controller('AccountCtrl', function($scope) {
  
})
			 
.controller('sampleCtrl', function($scope) {
  
});
