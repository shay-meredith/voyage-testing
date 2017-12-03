const cardInfo = '<ul><li>Name: Jane Doe</li><li>Profession: Photographer</li><li>Location: Arizona</li><li>Interests: Music, hiking, archery, hanging out with friends, spending time with family</li></ul>';

$(document).ready(function(){
    $('.panel').click(function (e) {
        $(this).toggleClass('flipped');
      });
    $('.panel').hover(function(){
        $('.info').empty().append(function(){
            return cardInfo;
        })}, function() {
        $('.info').empty().append(function(){
            return 'Card Info';
        });
    });
    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});