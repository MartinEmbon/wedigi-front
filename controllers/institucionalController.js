const institucionalController = {
    index:(req,res)=>{
        return res.render("index",{title:"Desafio We.digi"})
    },
    acao:(req,res)=>{
        return res.render("acao",{title:"Desafio We.digi"})
    },
    aventura:(req,res)=>{
        return res.render("aventura",{title:"Desafio We.digi"})
    },
    rpg:(req,res)=>{
        return res.render("rpg",{title:"Desafio We.digi"})
    },
    estrategia:(req,res)=>{
        return res.render("estrategia",{title:"Desafio We.digi"})
    },
    simulacao:(req,res)=>{
        return res.render("simulacao",{title:"Desafio We.digi"})
    },
    productBanner01:(req,res)=>{
        return res.render("game_rdr",{title:"Desafio We.digi"})
    },
    productBanner02:(req,res)=>{
        return res.render("game_resident_evil",{title:"Desafio We.digi"})
    },
    productBanner03:(req,res)=>{
        return res.render("game_hitman",{title:"Desafio We.digi"})
    },
    biblioteca:(req,res)=>{
        return res.render("biblioteca",{title:"Desafio We.digi"})
    },

}


module.exports = institucionalController