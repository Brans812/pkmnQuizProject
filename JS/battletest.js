get_two_random()
create_buttons()

function get_two_random(){
    pokemon_1 = Math.floor(Math.random()*898)+1
    pokemon_2 = Math.floor(Math.random()*898)+1
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_1}`
    fetch (URL) //hace la solicitud
        .then((promise) => promise.json()) //convierte a json
        .then( 
            function(result)
            {
                get_pokemon_btn(result)
                name_pkmn_1 = result.name
                const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_2}`
                fetch (URL) //hace la solicitud
                    .then((promise) => promise.json()) //convierte a json
                    .then( 
                        function(result)
                        {
                            get_pokemon_btn(result)
                            name_pkmn_2 = result.name

                        }
                )
                
            }
    )
    

}

function get_pokemon_btn(pokemon){
    const div_principal = document.getElementById("pokemon_options")
    const btn_pkmn = document.createElement("button")
    btn_pkmn.className = "pokemon"
    btn_pkmn.id = pokemon.name
    btn_pkmn.addEventListener("click", compare_answer)
    const sprite = document.createElement("img")
    sprite.className = "pkmn_img"
    sprite.src = pokemon.sprites.front_default
    sprite.alt = "MissingNo"
    const pkmn_name = document.createElement("p")
    pkmn_name.className = "pkmn_name"
    pkmn_name.innerHTML = pokemon.name
    div_principal.appendChild(btn_pkmn)
    btn_pkmn.appendChild(sprite)
    btn_pkmn.appendChild(pkmn_name)
    
}


function create_buttons() {
    const div_principal = document.getElementById("answer_options")
    const even_btn = document.createElement("button")
    even_btn.className = "red_button"
    even_btn.id = "draw"
    even_btn.addEventListener("click",get_draw)
    const even_p = document.createElement("p")
    even_p.className = "types_p"
    even_p.innerText = "Draw"
    div_principal.appendChild(even_btn)
    even_btn.appendChild(even_p)
    
}

function compare_answer(event){
    const pkmn_1_id = document.getElementById(name_pkmn_1)
    pkmn_1_id.removeEventListener("click", compare_answer)
    const pkmn_2_id = document.getElementById(name_pkmn_2)
    pkmn_2_id.removeEventListener("click", compare_answer)
    const even_btn_id = document.getElementById("draw")
    even_btn_id.removeEventListener("click", get_draw)
    if (event.path[1].nextSibling == null) {
        const URL = `https://pokeapi.co/api/v2/pokemon/${event.path[1].id}`
        fetch (URL) //hace la solicitud
        .then((promise) => promise.json()) //convierte a json
        .then( 
            function(result)
            {
                pkmn_types = []
                pkmn_name = result.name
                for (let index = 0; index < result.types.length; index++) {
                    pkmn_types[index] = result.types[index].type.name
                }
                compare_types(pkmn_types,event.path[1].previousSibling.id)
                setTimeout(() => {
                    get_answer(win_condition,pkmn_name)
                    
                }, 100);


            }
    )
    } else {
        const URL = `https://pokeapi.co/api/v2/pokemon/${event.path[1].id}`
        fetch (URL) //hace la solicitud
        .then((promise) => promise.json()) //convierte a json
        .then( 
            function(result)
            {
                pkmn_types = []
                pkmn_name = result.name
                for (let index = 0; index < result.types.length; index++) {
                    pkmn_types[index] = result.types[index].type.name
                }
                compare_types(pkmn_types,event.path[1].nextSibling.id)
                setTimeout(() => {
                    get_answer(win_condition,pkmn_name)
                    
                }, 100);
                
                


            }
    )
    
    }    
    
}

function compare_types(types,pkmn){
    const URL = `https://pokeapi.co/api/v2/pokemon/${pkmn}`
    fetch (URL) //hace la solicitud
    .then((promise) => promise.json()) //convierte a json
    .then( 
        function(result)
        {
            rival_types = []
            win_condition = false
            for (let index = 0; index < result.types.length; index++) {
                rival_types[index] = result.types[index].type.name
            }

            for (let index = 0; index < types.length; index++) {
                const URL = `https://pokeapi.co/api/v2/type/${types[index]}`
                fetch (URL) //hace la solicitud
                .then((promise) => promise.json()) //convierte a json
                .then( 
                    function(result)
                    {
                        var no_damage = []
                        var half_damage = []
                        var double_damage = []
                        var advantage = 0
                        for (let index = 0; index < result.damage_relations.no_damage_to.length; index++) {
                            no_damage[index] = result.damage_relations.no_damage_to[index].name;
                            
                        }
                        for (let index = 0; index < result.damage_relations.half_damage_to.length; index++) {
                            half_damage[index] = result.damage_relations.half_damage_to[index].name;
                            
                        }
                        for (let index = 0; index < result.damage_relations.double_damage_to.length; index++) {
                            double_damage[index] = result.damage_relations.double_damage_to[index].name;
                            
                        }
                        for (let index = 0; index < rival_types.length; index++) {
                            if (no_damage.includes(rival_types[index])) {
                                advantage -= 1
                                // console.log(`${result.name} es nulo contra ${rival_types[index]}`)
                            } else {
                                if (half_damage.includes(rival_types[index])) {
                                    // console.log(`${result.name} es poco eficaz contra ${rival_types[index]}`)
                                    advantage -= 1
                                } else {
                                    if (double_damage.includes(rival_types[index])) {
                                        // console.log(`${result.name} es muy eficaz contra ${rival_types[index]}`)
                                        advantage += 1
                                    } else {
                                        // console.log(`${result.name} es neutro contra ${rival_types[index]}`)
                                        advantage = advantage
                                    }
                                    
                                }
                                
                            }
            
                            
                            
                        }
                        if (advantage > 0) {
                            win_condition = true
                            
                        }
                       
                        
                    }
                    
               )
               
                
            }
            

            

        }
        
    )
    
}

function get_answer(answer,pkmn){
    const subtitle = document.getElementById("answer_subtitle")
    const points_p = document.getElementById("points")
    const pkmn_btn = document.getElementById(pkmn)
    const next_div = document.getElementById("next")
    if (answer == true) {
        points = Number(points_p.innerText) + 1
        points_p.innerText = points
        subtitle.innerText = "Success!"
        subtitle.className = "subtitle"
        subtitle.style = "color: #41F03F"
        pkmn_btn.style = "background-color: #41F03F"
        const next_btn = document.createElement("button")
        next_btn.className = "red_button"
        next_btn.addEventListener("click", next_question)
        const next_p = document.createElement("p")
        next_p.innerHTML = "Next"
        next_p.style = "margin: 0"
        next_div.appendChild(next_btn)
        next_btn.appendChild(next_p)
        
    }else{
        subtitle.innerText = "Failure, retry"
        subtitle.className = "subtitle"
        subtitle.style = "color: #FF211C"
        pkmn_btn.style = "background-color: #FF211C"
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
    const subtitle = document.getElementById("answer_subtitle")
    if (event.path[0].innerText == "Next") {
        subtitle.innerHTML = "Who does have advantage?"
        subtitle.style = "" 
        delete_data("answer_options")
        delete_data("pokemon_options")
        delete_data("next")
        get_two_random()
        create_buttons()
        
    } else {
        const points_p = document.getElementById("points")
        points = 0
        points_p.innerText = points
        subtitle.innerHTML = "Who does have advantage?"
        subtitle.style = "" 
        delete_data("answer_options")
        delete_data("pokemon_options")
        delete_data("next")
        get_two_random()
        create_buttons()
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

function get_draw(){
    const subtitle = document.getElementById("answer_subtitle")
    const points_p = document.getElementById("points")
    const next_div = document.getElementById("next")
    const pkmn_1_id = document.getElementById(name_pkmn_1)
    pkmn_1_id.removeEventListener("click", compare_answer)
    const pkmn_2_id = document.getElementById(name_pkmn_2)
    pkmn_2_id.removeEventListener("click", compare_answer)
    const even_btn_id = document.getElementById("draw")
    even_btn_id.removeEventListener("click", get_draw)
    pkmn = [name_pkmn_1,name_pkmn_2]
    pkmn_draw = []
    const URL = `https://pokeapi.co/api/v2/pokemon/${pkmn[0]}`
    fetch (URL) //hace la solicitud
    .then((promise) => promise.json()) //convierte a json
    .then( 
        function(result)
        {
            pkmn_types = []
            for (let index = 0; index < result.types.length; index++) {
                pkmn_types[index] = result.types[index].type.name
            }
            compare_types(pkmn_types,pkmn[1])
            setTimeout(() => {
                pkmn_draw[0] = win_condition
                
            }, 10);
            


        }
    )
    setTimeout(() => {
        const URL_2 = `https://pokeapi.co/api/v2/pokemon/${pkmn[1]}`
        fetch (URL_2) //hace la solicitud
        .then((promise) => promise.json()) //convierte a json
        .then( 
            function(result)
            {
                pkmn_types = []
                for (let index = 0; index < result.types.length; index++) {
                    pkmn_types[index] = result.types[index].type.name
                }
                compare_types(pkmn_types,pkmn[0])
                setTimeout(() => {
                    pkmn_draw[1] = win_condition
                    
                }, 10);
                
    
    
            }
        )
        
    }, 100);


    setTimeout(() => {
        if (pkmn_draw[0] == pkmn_draw[1]) {
            points = Number(points_p.innerHTML) + 1
            points_p.innerText = points
            subtitle.innerText = "Success!"
            subtitle.className = "subtitle"
            subtitle.style = "color: #41F03F"
            even_btn_id.style = "background-color: #41F03F"
            const next_btn = document.createElement("button")
            next_btn.className = "red_button"
            next_btn.addEventListener("click", next_question)
            const next_p = document.createElement("p")
            next_p.innerHTML = "Next"
            next_p.style = "margin: 0"
            next_div.appendChild(next_btn)
            next_btn.appendChild(next_p)
            
        }else{
            subtitle.innerHTML = "Failure, retry"
            subtitle.className = "subtitle"
            subtitle.style = "color: #FF211C"
            even_btn_id.style = "background-color: #FF211C"
            const next_btn = document.createElement("button")
            next_btn.className = "red_button"
            next_btn.addEventListener("click", next_question)
            const next_p = document.createElement("p")
            next_p.innerHTML = "Retry"
            next_p.style = "margin: 0"
            next_div.appendChild(next_btn)
            next_btn.appendChild(next_p)
        }
        
    }, 800);




}