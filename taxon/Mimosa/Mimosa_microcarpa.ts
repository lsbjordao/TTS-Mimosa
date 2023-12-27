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


// Description of Mimosa microcarpa
const Mimosa_microcarpa = new Mimosa()
Mimosa_microcarpa.specificEpithet = 'microcarpa'

Mimosa_microcarpa.stems = new Stems()

Mimosa_microcarpa.stipule = new Stipule()
Mimosa_microcarpa.stipule.margin = new MarginStipule()
Mimosa_microcarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_microcarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_microcarpa.leaf = new Leaf()
Mimosa_microcarpa.leaf.petiole = new Petiole()
Mimosa_microcarpa.leaf.bipinnate = new Bipinnate()
Mimosa_microcarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_microcarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_microcarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_microcarpa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_microcarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_microcarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_microcarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_microcarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(40)
Mimosa_microcarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(45, 70)
Mimosa_microcarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_microcarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_microcarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_microcarpa.inflorescence = new Inflorescence()
Mimosa_microcarpa.inflorescence.peduncle = new Peduncle()
Mimosa_microcarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_microcarpa.flower = new Flower()
Mimosa_microcarpa.flower.bracteole = new Bracteole()
Mimosa_microcarpa.flower.merism = '4-merous'
Mimosa_microcarpa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_microcarpa.flower.calyx = new Calyx()
Mimosa_microcarpa.flower.corolla = new Corolla()
Mimosa_microcarpa.flower.corolla.shape = ['turbinate', 'funnelform']

Mimosa_microcarpa.androecium = new Androecium()
Mimosa_microcarpa.androecium.filaments = new Filaments()
Mimosa_microcarpa.androecium.filaments.colour = 'pinkish'

Mimosa_microcarpa.ginoecium = new Ginoecium()
Mimosa_microcarpa.ginoecium.ovary = new Ovary()

Mimosa_microcarpa.fruit = new Fruit()
Mimosa_microcarpa.fruit.stipe = new Stipe()
Mimosa_microcarpa.fruit.replum = new Replum()
Mimosa_microcarpa.fruit.epicarp = new Epicarp()

Mimosa_microcarpa.seed = new Seed()


// Description authorship
Mimosa_microcarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_microcarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa microcarpa
export { Mimosa_microcarpa }