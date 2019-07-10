function skaitmenys( skaicius ) {
    if ( skaicius === undefined ) {
        return 'Klaida: truksta reiksmes';
    }
    if ( typeof( skaicius ) !== 'number' ) {
        return 'Klaida: blogas duomenu tipas';
    }
    if ( !isFinite(skaicius) ) {
        return 'Klaida: ne tikras skaicius';
    }

    let count = 0;

    let text = Number(skaicius).toLocaleString().split(',').join('');
    count = text.length;

    if ( text.indexOf('.') >= 0 ) {
        count--;
    }
    if ( skaicius < 0 ) {
        count--;
    }

    return count;
}

module.exports = skaitmenys;