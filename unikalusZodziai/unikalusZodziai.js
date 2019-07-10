function unikalusZodziai( list ) {
    if ( list === undefined ) {
        return 'Klaida: nera duomenu';
    }
    if ( !Array.isArray(list) ) {
        return 'Klaida: blogas duomenu tipas';
    }

    let unique = [];

    list.forEach( tagList => {
        if ( !Array.isArray(tagList) ) {
            return;
        }
        tagList.forEach( tag => {
            if ( typeof(tag) !== 'string' ) {
                return;
            }
            if ( tag === '' ) {
                return;
            }
            if ( unique.indexOf( tag ) === -1 ) {
                unique.push( tag );
            }
        })
    })

    return unique;
}

module.exports = unikalusZodziai;