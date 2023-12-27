// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa ramentacea
const Mimosa_ramentacea = new Mimosa()
Mimosa_ramentacea.specificEpithet = 'ramentacea'

Mimosa_ramentacea.stems = new Stems()

Mimosa_ramentacea.stipule = new Stipule()
Mimosa_ramentacea.stipule.margin = new MarginStipule()
Mimosa_ramentacea.stipule.adaxial = new AdaxialStipule()
Mimosa_ramentacea.stipule.abaxial = new AbaxialStipule()

Mimosa_ramentacea.leaf = new Leaf()
Mimosa_ramentacea.leaf.petiole = new Petiole()
Mimosa_ramentacea.leaf.bipinnate = new Bipinnate()
Mimosa_ramentacea.leaf.bipinnate.rachis = new Rachis()
Mimosa_ramentacea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ramentacea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ramentacea.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_ramentacea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ramentacea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ramentacea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ramentacea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 47)
Mimosa_ramentacea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ramentacea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ramentacea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ramentacea.inflorescence = new Inflorescence()
Mimosa_ramentacea.inflorescence.peduncle = new Peduncle()
Mimosa_ramentacea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ramentacea.flower = new Flower()
Mimosa_ramentacea.flower.bracteole = new Bracteole()
Mimosa_ramentacea.flower.calyx = new Calyx()
Mimosa_ramentacea.flower.calyx.shape = 'pappiform'
Mimosa_ramentacea.flower.corolla = new Corolla()
Mimosa_ramentacea.flower.corolla.shape = 'vase-shaped'

Mimosa_ramentacea.androecium = new Androecium()
Mimosa_ramentacea.androecium.filaments = new Filaments()
Mimosa_ramentacea.androecium.filaments.colour = 'pinkish'

Mimosa_ramentacea.ginoecium = new Ginoecium()
Mimosa_ramentacea.ginoecium.ovary = new Ovary()

Mimosa_ramentacea.fruit = new Fruit()
Mimosa_ramentacea.fruit.stipe = new Stipe()
Mimosa_ramentacea.fruit.replum = new Replum()
Mimosa_ramentacea.fruit.epicarp = new Epicarp()

Mimosa_ramentacea.seed = new Seed()


// Description authorship
Mimosa_ramentacea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ramentacea.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa ramentacea
export { Mimosa_ramentacea }