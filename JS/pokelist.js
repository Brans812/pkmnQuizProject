complete_info_api()

function complete_info_api(){
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=898"
  fetch (URL) //hace la solicitud
    .then((promise) => promise.json()) //convierte a json
    .then( 
        function(result)
        {
            pokemon_list(result)
        }
)

}


function pokemon_list(data){
  let pokemon = []
  for (let index = 0; index < data.results.length; index++) {
    pokemon[index] = data.results[index].name;
    
  }
  pokemon_sprites(pokemon)
}

function pokemon_sprites(data){
  const div_principal = document.getElementById("pokemon_list")
  for (let index = 0; index < data.length; index++) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${data[index]}`
    fetch (URL) //hace la solicitud
      .then((promise) => promise.json()) //convierte a json
      .then( 
          function(result)
          {
              const div_pkmn_btn = document.createElement("div")
              const btn_pkmn = document.createElement("button")
              btn_pkmn.className = "pokemon"
              btn_pkmn.addEventListener("click",leer,false)
              const sprite = document.createElement("img")
              sprite.className = "pkmn_img"
              sprite.src = result.sprites.front_default
              sprite.alt = "MissingNo"
              const pkmn_name = document.createElement("p")
              pkmn_name.className = "pkmn_name"
              pkmn_name.innerHTML = result.name

              div_principal.appendChild(div_pkmn_btn)
              div_pkmn_btn.appendChild(btn_pkmn)
              btn_pkmn.appendChild(sprite)
              btn_pkmn.appendChild(pkmn_name)
              
          }
    )

    
  }
} 

function single_pokemon_api(api_direction){
  const URL = api_direction
  fetch (URL) //hace la solicitud
    .then((promise) => promise.json()) //convierte a json
    .then( 
        function(result)
        {
            pokemon_get_info(result)
        }
)

}

function pokemon_get_info(name){
  console.log(name)
  const div_principal = document.getElementById("pokemon_list")
  const subtitle = document.getElementById("types_subtitle")
  const title = document.getElementById("header")
  title.innerHTML = name.name
  for (let index = 0; index < name.types.length; index++) {
    console.log(index)
    const URL = name.types[index].type.url
    fetch (URL) //hace la solicitud
      .then((promise) => promise.json()) //convierte a json
      .then( 
          function(result)
          {
            const type_btn = document.createElement("button")
            type_btn.className = "types_btn"
            const type_p = document.createElement("p")
            type_p.className = "types_p"
            type_p.innerHTML = result.name
            if (result.name == "normal") {
              type_btn.style.backgroundColor = "white"
            }
            if (result.name == "fighting") {
              type_btn.style.backgroundColor = "red"
            }
            if (result.name == "flying") {
              type_btn.style.backgroundColor = "lightblue"
            }
            if (result.name == "poison") {
              type_btn.style.backgroundColor = "purple"
            }
            if (result.name == "ground") {
              type_btn.style.backgroundColor = "brown"
            }
            if (result.name == "rock") {
              type_btn.style.backgroundColor = "burlywood"
            }
            if (result.name == "bug") {
              type_btn.style.backgroundColor = "lightgreen"
            }
            if (result.name == "ghost") {
              type_btn.style.backgroundColor = "violet"
            }
            if (result.name == "steel") {
              type_btn.style.backgroundColor = "gray"
            }
            if (result.name == "fire") {
              type_btn.style.backgroundColor = "orange"
            }
            if (result.name == "water") {
              type_btn.style.backgroundColor = "blue"
            }
            if (result.name == "grass") {
              type_btn.style.backgroundColor = "green"
            }
            if (result.name == "electric") {
              type_btn.style.backgroundColor = "yellow"
            }
            if (result.name == "psychic") {
              type_btn.style.backgroundColor = "palevioletred"
            }
            if (result.name == "ice") {
              type_btn.style.backgroundColor = "lightseagreen"
            }
            if (result.name == "dragon") {
              type_btn.style.backgroundColor = "rebeccapurple"
            }
            if (result.name == "dark") {
              type_btn.style.backgroundColor = "rgb(32, 32, 32)"
            }
            if (result.name == "fairy") {
              type_btn.style.backgroundColor = "pink"
            }
            subtitle.innerHTML = "Pokemon Types:"
            subtitle.className = "subtitle"
            div_principal.appendChild(type_btn)
            type_btn.appendChild(type_p)


              console.log(name.types)
          }
  )
    
    
    
  }
  for (let index = 0; index < name.types.length; index++) {
    weakness_api(name.types[index].type.name)
    
  }
  

}




function delete_data(id){
  const data = document.getElementById(id)
  if(data !== null){
    while (data.hasChildNodes()){
        data.removeChild(data.lastChild);
    }
}
  
}

function leer(event){
  // window.location.href = "index.html";
  delete_data("pokemon_list")
  single_pokemon_api(`https://pokeapi.co/api/v2/pokemon/${event.path[1].children[1].innerHTML}`)
  
}

function leer_2(){
  const search_text = document.getElementById("pokemon_search")
  search = search_text.value.toLowerCase()
  delete_data("pokemon_list")
  delete_data("weakness_list")
  delete_data("half_damage_list")
  delete_data("resistance_list")
  single_pokemon_api(`https://pokeapi.co/api/v2/pokemon/${search}`)

}
  
function weakness_api(type){
  const URL = `https://pokeapi.co/api/v2/type/${type}`
  fetch (URL) //hace la solicitud
    .then((promise) => promise.json()) //convierte a json
    .then( 
        function(result)
        {
            get_type_weakness(result)
        }
    )
      }

function get_type_weakness(type){
  const list = type.damage_relations.double_damage_from
  const div_principal = document.getElementById("weakness_list")
  const subtitle = document.getElementById("weakness_subtitle")
  for (let index = 0; index < list.length; index++) {
      const URL = `https://pokeapi.co/api/v2/type/${list[index].name}`
      fetch (URL) //hace la solicitud
        .then((promise) => promise.json()) //convierte a json
        .then( 
            function(result)
            {
              const type_btn = document.createElement("button")
              type_btn.className = "types_btn"
              if (result.name == "normal") {
                type_btn.style.backgroundColor = "white"
              }
              if (result.name == "fighting") {
                type_btn.style.backgroundColor = "red"
              }
              if (result.name == "flying") {
                type_btn.style.backgroundColor = "lightblue"
              }
              if (result.name == "poison") {
                type_btn.style.backgroundColor = "purple"
              }
              if (result.name == "ground") {
                type_btn.style.backgroundColor = "brown"
              }
              if (result.name == "rock") {
                type_btn.style.backgroundColor = "burlywood"
              }
              if (result.name == "bug") {
                type_btn.style.backgroundColor = "lightgreen"
              }
              if (result.name == "ghost") {
                type_btn.style.backgroundColor = "violet"
              }
              if (result.name == "steel") {
                type_btn.style.backgroundColor = "gray"
              }
              if (result.name == "fire") {
                type_btn.style.backgroundColor = "orange"
              }
              if (result.name == "water") {
                type_btn.style.backgroundColor = "blue"
              }
              if (result.name == "grass") {
                type_btn.style.backgroundColor = "green"
              }
              if (result.name == "electric") {
                type_btn.style.backgroundColor = "yellow"
              }
              if (result.name == "psychic") {
                type_btn.style.backgroundColor = "palevioletred"
              }
              if (result.name == "ice") {
                type_btn.style.backgroundColor = "lightseagreen"
              }
              if (result.name == "dragon") {
                type_btn.style.backgroundColor = "rebeccapurple"
              }
              if (result.name == "dark") {
                type_btn.style.backgroundColor = "rgb(32, 32, 32)"
              }
              if (result.name == "fairy") {
                type_btn.style.backgroundColor = "pink"
              }
              const type_p = document.createElement("p")
              type_p.className = "types_p"
              type_p.innerHTML = result.name
              subtitle.innerHTML = "Double damage from:"
              subtitle.className = "subtitle"

              div_principal.appendChild(type_btn)
              type_btn.appendChild(type_p)
              
                
            }
      )
      
  }
  get_half_damage(type)
}


function get_half_damage(type){
  const list = type.damage_relations.half_damage_from
  const div_principal = document.getElementById("half_damage_list")
  const subtitle = document.getElementById("half_damage_subtitle")
  for (let index = 0; index < list.length; index++) {
      const URL = `https://pokeapi.co/api/v2/type/${list[index].name}`
      fetch (URL) //hace la solicitud
        .then((promise) => promise.json()) //convierte a json
        .then( 
            function(result)
            {
              const type_btn = document.createElement("button")
              type_btn.className = "types_btn"
              if (result.name == "normal") {
                type_btn.style.backgroundColor = "white"
              }
              if (result.name == "fighting") {
                type_btn.style.backgroundColor = "red"
              }
              if (result.name == "flying") {
                type_btn.style.backgroundColor = "lightblue"
              }
              if (result.name == "poison") {
                type_btn.style.backgroundColor = "purple"
              }
              if (result.name == "ground") {
                type_btn.style.backgroundColor = "brown"
              }
              if (result.name == "rock") {
                type_btn.style.backgroundColor = "burlywood"
              }
              if (result.name == "bug") {
                type_btn.style.backgroundColor = "lightgreen"
              }
              if (result.name == "ghost") {
                type_btn.style.backgroundColor = "violet"
              }
              if (result.name == "steel") {
                type_btn.style.backgroundColor = "gray"
              }
              if (result.name == "fire") {
                type_btn.style.backgroundColor = "orange"
              }
              if (result.name == "water") {
                type_btn.style.backgroundColor = "blue"
              }
              if (result.name == "grass") {
                type_btn.style.backgroundColor = "green"
              }
              if (result.name == "electric") {
                type_btn.style.backgroundColor = "yellow"
              }
              if (result.name == "psychic") {
                type_btn.style.backgroundColor = "palevioletred"
              }
              if (result.name == "ice") {
                type_btn.style.backgroundColor = "lightseagreen"
              }
              if (result.name == "dragon") {
                type_btn.style.backgroundColor = "rebeccapurple"
              }
              if (result.name == "dark") {
                type_btn.style.backgroundColor = "rgb(32, 32, 32)"
              }
              if (result.name == "fairy") {
                type_btn.style.backgroundColor = "pink"
              }
              const type_p = document.createElement("p")
              type_p.className = "types_p"
              type_p.innerHTML = result.name
              subtitle.innerHTML = "Half damage from:"
              subtitle.className = "subtitle"

              div_principal.appendChild(type_btn)
              type_btn.appendChild(type_p)
              
                
            }
      )
      
  }
  get_resistances(type)
}
function get_resistances(type){
  const list = type.damage_relations.no_damage_from
  const div_principal = document.getElementById("resistance_list")
  const subtitle = document.getElementById("resistance_subtitle")
  for (let index = 0; index < list.length; index++) {
      const URL = `https://pokeapi.co/api/v2/type/${list[index].name}`
      fetch (URL) //hace la solicitud
        .then((promise) => promise.json()) //convierte a json
        .then( 
            function(result)
            {
              const type_btn = document.createElement("button")
              type_btn.className = "types_btn"
              if (result.name == "normal") {
                type_btn.style.backgroundColor = "white"
              }
              if (result.name == "fighting") {
                type_btn.style.backgroundColor = "red"
              }
              if (result.name == "flying") {
                type_btn.style.backgroundColor = "lightblue"
              }
              if (result.name == "poison") {
                type_btn.style.backgroundColor = "purple"
              }
              if (result.name == "ground") {
                type_btn.style.backgroundColor = "brown"
              }
              if (result.name == "rock") {
                type_btn.style.backgroundColor = "burlywood"
              }
              if (result.name == "bug") {
                type_btn.style.backgroundColor = "lightgreen"
              }
              if (result.name == "ghost") {
                type_btn.style.backgroundColor = "violet"
              }
              if (result.name == "steel") {
                type_btn.style.backgroundColor = "gray"
              }
              if (result.name == "fire") {
                type_btn.style.backgroundColor = "orange"
              }
              if (result.name == "water") {
                type_btn.style.backgroundColor = "blue"
              }
              if (result.name == "grass") {
                type_btn.style.backgroundColor = "green"
              }
              if (result.name == "electric") {
                type_btn.style.backgroundColor = "yellow"
              }
              if (result.name == "psychic") {
                type_btn.style.backgroundColor = "palevioletred"
              }
              if (result.name == "ice") {
                type_btn.style.backgroundColor = "lightseagreen"
              }
              if (result.name == "dragon") {
                type_btn.style.backgroundColor = "rebeccapurple"
              }
              if (result.name == "dark") {
                type_btn.style.backgroundColor = "rgb(32, 32, 32)"
              }
              if (result.name == "fairy") {
                type_btn.style.backgroundColor = "pink"
              }
              const type_p = document.createElement("p")
              type_p.className = "types_p"
              type_p.innerHTML = result.name
              subtitle.innerHTML = "No damage from:"
              subtitle.className = "subtitle"

              div_principal.appendChild(type_btn)
              type_btn.appendChild(type_p)
              
                
            }
      )
      
  }
}



  
  
  
  