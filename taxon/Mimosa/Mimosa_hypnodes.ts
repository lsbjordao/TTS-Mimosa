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


// Description of Mimosa hypnodes
const Mimosa_hypnodes = new Mimosa()
Mimosa_hypnodes.specificEpithet = 'hypnodes'

Mimosa_hypnodes.stems = new Stems()

Mimosa_hypnodes.stipule = new Stipule()
Mimosa_hypnodes.stipule.margin = new MarginStipule()
Mimosa_hypnodes.stipule.adaxial = new AdaxialStipule()
Mimosa_hypnodes.stipule.abaxial = new AbaxialStipule()

Mimosa_hypnodes.leaf = new Leaf()
Mimosa_hypnodes.leaf.petiole = new Petiole()
Mimosa_hypnodes.leaf.bipinnate = new Bipinnate()
Mimosa_hypnodes.leaf.bipinnate.rachis = new Rachis()
Mimosa_hypnodes.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hypnodes.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hypnodes.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(2)
Mimosa_hypnodes.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 6)
Mimosa_hypnodes.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hypnodes.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hypnodes.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hypnodes.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 15)
Mimosa_hypnodes.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hypnodes.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hypnodes.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hypnodes.inflorescence = new Inflorescence()
Mimosa_hypnodes.inflorescence.peduncle = new Peduncle()
Mimosa_hypnodes.inflorescence.capitate = new CapitateInflorescence()

Mimosa_hypnodes.flower = new Flower()
Mimosa_hypnodes.flower.bracteole = new Bracteole()
Mimosa_hypnodes.flower.merism = '4-merous'
Mimosa_hypnodes.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_hypnodes.flower.calyx = new Calyx()
Mimosa_hypnodes.flower.corolla = new Corolla()
Mimosa_hypnodes.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_hypnodes.androecium = new Androecium()
Mimosa_hypnodes.androecium.filaments = new Filaments()

Mimosa_hypnodes.ginoecium = new Ginoecium()
Mimosa_hypnodes.ginoecium.ovary = new Ovary()

Mimosa_hypnodes.fruit = new Fruit()
Mimosa_hypnodes.fruit.stipe = new Stipe()
Mimosa_hypnodes.fruit.replum = new Replum()
Mimosa_hypnodes.fruit.epicarp = new Epicarp()

Mimosa_hypnodes.seed = new Seed()


// Description authorship
Mimosa_hypnodes.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hypnodes.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hypnodes
export { Mimosa_hypnodes }