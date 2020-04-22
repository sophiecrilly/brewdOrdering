// hamburger nav
$('#navListButton').click(function(){
    $('#navList').slideToggle(300);
});

$('#navListButton').click(function(){
    $('#navButtons').toggle();
});

$('#closeButton').click(function(){
    $('#navButtons').toggle();
});

$('#closeButton').click(function(){
    $('#navList').slideToggle(300);
});


// view order nav
$('#viewOrderButton').click(function(){
    $('#viewOrder').slideToggle(300);
});

$('#viewOrderButton').click(function(){
    $('#navButtons').toggle();
});

$('#closeButtonOrder').click(function(){
    $('#navButtons').toggle();
});
//
$('#closeButtonOrder').click(function(){
    $('#viewOrder').slideToggle(300);
});


// modals

// waiter
$('#callWaiter').click(function(){
    $('#modalWaiter').removeClass('hidden').addClass('displayFlex');
    $('body').addClass('noScroll');
});

$('#modalClose').click(function(){
    $('#modalWaiter').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#callWaiter1').click(function(){
    $('#modalWaiter').removeClass('hidden').addClass('displayFlex');
    $('body').addClass('noScroll');
});

$('#modalClose').click(function(){
    $('#modalWaiter').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#navListToggleButton').click(function(){
    $('#navList').slideToggle(300);
})

$('#callWaiter').click(function(){
    $('#navButtons').toggle();
});

$('#callWaiter').click(function(){
    $('#navList').slideToggle(300);
});

$('#callWaiter1').click(function(){
    $('#navButtons').toggle();
});

$('#callWaiter1').click(function(){
    $('#navList').slideToggle(300);
});

// add to order
$('#addOrder').click(function(){
    $('#modalAddOrder').removeClass('hidden').addClass('displayFlex');
    $('body').addClass('noScroll');
});

$('#modalCloseOrder').click(function(){
    $('#modalAddOrder').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#addToOrder').click(function(){
    $('#modalAddOrder').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#navListToggleButton').click(function(){
    $('#navList').slideToggle(300);
})


//  place order
$('#placeOrder').click(function(){
    $('#modalOrderPlaced').removeClass('hidden').addClass('displayFlex');
    $('body').addClass('noScroll');
});

$('#modalCloseOrderPlaced').click(function(){
    $('#modalOrderPlaced').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#placeOrder').click(function(){
    $('#viewOrder').slideToggle(300);
});
