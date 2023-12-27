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


// Description of Mimosa macrocephala
const Mimosa_macrocephala = new Mimosa()
Mimosa_macrocephala.specificEpithet = 'macrocephala'

Mimosa_macrocephala.stems = new Stems()

Mimosa_macrocephala.stipule = new Stipule()
Mimosa_macrocephala.stipule.margin = new MarginStipule()
Mimosa_macrocephala.stipule.adaxial = new AdaxialStipule()
Mimosa_macrocephala.stipule.abaxial = new AbaxialStipule()

Mimosa_macrocephala.leaf = new Leaf()
Mimosa_macrocephala.leaf.petiole = new Petiole()
Mimosa_macrocephala.leaf.bipinnate = new Bipinnate()
Mimosa_macrocephala.leaf.bipinnate.rachis = new Rachis()
Mimosa_macrocephala.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_macrocephala.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_macrocephala.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_macrocephala.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_macrocephala.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_macrocephala.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_macrocephala.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_macrocephala.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_macrocephala.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_macrocephala.inflorescence = new Inflorescence()
Mimosa_macrocephala.inflorescence.peduncle = new Peduncle()
Mimosa_macrocephala.inflorescence.capitate = new CapitateInflorescence()

Mimosa_macrocephala.flower = new Flower()
Mimosa_macrocephala.flower.bracteole = new Bracteole()
Mimosa_macrocephala.flower.merism = '4-merous'
Mimosa_macrocephala.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_macrocephala.flower.calyx = new Calyx()
Mimosa_macrocephala.flower.calyx.shape = 'spathiform'
Mimosa_macrocephala.flower.corolla = new Corolla()

Mimosa_macrocephala.androecium = new Androecium()
Mimosa_macrocephala.androecium.filaments = new Filaments()
Mimosa_macrocephala.androecium.filaments.colour = 'pinkish'

Mimosa_macrocephala.ginoecium = new Ginoecium()
Mimosa_macrocephala.ginoecium.ovary = new Ovary()

Mimosa_macrocephala.fruit = new Fruit()
Mimosa_macrocephala.fruit.stipe = new Stipe()
Mimosa_macrocephala.fruit.replum = new Replum()
Mimosa_macrocephala.fruit.epicarp = new Epicarp()

Mimosa_macrocephala.seed = new Seed()


// Description authorship
Mimosa_macrocephala.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_macrocephala.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa macrocephala
export { Mimosa_macrocephala }