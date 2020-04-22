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
    // console.log('button has been clicked');
    $('#modalWaiter').removeClass('hidden').addClass('displayFlex');
    // $('#modalExample1').addClass('flex');
    $('body').addClass('noScroll');
});

$('#modalClose').click(function(){
    // console.log('close button has been clicked');
    $('#modalWaiter').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#callWaiter1').click(function(){
    // console.log('button has been clicked');
    $('#modalWaiter').removeClass('hidden').addClass('displayFlex');
    // $('#modalExample1').addClass('flex');
    $('body').addClass('noScroll');
});

$('#modalClose').click(function(){
    // console.log('close button has been clicked');
    $('#modalWaiter').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#navListToggleButton').click(function(){
    // console.log('clicked');
    // $('#navList').toggle();
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
    // console.log('button has been clicked');
    $('#modalAddOrder').removeClass('hidden').addClass('displayFlex');
    // $('#modalExample1').addClass('flex');
    $('body').addClass('noScroll');
});

$('#modalCloseOrder').click(function(){
    // console.log('close button has been clicked');
    $('#modalAddOrder').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#addToOrder').click(function(){
    // console.log('close button has been clicked');
    $('#modalAddOrder').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#navListToggleButton').click(function(){
    // console.log('clicked');
    // $('#navList').toggle();
    $('#navList').slideToggle(300);
})


//  place order
$('#placeOrder').click(function(){
    // console.log('button has been clicked');
    $('#modalOrderPlaced').removeClass('hidden').addClass('displayFlex');
    // $('#modalExample1').addClass('flex');
    $('body').addClass('noScroll');
});

$('#modalCloseOrderPlaced').click(function(){
    // console.log('close button has been clicked');
    $('#modalOrderPlaced').addClass('hidden').removeClass('displayFlex');
    $('body').removeClass('noScroll');
})

$('#placeOrder').click(function(){
    $('#viewOrder').slideToggle(300);
});


// $('#addToOrder').click(function(){
//     // console.log('close button has been clicked');
//     $('#modalOrderPlaced').addClass('hidden').removeClass('displayFlex');
//     $('body').removeClass('noScroll');
// })
