function conwSeq(str, n) {

    //var str='21';
    var count = 0;
    var newStr = '';
    var ns = str.toString();

    console.log(str);

    for (var j = 0; j < n; j++) {
        //alert(ns);

        for (var i = 0; i < ns.length; i++) {

            if (ns === '')
                break;
            if (ns.length === 1) {

                newStr += ('1' + ns);
            }
            else if (ns[i] !== ns[i + 1]) {
                newStr += ('1' + ns[i]);
            }

            else if (ns[i] === ns[i + 1]) {
                count = 1;
                while (ns[i] === ns[i + 1]) {
                    count++;
                    ns = ns.substr(1);
                }
                newStr += (count + ns[i]);
            }
            count = 0;
        }
        console.log(newStr);

        ns = newStr;
        newStr = '';
    }
}
conwSeq(2,4);