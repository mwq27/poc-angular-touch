poc-angular-touch
=================

Just some proof of concepts for using the $swipe service in AngularJS, for learning purposes only
## $swipe service
To reiterate what is in the Angular Docs, the $swipe service is there to handle touch functionality in your angular app.

$swipe has one method, __bind()__.  This method takes an element, and then an object with the 4 touch handler functions.
The docs : http://docs.angularjs.org/api/ngTouch.$swipe

It looks like this:
```
$swipe.bind(elem, {
/*
	Each handler receives an object with the x and y coordinates : { x : 123, y : 456 }
*/
	start: function(coords){
	},
	move : function(coords){

	},
	end : function(coords){

	},
	cancel: function(coords){

	}
});
```

## Drag and Drop
I've added a few libraries to get drag and drop to work on mobile in an angular app.
* __jquery-ui__ for the built in drag and drop support
* __angular-gestures__ for the Hammer support on mobile.  We can do swipe, touch and drag, etc...
* __angular-dragdrop__ for an angular module written here : http://codef0rmer.github.com/angular-dragdrop/