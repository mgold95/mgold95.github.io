function calcTaxes() {
    var filing = parseInt($("input[name='filing']:checked").val());
    var income = parseFloat($("#income").val());
    amt1 = calcOldAmt(filing, income);
    rate1 = (amt1 / income) * 100;
    amt2 = calcNewAmt(filing, income);
    rate2 = (amt2 / income) * 100;
    if (Number.isNaN(amt1)) {
        amt1 = 0;
        rate1 = 0;
    }
    if (Number.isNaN(amt2)) {
        amt2 = 0;
        rate2 = 0;
    }
    $("#rate1").html(rate1.toFixed(1) + "%");
    $("#amt1").html("$" + Math.round(amt1).toLocaleString());
    $("#rate2").html(rate2.toFixed(1) + "%");
    $("#amt2").html("$" + Math.round(amt2).toLocaleString());
}

function calcOldAmt(f, inc) {
    var tab = [
        [0.10,  0.15,  0.25,   0.28,   0.33,   0.35,   0.40],     // tax rates
        [9275,  37650, 91150,  190150, 413350, 415050, Infinity], // upper bounds for single
        [18550, 75300, 151900, 231450, 413350, 466950, Infinity], // upper bounds for married
        [13250, 50400, 130150, 210800, 413350, 441000, Infinity]  // upper bounds for HoH
    ];
    var tot = 0.0;
    for (var i = 0; i < 7; i++) {
        // if above this tax bracket
        // then amount - last bracket max * rate gets added
        if (inc > tab[f][i]) {
            if (i == 0) {
                tot += tab[f][i] * tab[0][i];
            } else {
                tot += (tab[f][i] - tab[f][i-1]) * tab[0][i];
            }
        } else {
            // if we are in tax bracket
            // add contribution of income - last bracket max * rate
            // then return
            if (i == 0) {
                tot += inc * tab[0][i];
            } else {
                tot += (inc - tab[f][i-1]) * tab[0][i];
            }
            return tot;
        }
    }
    return 0;
}

function calcNewAmt(f, inc) {
    var tab = [
        [0.12,  0.25,   0.33],     // tax rates
        [37500, 112500, Infinity], // upper bounds for single
        [75000, 225000, Infinity], // upper bounds for married
        [37500, 112500, Infinity]  // upper bounds for HoH
    ];
    var tot = 0.0;
    for (var i = 0; i < 3; i++) {
        // if above this tax bracket
        // then amount - last bracket max * rate gets added
        if (inc > tab[f][i]) {
            if (i == 0) {
                tot += tab[f][i] * tab[0][i];
            } else {
                tot += (tab[f][i] - tab[f][i-1]) * tab[0][i];
            }
        } else {
            // if we are in tax bracket
            // add contribution of income - last bracket max * rate
            // then return
            if (i == 0) {
                tot += inc * tab[0][i];
            } else {
                tot += (inc - tab[f][i-1]) * tab[0][i];
            }
            return tot;
        }
    }
    return 0;
}
