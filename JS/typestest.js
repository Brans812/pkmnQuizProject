get_types_from_api()

function get_types_from_api(){
  const URL = "https://pokeapi.co/api/v2/type?limit=18"
  fetch (URL) //hace la solicitud
    .then((promise) => promise.json()) //convierte a json
    .then( 
        function(result)
        {
            let types = []
            for (let index = 0; index < result.results.length; index++) {
              types[index] = result.results[index].name;
              
            }
            type_to_judge = Math.floor(Math.random()*types.length)
            create_main_type(types[type_to_judge])
 
        }
)

}

function create_main_type(type) {
    const div_principal = document.getElementById("main_type")
    const type_btn = document.createElement("button")
    type_btn.className = "types_btn"
    main_type = `${type}`
    if (type == "normal") {
        type_btn.style.backgroundColor = "white"
        }
    if (type == "fighting") {
        type_btn.style.backgroundColor = "red"
    }
    if (type == "flying") {
        type_btn.style.backgroundColor = "lightblue"
    }
    if (type == "poison") {
        type_btn.style.backgroundColor = "purple"
    }
    if (type == "ground") {
        type_btn.style.backgroundColor = "brown"
    }
    if (type == "rock") {
        type_btn.style.backgroundColor = "burlywood"
    }
    if (type == "bug") {
        type_btn.style.backgroundColor = "lightgreen"
    }
    if (type == "ghost") {
        type_btn.style.backgroundColor = "violet"
    }
    if (type == "steel") {
        type_btn.style.backgroundColor = "gray"
    }
    if (type == "fire") {
        type_btn.style.backgroundColor = "orange"
    }
    if (type == "water") {
        type_btn.style.backgroundColor = "blue"
    }
    if (type == "grass") {
        type_btn.style.backgroundColor = "green"
    }
    if (type == "electric") {
        type_btn.style.backgroundColor = "yellow"
    }
    if (type == "psychic") {
        type_btn.style.backgroundColor = "palevioletred"
    }
    if (type == "ice") {
        type_btn.style.backgroundColor = "lightseagreen"
    }
    if (type == "dragon") {
        type_btn.style.backgroundColor = "rebeccapurple"
    }
    if (type == "dark") {
        type_btn.style.backgroundColor = "rgb(32, 32, 32)"
    }
    if (type == "fairy") {
        type_btn.style.backgroundColor = "pink"
    }
    const type_p = document.createElement("p")
    type_p.className = "types_p"
    type_p.innerHTML = type

    div_principal.appendChild(type_btn)
    type_btn.appendChild(type_p)
    create_right_option(type)

}

function create_right_option(type) {
    const URL = `https://pokeapi.co/api/v2/type/${type}`
    fetch (URL) //hace la solicitud
      .then((promise) => promise.json()) //convierte a json
      .then( 
          function(result)
          {
            let types = []
            for (let index = 0; index < result.damage_relations.double_damage_from.length; index++) {
              types[index] = result.damage_relations.double_damage_from[index].name;
              
            }
            type_to_judge = Math.floor(Math.random()*types.length)
            const div_principal = document.getElementById("types_options")
            const option_div = document.createElement("div")
            option_div.className = "type_container"
            order_number = Math.floor(Math.random()*4)+1;
            option_div.style = `order:${order_number}`
            const type_btn = document.createElement("button")
            type_btn.className = "types_btn"
            type_btn.id = "clase"
            type_btn.id = `${result.damage_relations.double_damage_from[type_to_judge].name}`
            type_btn.addEventListener("click", compare_answer)
            if (result.damage_relations.double_damage_from[type_to_judge].name == "normal") {
                type_btn.style.backgroundColor = "white"
                }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "fighting") {
                type_btn.style.backgroundColor = "red"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "flying") {
                type_btn.style.backgroundColor = "lightblue"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "poison") {
                type_btn.style.backgroundColor = "purple"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "ground") {
                type_btn.style.backgroundColor = "brown"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "rock") {
                type_btn.style.backgroundColor = "burlywood"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "bug") {
                type_btn.style.backgroundColor = "lightgreen"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "ghost") {
                type_btn.style.backgroundColor = "violet"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "steel") {
                type_btn.style.backgroundColor = "gray"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "fire") {
                type_btn.style.backgroundColor = "orange"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "water") {
                type_btn.style.backgroundColor = "blue"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "grass") {
                type_btn.style.backgroundColor = "green"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "electric") {
                type_btn.style.backgroundColor = "yellow"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "psychic") {
                type_btn.style.backgroundColor = "palevioletred"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "ice") {
                type_btn.style.backgroundColor = "lightseagreen"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "dragon") {
                type_btn.style.backgroundColor = "rebeccapurple"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "dark") {
                type_btn.style.backgroundColor = "rgb(32, 32, 32)"
            }
            if (result.damage_relations.double_damage_from[type_to_judge].name == "fairy") {
                type_btn.style.backgroundColor = "pink"
            }
            const option_p = document.createElement("p")
            option_p.className = "types_p"
            option_p.innerHTML = result.damage_relations.double_damage_from[type_to_judge].name
            div_principal.appendChild(option_div)
            option_div.appendChild(type_btn)
            type_btn.appendChild(option_p)
            create_answers(result.damage_relations.double_damage_from[type_to_judge].name)
          }
  )
    
}

function create_answers(right_answer) {
    const URL = "https://pokeapi.co/api/v2/type?limit=18"
    fetch (URL) //hace la solicitud
      .then((promise) => promise.json()) //convierte a json
      .then( 
          function(result)
          {
            options = [right_answer]
              for (let index = 0; index < 3; index++) {
                let type_to_judge = Math.floor(Math.random()*result.results.length)
                type = result.results[type_to_judge].name
                while (type == right_answer) {
                    type_to_judge = Math.floor(Math.random()*result.results.length)
                    type = result.results[type_to_judge].name
                    
                }
                while (options.includes(type)) {
                    type_to_judge = Math.floor(Math.random()*result.results.length)
                    type = result.results[type_to_judge].name
                    
                }
                options.push(type)
                console.log(options)
                const div_principal = document.getElementById("types_options")
                const option_div = document.createElement("div")
                option_div.className = "type_container"
                if (order_number < 4) {
                    order_number += 1
                } else {
                    order_number = 1
                }
                option_div.style = `order:${order_number}`
                const type_btn = document.createElement("button")
                type_btn.className = "types_btn"
                type_btn.id = `${type}`
                type_btn.addEventListener("click", compare_answer)
                if (type == "normal") {
                    type_btn.style.backgroundColor = "white"
                    }
                if (type == "fighting") {
                    type_btn.style.backgroundColor = "red"
                }
                if (type == "flying") {
                    type_btn.style.backgroundColor = "lightblue"
                }
                if (type == "poison") {
                    type_btn.style.backgroundColor = "purple"
                }
                if (type == "ground") {
                    type_btn.style.backgroundColor = "brown"
                }
                if (type == "rock") {
                    type_btn.style.backgroundColor = "burlywood"
                }
                if (type == "bug") {
                    type_btn.style.backgroundColor = "lightgreen"
                }
                if (type == "ghost") {
                    type_btn.style.backgroundColor = "violet"
                }
                if (type == "steel") {
                    type_btn.style.backgroundColor = "gray"
                }
                if (type == "fire") {
                    type_btn.style.backgroundColor = "orange"
                }
                if (type == "water") {
                    type_btn.style.backgroundColor = "blue"
                }
                if (type == "grass") {
                    type_btn.style.backgroundColor = "green"
                }
                if (type == "electric") {
                    type_btn.style.backgroundColor = "yellow"
                }
                if (type == "psychic") {
                    type_btn.style.backgroundColor = "palevioletred"
                }
                if (type == "ice") {
                    type_btn.style.backgroundColor = "lightseagreen"
                }
                if (type == "dragon") {
                    type_btn.style.backgroundColor = "rebeccapurple"
                }
                if (type == "dark") {
                    type_btn.style.backgroundColor = "rgb(32, 32, 32)"
                }
                if (type == "fairy") {
                    type_btn.style.backgroundColor = "pink"
                }
                const option_p = document.createElement("p")
                option_p.className = "types_p"
                option_p.innerHTML = type
                div_principal.appendChild(option_div)
                option_div.appendChild(type_btn)
                type_btn.appendChild(option_p)
                
              }
   
          }
  )
    
}

function compare_answer(event){
    const URL = `https://pokeapi.co/api/v2/type/${main_type}`
    for (let index = 0; index < options.length; index++) {
        const type_id = document.getElementById(options[index])
        type_id.removeEventListener("click", compare_answer)
        
    }
    fetch (URL) //hace la solicitud
      .then((promise) => promise.json()) //convierte a json
      .then( 
          function(result)
          {
            let types = []
            for (let index = 0; index < result.damage_relations.double_damage_from.length; index++) {
              types[index] = result.damage_relations.double_damage_from[index].name;
              
            }
            if (types.includes(event.path[1].attributes[1].nodeValue)) {
                get_answer("success", event.path[1].attributes[1].nodeValue)
                
            } else {
                get_answer("failure", event.path[1].attributes[1].nodeValue)
                
            }

          }
  )
    

}


function get_answer(result, answer) {
    const subtitle = document.getElementById("answer_subtitle")
    const points_p = document.getElementById("points")
    const next_div = document.getElementById("next")
    if (result == "success") {
        points = Number(points_p.innerHTML) + 1
        points_p.innerHTML = points
        subtitle.innerHTML = result
        subtitle.className = "subtitle"
        subtitle.style = "color: #41F03F"
        const right_answer = document.getElementById(answer)
        right_answer.style = "background-color: #41F03F"
        const next_btn = document.createElement("button")
        next_btn.className = "red_button"
        next_btn.addEventListener("click", next_question)
        const next_p = document.createElement("p")
        next_p.innerHTML = "Next"
        next_p.style = "margin: 0"
        next_div.appendChild(next_btn)
        next_btn.appendChild(next_p)


    } else {
        subtitle.innerHTML = result+", retry"
        subtitle.className = "subtitle"
        subtitle.style = "color: #FF211C"
        const right_answer = document.getElementById(answer)
        right_answer.style = "background-color: #FF211C"
        const next_btn = document.createElement("button")
        next_btn.className = "red_button"
        next_btn.addEventListener("click", next_question)
        const next_p = document.createElement("p")
        next_p.innerHTML = "Retry"
        next_p.style = "margin: 0"
        next_div.appendChild(next_btn)
        next_btn.appendChild(next_p)
    }

    
}

function next_question(event){
    console.log(event)
    if (event.path[0].innerText == "Next") {
        const subtitle = document.getElementById("answer_subtitle")
        subtitle.innerHTML = "Weak against"
        subtitle.style = "" 
        delete_data("main_type")
        delete_data("types_options")
        delete_data("next")
        get_types_from_api()
    } else {
        const points_p = document.getElementById("points")
        points = 0
        points_p.innerHTML = points
        const subtitle = document.getElementById("answer_subtitle")
        subtitle.innerHTML = "Weak against"
        subtitle.style = "" 
        delete_data("main_type")
        delete_data("types_options")
        delete_data("next")
        get_types_from_api()
        
    }
}

function delete_data(id){
    const main_div = document.getElementById(id)
    if(main_div !== null){
        while (main_div.hasChildNodes()){
            main_div.removeChild(main_div.lastChild);
        }
      }
}