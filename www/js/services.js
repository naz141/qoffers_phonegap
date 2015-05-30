angular.module('starter.services', [])

myDemo.factory('photosFactory', function($http) {
 return{
    getPhotos : function() {
        return $http({
            url: 'http://qoffers.qatarperfectmedia.com/app/outlet_slider.php?retailer_id=1',
            method: 'GET'
        })
    }
 }
})
.factory('Items', function(){
	var items = [{
		id:1,
		cat:1,
		item_image:'img/product/1.jpg',
		title_ar:'البطاطا',
		title_en:'Potatoes 1Kg',
		expiry:'31-05-2015',
		oldprice: 'QR 2.50',
		newprice: 'QR 2.00'
	}, {
		id:2,
		cat:1,
		item_image:'img/product/2.jpg',
		title_ar:'الشعرية',
		title_en:'Indome Noodles 75gm x 20 + 1pc Cup Noodles',
		expiry:'31-05-2015',
		oldprice:'QR 20.00',
		newprice:'QR 19.25'
	}, {
		id:3,
		cat:1,
		item_image:'img/product/3.jpg',
		title_ar:'طحين',
		title_en:'QFM Flour No 2 5Kg +1Kg Free',
		expiry:'31-05-2015',
		oldprice:'QR 18.25',
		newprice:'QR 19.00'
		
	}, {
		id:4,
		cat:1,
		item_image:'img/product/4.jpg',
		title_ar:'بصل',
		title_en:'nion - India',
		expiry: '31-05-2015',
		oldprice:'QR 1.50',
		newprice:'QR 2.00'
		
	}, {
		id:5,
		cat:1,
		item_image:'img/product/5.jpg',
		title_ar:'الكرنب',
		title_en:'Cabbage - KSA ',
		expiry:'31-05-2015',
		oldprice:'QR 1.00',
		newprice:'QR 1.50'
		
	}, {
		id:6,
		cat:3,
		item_image:'img/product/6.jpg',
		title_ar:'الكرنب',
		title_en:'DSLR Nikkon Camera with 18-55 Lens',
		expiry:'31-05-2015',
		oldprice:'QR 999.00',
		newprice:'QR 1199.00'
	}, {
		id:7,
		cat:3,
		item_image:'img/product/7.jpg',
		title_ar:'الكرنب',
		title_en:'EPad 777T - 7" Tablet PC',
		expiry:'31-05-2015',
		oldprice:'QR 99.00',
		newprice:'QR 119.00'
	}];
	  return {
    all: function() {
      return items;
    },
    get: function(catId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(catId)) {
          return items[i];
        }
      }
      return null;
    }
  };

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    "id": 0,
    "name": "Safari Hyper Market",
    "lastText": "Salwa Rd, Doha, Qatar",
	"lastText2": "Ain Khalid, Doha",
	"lastText3": "Al Rayyan, Doha",
    "face": "img/logo/2.png"
  }, {
    "id": 1,
    "name": "Quality Hyper Market",
    "lastText": "Salwa Rd, Doha, Qatar",
	"lastText2": "Ain Khalid, Doha",
	"lastText3": "Al Rayyan, Doha",
    "face": "img/logo/1.png"
  }, {
    "id": 2,
    "name": "Park N Shop Hyper Market",
    "lastText": "Salwa Rd, Doha, Qatar",
	"lastText2": "Ain Khalid, Doha",
	"lastText3": "Al Rayyan, Doha",
	"face": "img/logo/3.png"
    
  }, {
    "id": 3,
    "name": "Ansar Gallery Hyper Market",
    "lastText": "Salwa Rd, Doha, Qatar",
	"lastText2": "Ain Khalid, Doha",
	"lastText3": "Al Rayyan, Doha",
	"face": "img/logo/4.png"
    
  },
  
  {
	  "id":4,
    "name": "Grand Mall Hyper Market",
    "lastText": "Salwa Rd, Doha, Qatar",
	"lastText2": "Ain Khalid, Doha",
	"lastText3": "Al Rayyan, Doha",
	"face": "img/logo/5.png"
  },
  {
    "id": 5,
    "name": "LuLu Hyper Market",
    "lastText": "Salwa Rd, Doha, Qatar",
	"lastText2": "Ain Khalid, Doha",
	"lastText3": "Al Rayyan, Doha",
	"face": "img/logo/6.png"
   
  },
  {
    "id": 6,
    "name": "Centerpoint Mall",
    "lastText": "Salwa Rd, Doha, Qatar",
	"lastText2": "Ain Khalid, Doha",
	"lastText3": "Al Rayyan, Doha",
	"face": "img/logo/7.png"
   
  },
  {
    "id": 7,
    "name": "LandMark Hyper Market",
    "lastText": "Salwa Rd, Doha, Qatar",
	"lastText2": "Ain Khalid, Doha",
	"lastText3": "Al Rayyan, Doha",
	"face": "img/logo/8.png"
   
  },
  {
    "id": 8,
    "name": "Grand Mart Hyper Market",
    "lastText": "Salwa Rd, Doha, Qatar",
	"lastText2": "Ain Khalid, Doha",
	"lastText3": "Al Rayyan, Doha",
	"face": "img/logo/9.png"

  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
