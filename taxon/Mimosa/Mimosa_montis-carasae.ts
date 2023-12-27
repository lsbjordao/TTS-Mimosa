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


// Description of Mimosa montisCarasae
const Mimosa_montisCarasae = new Mimosa()
Mimosa_montisCarasae.specificEpithet = 'montisCarasae'

Mimosa_montisCarasae.stems = new Stems()

Mimosa_montisCarasae.stipule = new Stipule()
Mimosa_montisCarasae.stipule.margin = new MarginStipule()
Mimosa_montisCarasae.stipule.adaxial = new AdaxialStipule()
Mimosa_montisCarasae.stipule.abaxial = new AbaxialStipule()

Mimosa_montisCarasae.leaf = new Leaf()
Mimosa_montisCarasae.leaf.petiole = new Petiole()
Mimosa_montisCarasae.leaf.bipinnate = new Bipinnate()
Mimosa_montisCarasae.leaf.bipinnate.rachis = new Rachis()
Mimosa_montisCarasae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_montisCarasae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_montisCarasae.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_montisCarasae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_montisCarasae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_montisCarasae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_montisCarasae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_montisCarasae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_montisCarasae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_montisCarasae.inflorescence = new Inflorescence()
Mimosa_montisCarasae.inflorescence.peduncle = new Peduncle()
Mimosa_montisCarasae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_montisCarasae.flower = new Flower()
Mimosa_montisCarasae.flower.bracteole = new Bracteole()
Mimosa_montisCarasae.flower.merism = '4-merous'
Mimosa_montisCarasae.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_montisCarasae.flower.calyx = new Calyx()
Mimosa_montisCarasae.flower.calyx.shape = 'campanulate'
Mimosa_montisCarasae.flower.corolla = new Corolla()

Mimosa_montisCarasae.androecium = new Androecium()
Mimosa_montisCarasae.androecium.filaments = new Filaments()

Mimosa_montisCarasae.ginoecium = new Ginoecium()
Mimosa_montisCarasae.ginoecium.ovary = new Ovary()

Mimosa_montisCarasae.fruit = new Fruit()
Mimosa_montisCarasae.fruit.stipe = new Stipe()
Mimosa_montisCarasae.fruit.replum = new Replum()
Mimosa_montisCarasae.fruit.epicarp = new Epicarp()

Mimosa_montisCarasae.seed = new Seed()


// Description authorship
Mimosa_montisCarasae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_montisCarasae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa montisCarasae
export { Mimosa_montisCarasae }