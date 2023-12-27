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


// Description of Mimosa sceptrum
const Mimosa_sceptrum = new Mimosa()
Mimosa_sceptrum.specificEpithet = 'sceptrum'

Mimosa_sceptrum.stems = new Stems()

Mimosa_sceptrum.stipule = new Stipule()
Mimosa_sceptrum.stipule.margin = new MarginStipule()
Mimosa_sceptrum.stipule.adaxial = new AdaxialStipule()
Mimosa_sceptrum.stipule.abaxial = new AbaxialStipule()

Mimosa_sceptrum.leaf = new Leaf()
Mimosa_sceptrum.leaf.petiole = new Petiole()
Mimosa_sceptrum.leaf.bipinnate = new Bipinnate()
Mimosa_sceptrum.leaf.bipinnate.rachis = new Rachis()
Mimosa_sceptrum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sceptrum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sceptrum.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_sceptrum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sceptrum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sceptrum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sceptrum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sceptrum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sceptrum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sceptrum.inflorescence = new Inflorescence()
Mimosa_sceptrum.inflorescence.peduncle = new Peduncle()
Mimosa_sceptrum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sceptrum.flower = new Flower()
Mimosa_sceptrum.flower.bracteole = new Bracteole()
Mimosa_sceptrum.flower.merism = '4-merous'
Mimosa_sceptrum.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_sceptrum.flower.calyx = new Calyx()
Mimosa_sceptrum.flower.corolla = new Corolla()
Mimosa_sceptrum.flower.corolla.shape = ['vase-shaped', 'subtubular']

Mimosa_sceptrum.androecium = new Androecium()
Mimosa_sceptrum.androecium.filaments = new Filaments()
Mimosa_sceptrum.androecium.filaments.colour = 'pinkish'

Mimosa_sceptrum.ginoecium = new Ginoecium()
Mimosa_sceptrum.ginoecium.ovary = new Ovary()

Mimosa_sceptrum.fruit = new Fruit()
Mimosa_sceptrum.fruit.stipe = new Stipe()
Mimosa_sceptrum.fruit.replum = new Replum()
Mimosa_sceptrum.fruit.epicarp = new Epicarp()

Mimosa_sceptrum.seed = new Seed()


// Description authorship
Mimosa_sceptrum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sceptrum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa sceptrum
export { Mimosa_sceptrum }