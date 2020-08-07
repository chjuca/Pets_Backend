import Pet from '../models/Pet';

// Metodo para crear una nueva mascota
export async function createPet(req, res){

    const {name, age, height,  weight, race,  typeanimal, petstatus} = req.body;
    try{
        let newPet = await Pet.create({                     // Gracias al ORM insertamos un dato solo con una funcion, sin necesidad de escribir una query
            name,
            age,
            height,
            weight,
            race,
            typeanimal,
            petstatus
        });
        if(newPet){
            return res.json({
                message: "Pet created successfully",
                data: newPet
            });
        }
    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    };
}

// Metodo para obtener todas las mascotas almacenadas
export async function getPets(req, res){

    try{
        const pets = await Pet.findAll();
        return res.json({
            data: pets
        })
    }catch(e){
        return res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }
}
// Metodo para obtener una mascota por el ID
export async function getPetById(req, res){

    const {id} = req.params;


    try{
        const pet = await Pet.findOne({
            where: {
                id
            }
        });
        if(pet){
            return res.json({
                data: pet
            })
        }
        return res.status(400).json({
            message: "This pet is not exist",
            data: {}
        })
    }catch(e){
        return res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }
}

// Hablar sobre si es necesario un metodo borrar