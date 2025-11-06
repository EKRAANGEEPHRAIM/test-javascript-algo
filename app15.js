function regexTime(str){

    var regex = /[%-/0-9] /g;
    return str.replace(regex, '');
}
