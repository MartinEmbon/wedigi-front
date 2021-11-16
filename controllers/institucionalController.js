const institucionalController = {
    index:(req,res)=>{
        return res.render("index",{title:"Official Game Store"})
    },
    acao:(req,res)=>{
        return res.render("acao",{title:"Official Game Store"})
    },
    aventura:(req,res)=>{
        return res.render("aventura",{title:"Official Game Store"})
    },
    rpg:(req,res)=>{
        return res.render("rpg",{title:"Official Game Store"})
    },
    estrategia:(req,res)=>{
        return res.render("estrategia",{title:"Official Game Store"})
    },
    simulacao:(req,res)=>{
        return res.render("simulacao",{title:"Official Game Store"})
    },
    productBanner01:(req,res)=>{
        return res.render("game_rdr",{title:"Official Game Store"})
    },
    productBanner02:(req,res)=>{
        return res.render("game_resident_evil",{title:"Official Game Store"})
    },
    productBanner03:(req,res)=>{
        return res.render("game_hitman",{title:"Official Game Store"})
    },
    biblioteca:(req,res)=>{
        return res.render("biblioteca",{title:"Official Game Store"})
    },

}


module.exports = institucionalController