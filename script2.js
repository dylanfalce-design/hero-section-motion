(function(){
    var words = [
        ' Effective Communicator',
        ' Leadership',
        ' Problem Solving',
        ' Reliable',
        
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 2050);
      
})();