get_types_from_api()

function get_types_from_api(){
  const URL = "https://pokeapi.co/api/v2/type?limit=18"
  fetch (URL) //hace la solicitud
    .then((promise) => promise.json()) //convierte a json
    .then( 
        function(result)
        {
            types_list(result)
        }
)

}


function types_list(data){
  let types = []
  for (let index = 0; index < data.results.length; index++) {
    types[index] = data.results[index].name;
    
  }
  create_types_buttons(types)
}

function create_types_buttons(list){
    const div_principal = document.getElementById("types_list")
    for (let index = 0; index < list.length; index++) {
        const URL = `https://pokeapi.co/api/v2/type/${list[index]}`
        fetch (URL) //hace la solicitud
          .then((promise) => promise.json()) //convierte a json
          .then( 
              function(result)
              {
                const type_btn = document.createElement("button")
                type_btn.className = "types_btn"
                type_btn.addEventListener("click",leer,false)
                if (index == 0) {
                  type_btn.style.backgroundColor = "white"
                }
                if (index == 1) {
                  type_btn.style.backgroundColor = "red"
                }
                if (index == 2) {
                  type_btn.style.backgroundColor = "lightblue"
                }
                if (index == 3) {
                  type_btn.style.backgroundColor = "purple"
                }
                if (index == 4) {
                  type_btn.style.backgroundColor = "brown"
                }
                if (index == 5) {
                  type_btn.style.backgroundColor = "burlywood"
                }
                if (index == 6) {
                  type_btn.style.backgroundColor = "lightgreen"
                }
                if (index == 7) {
                  type_btn.style.backgroundColor = "violet"
                }
                if (index == 8) {
                  type_btn.style.backgroundColor = "gray"
                }
                if (index == 9) {
                  type_btn.style.backgroundColor = "orange"
                }
                if (index == 10) {
                  type_btn.style.backgroundColor = "blue"
                }
                if (index == 11) {
                  type_btn.style.backgroundColor = "green"
                }
                if (index == 12) {
                  type_btn.style.backgroundColor = "yellow"
                }
                if (index == 13) {
                  type_btn.style.backgroundColor = "palevioletred"
                }
                if (index == 14) {
                  type_btn.style.backgroundColor = "lightseagreen"
                }
                if (index == 15) {
                  type_btn.style.backgroundColor = "rebeccapurple"
                }
                if (index == 16) {
                  type_btn.style.backgroundColor = "rgb(32, 32, 32)"
                }
                if (index == 17) {
                  type_btn.style.backgroundColor = "pink"
                }
                const type_p = document.createElement("p")
                type_p.className = "types_p"
                type_p.innerHTML = result.name

                div_principal.appendChild(type_btn)
                type_btn.appendChild(type_p)
                  
              }
        )
        
    }
}

function delete_data(){
  const data = document.getElementById("types_list")
  if(data !== null){
    while (data.hasChildNodes()){
        data.removeChild(data.lastChild);
    }
  }
}

function weakness_api(type){
  const URL = `https://pokeapi.co/api/v2/type/${type}`
  const title = document.getElementById("header")
  title.innerHTML = type
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
  const div_principal = document.getElementById("types_list")
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
  get_type_half_damage(type)
}

function get_type_half_damage(type){
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
  get_type_resistance(type)
}

function get_type_resistance(type){
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

function leer(type){
  delete_data()
  weakness_api(type.path[0].innerHTML)
}