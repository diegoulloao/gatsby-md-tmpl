/**
 *
 *  Functions: [Page] Tiendas
 *  @author diegoulloao
 *
 */

export const filterStores = ( keyword, filteredStores ) => {
    if ( !keyword ) {
        return filteredStores
    }

    const keywords = keyword.toLowerCase().split(' ').filter( s => s )

    keywords.forEach( keyword => {
        switch ( true ) {
           // searched by keyword
            case /^@/.test( keyword ):
                filteredStores = filteredStores.filter(
                    store => store.keywords.some(
                        $keyword => $keyword.includes( keyword.replace('@', '') ) || keyword.includes( $keyword )
                    )
                )

                break

            // searched by category
            case /^#/.test( keyword ):
                filteredStores = filteredStores.filter(
                    store => store.category.includes( keyword.replace('#', '') ) || keyword.includes( store.category )
                )
                
                break

             // searched by name
            default:
                filteredStores = filteredStores.filter(
                    store => store.name.toLowerCase().split(' ').some(
                        subname => subname.includes( keyword ) || keyword.includes( subname )
                    )
                )
        }
    })


    return filteredStores
}

