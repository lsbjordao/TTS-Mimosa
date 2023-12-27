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


// Description of Mimosa schleidenii
const Mimosa_schleidenii = new Mimosa()
Mimosa_schleidenii.specificEpithet = 'schleidenii'

Mimosa_schleidenii.stems = new Stems()

Mimosa_schleidenii.stipule = new Stipule()
Mimosa_schleidenii.stipule.margin = new MarginStipule()
Mimosa_schleidenii.stipule.adaxial = new AdaxialStipule()
Mimosa_schleidenii.stipule.abaxial = new AbaxialStipule()

Mimosa_schleidenii.leaf = new Leaf()
Mimosa_schleidenii.leaf.petiole = new Petiole()
Mimosa_schleidenii.leaf.bipinnate = new Bipinnate()
Mimosa_schleidenii.leaf.bipinnate.rachis = new Rachis()
Mimosa_schleidenii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_schleidenii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_schleidenii.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_schleidenii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_schleidenii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_schleidenii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_schleidenii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 9)
Mimosa_schleidenii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_schleidenii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_schleidenii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_schleidenii.inflorescence = new Inflorescence()
Mimosa_schleidenii.inflorescence.peduncle = new Peduncle()
Mimosa_schleidenii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_schleidenii.flower = new Flower()
Mimosa_schleidenii.flower.bracteole = new Bracteole()
Mimosa_schleidenii.flower.merism = '4-merous'
Mimosa_schleidenii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_schleidenii.flower.calyx = new Calyx()
Mimosa_schleidenii.flower.calyx.shape = 'pappiform'
Mimosa_schleidenii.flower.corolla = new Corolla()
Mimosa_schleidenii.flower.corolla.shape = 'subtubular'

Mimosa_schleidenii.androecium = new Androecium()
Mimosa_schleidenii.androecium.filaments = new Filaments()
Mimosa_schleidenii.androecium.filaments.colour = ['pinkish', 'purplish']

Mimosa_schleidenii.ginoecium = new Ginoecium()
Mimosa_schleidenii.ginoecium.ovary = new Ovary()

Mimosa_schleidenii.fruit = new Fruit()
Mimosa_schleidenii.fruit.stipe = new Stipe()
Mimosa_schleidenii.fruit.replum = new Replum()
Mimosa_schleidenii.fruit.epicarp = new Epicarp()

Mimosa_schleidenii.seed = new Seed()


// Description authorship
Mimosa_schleidenii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_schleidenii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa schleidenii
export { Mimosa_schleidenii }