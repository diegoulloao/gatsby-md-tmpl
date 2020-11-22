/**
 *
 *  Template: Tiendas
 *  @author diegoulloao
 *
 */
import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Functions
import { filterStores } from "../functions/pages/tiendas"

// Stores
import storesList from "../data/stores.yaml"


/**
 *  Tiendas Template Component
 */
const Tiendas = () => {
    // Resources
    const stores = Object.values( storesList )

    // State
    const [ filteredStores, setFilteredStores ] = useState( stores )
    const [ focusedStore, setFocusedStore ] = useState( stores[0] )
    const [ searchString, setSearchString ] = useState("")

    return (
        <Layout>
            <SEO title="Tiendas" />

            <h1>Tiendas</h1>
            
            {/* Search input */}
            <form>
                <label htmlFor="search">Búsqueda:</label>
                <input
                    type="text"
                    id="search"
                    value={searchString}
                    onChange={ ({ target: {value:searchString} }) => {
                        setSearchString( searchString )
                        setFilteredStores( filterStores(searchString, stores) )
                    }}
                />
                <small>&nbsp;Puedes indicar una palabra, @palabra-clave o #categoría</small>
            </form>

            {/* Store list */}
            <div id="store-list-container" style={{ overflow:"auto" }}>
                <ul id="store-list">
                    {
                        ( !filteredStores.length && 'No hay resultados' ) || filteredStores.map( store => (
                            <li className="store-item" style={{ float:"left", marginRight:30 }} key={store.id}>
                                <a href={`#${store.slug}`} onClick={ () => setFocusedStore(stores[store.id]) }> {store.name} </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Store detail */}
            <div style={{ marginTop:40 }}>
                <h3>{focusedStore.name}</h3>

                <ul>
                    <li>Local: {focusedStore.local}</li>
                    <li>Horario: {focusedStore.opening}</li>
                    <li>Categoría: {focusedStore.category}</li>
                    <li>Descripción: <br /> {focusedStore.description}</li>
                </ul>
            </div>
        </Layout>
    )
}


export default Tiendas
