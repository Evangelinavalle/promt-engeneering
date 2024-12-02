//
//  PokedexView.swift
//  Pokedex
//
//  Created by 290023385 on 5/29/24.
//

import SwiftUI

struct PokedexView: View {
    
    var allPokemon: [Pokemon] {
        return PokemonAPI.getPokemon()
    }
    
    var body: some View {
        NavigationView {
            List{
                ForEach(allPokemon) { pokemon in
                    PokemonRow(pokemon: pokemon)
                }
                //MARK: Here add a List component
                //MARK: Inside the list component add a ForEach component that iterates over the allPokemon list seen above and uses a PokemonRow for each pokemon
                //MARK: To the List component, add a .navigationTitle() modifier to give the screen a proper title
            }
            .navigationTitle("pokeman king")
        }
    }
}

struct PokemonRow: View {
    let pokemon: Pokemon

    var body: some View {
        HStack {
            //MARK: Here add the image of the pokemon and the pokemon name
            AsyncImage(url: URL(string: pokemon.url), content: { img in
                img
                    .resizable()
                    .frame(width: 50, height: 50, alignment: .leading)
            }, placeholder: {
                Rectangle()
                    .frame(width: 50, height: 50, alignment: .leading)
            })
            
            Text(pokemon.name)
        }
    }
}

#Preview {
    PokedexView()
}
