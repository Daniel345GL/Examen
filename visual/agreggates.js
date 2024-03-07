
debugger.groups.aggregate([
    {
        $match: {
            name:1
        }
    },
    {
        $lookup:{
            //va a buscar a otras propiedades foreanas
            "from":"students",
            "localField": "students",
            //con cual va a hacer match
            "foreingField":"_id",
            "as":"estudiantes"

        },

        $lookup:{
            //va a buscar a otras propiedades foreanas
            "from":"subjects",
            "localField": "subjects",
            //con cual va a hacer match
            "foreingField":"_id",
            "as":"materias"

        },

        $lookup:{
            //va a buscar a otras propiedades foreanas
            "from":"teachers",
            "localField": "teachers_id",
            //con cual va a hacer match
            "foreingField":"_id",
            "as":"Maestro"

        }
    }                
])