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


// Description of Mimosa hypoglauca
const Mimosa_hypoglauca = new Mimosa()
Mimosa_hypoglauca.specificEpithet = 'hypoglauca'

Mimosa_hypoglauca.stems = new Stems()

Mimosa_hypoglauca.stipule = new Stipule()
Mimosa_hypoglauca.stipule.margin = new MarginStipule()
Mimosa_hypoglauca.stipule.adaxial = new AdaxialStipule()
Mimosa_hypoglauca.stipule.abaxial = new AbaxialStipule()

Mimosa_hypoglauca.leaf = new Leaf()
Mimosa_hypoglauca.leaf.petiole = new Petiole()
Mimosa_hypoglauca.leaf.bipinnate = new Bipinnate()
Mimosa_hypoglauca.leaf.bipinnate.rachis = new Rachis()
Mimosa_hypoglauca.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hypoglauca.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hypoglauca.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_hypoglauca.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hypoglauca.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hypoglauca.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hypoglauca.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hypoglauca.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hypoglauca.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hypoglauca.inflorescence = new Inflorescence()
Mimosa_hypoglauca.inflorescence.peduncle = new Peduncle()
Mimosa_hypoglauca.inflorescence.capitate = new CapitateInflorescence()

Mimosa_hypoglauca.flower = new Flower()
Mimosa_hypoglauca.flower.bracteole = new Bracteole()
Mimosa_hypoglauca.flower.merism = '4-merous'
Mimosa_hypoglauca.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_hypoglauca.flower.calyx = new Calyx()
Mimosa_hypoglauca.flower.calyx.shape = 'paleaceous'
Mimosa_hypoglauca.flower.corolla = new Corolla()

Mimosa_hypoglauca.androecium = new Androecium()
Mimosa_hypoglauca.androecium.filaments = new Filaments()
Mimosa_hypoglauca.androecium.filaments.colour = 'pinkish'

Mimosa_hypoglauca.ginoecium = new Ginoecium()
Mimosa_hypoglauca.ginoecium.ovary = new Ovary()

Mimosa_hypoglauca.fruit = new Fruit()
Mimosa_hypoglauca.fruit.stipe = new Stipe()
Mimosa_hypoglauca.fruit.replum = new Replum()
Mimosa_hypoglauca.fruit.epicarp = new Epicarp()

Mimosa_hypoglauca.seed = new Seed()


// Description authorship
Mimosa_hypoglauca.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hypoglauca.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hypoglauca
export { Mimosa_hypoglauca }