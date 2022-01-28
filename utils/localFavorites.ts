

const toggleFavorite = ( id: number ) => {

    if( typeof window === 'undefined') return; // Estamos en el lado del servidor

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');
    
    if  ( favorites.includes(id) ){
        favorites = favorites.filter( pokeId => pokeId !== id );
    } else {
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify( favorites ));
}

const existInFavorites = ( id: number ): boolean => {
    
    if( typeof window === 'undefined') return false;
    
    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    return favorites.includes( id );
}

const pokemons = (): number[] => {
    if( typeof window === 'undefined') return [];

    return JSON.parse( localStorage.getItem('favorites') || '[]' );
}



export {
    toggleFavorite,
    existInFavorites,
    pokemons,
}