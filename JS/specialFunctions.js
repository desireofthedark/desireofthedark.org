var SepNum = function(text) {
    var re_text = String(text);
    var final_val = '';
    var main;
    for (var i = 0; i < re_text.length; i++) {
        main = re_text[i];
        if (main == "0" || main == '1' || main == '2' || main == '3' || main == '4' || main == '5' || main == '6' || main == '7' || main == '8' || main == '9') {
            final_val += main;
        }
    }
    return (final_val);
}