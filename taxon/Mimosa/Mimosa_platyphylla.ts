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


// Description of Mimosa platyphylla
const Mimosa_platyphylla = new Mimosa()
Mimosa_platyphylla.specificEpithet = 'platyphylla'

Mimosa_platyphylla.stems = new Stems()

Mimosa_platyphylla.stipule = new Stipule()
Mimosa_platyphylla.stipule.margin = new MarginStipule()
Mimosa_platyphylla.stipule.adaxial = new AdaxialStipule()
Mimosa_platyphylla.stipule.abaxial = new AbaxialStipule()

Mimosa_platyphylla.leaf = new Leaf()
Mimosa_platyphylla.leaf.petiole = new Petiole()
Mimosa_platyphylla.leaf.bipinnate = new Bipinnate()
Mimosa_platyphylla.leaf.bipinnate.rachis = new Rachis()
Mimosa_platyphylla.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_platyphylla.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_platyphylla.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_platyphylla.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_platyphylla.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_platyphylla.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_platyphylla.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_platyphylla.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_platyphylla.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_platyphylla.inflorescence = new Inflorescence()
Mimosa_platyphylla.inflorescence.peduncle = new Peduncle()
Mimosa_platyphylla.inflorescence.capitate = new CapitateInflorescence()

Mimosa_platyphylla.flower = new Flower()
Mimosa_platyphylla.flower.bracteole = new Bracteole()
Mimosa_platyphylla.flower.merism = '4-merous'
Mimosa_platyphylla.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_platyphylla.flower.calyx = new Calyx()
Mimosa_platyphylla.flower.corolla = new Corolla()

Mimosa_platyphylla.androecium = new Androecium()
Mimosa_platyphylla.androecium.filaments = new Filaments()

Mimosa_platyphylla.ginoecium = new Ginoecium()
Mimosa_platyphylla.ginoecium.ovary = new Ovary()

Mimosa_platyphylla.fruit = new Fruit()
Mimosa_platyphylla.fruit.stipe = new Stipe()
Mimosa_platyphylla.fruit.replum = new Replum()
Mimosa_platyphylla.fruit.epicarp = new Epicarp()

Mimosa_platyphylla.seed = new Seed()


// Description authorship
Mimosa_platyphylla.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_platyphylla.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa platyphylla
export { Mimosa_platyphylla }