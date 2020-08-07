import {Router} from 'express';
const router = Router();

import {createPet} from '../controllers/pet.controller';
import {getPets} from '../controllers/pet.controller';
import {getPetById} from '../controllers/pet.controller';


// /api/pets/
router.post('/',createPet);
router.get('/', getPets);

// /api/pets/:petID

router.get('/:id', getPetById);


export default router;