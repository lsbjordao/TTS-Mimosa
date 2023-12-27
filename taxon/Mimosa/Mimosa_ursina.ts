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


// Description of Mimosa ursina
const Mimosa_ursina = new Mimosa()
Mimosa_ursina.specificEpithet = 'ursina'

Mimosa_ursina.stems = new Stems()

Mimosa_ursina.stipule = new Stipule()
Mimosa_ursina.stipule.margin = new MarginStipule()
Mimosa_ursina.stipule.adaxial = new AdaxialStipule()
Mimosa_ursina.stipule.abaxial = new AbaxialStipule()

Mimosa_ursina.leaf = new Leaf()
Mimosa_ursina.leaf.petiole = new Petiole()
Mimosa_ursina.leaf.bipinnate = new Bipinnate()
Mimosa_ursina.leaf.bipinnate.rachis = new Rachis()
Mimosa_ursina.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ursina.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ursina.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_ursina.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ursina.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ursina.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ursina.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ursina.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ursina.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ursina.inflorescence = new Inflorescence()
Mimosa_ursina.inflorescence.peduncle = new Peduncle()
Mimosa_ursina.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ursina.flower = new Flower()
Mimosa_ursina.flower.bracteole = new Bracteole()
Mimosa_ursina.flower.merism = '4-merous'
Mimosa_ursina.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_ursina.flower.calyx = new Calyx()
Mimosa_ursina.flower.calyx.shape = 'cup-shaped'
Mimosa_ursina.flower.corolla = new Corolla()
Mimosa_ursina.flower.corolla.shape = 'vase-shaped'

Mimosa_ursina.androecium = new Androecium()
Mimosa_ursina.androecium.filaments = new Filaments()
Mimosa_ursina.androecium.filaments.colour = 'pinkish'

Mimosa_ursina.ginoecium = new Ginoecium()
Mimosa_ursina.ginoecium.ovary = new Ovary()

Mimosa_ursina.fruit = new Fruit()
Mimosa_ursina.fruit.stipe = new Stipe()
Mimosa_ursina.fruit.replum = new Replum()
Mimosa_ursina.fruit.epicarp = new Epicarp()

Mimosa_ursina.seed = new Seed()


// Description authorship
Mimosa_ursina.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ursina.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa ursina
export { Mimosa_ursina }