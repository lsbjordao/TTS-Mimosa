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


// Description of Mimosa prionopus
const Mimosa_prionopus = new Mimosa()
Mimosa_prionopus.specificEpithet = 'prionopus'

Mimosa_prionopus.stems = new Stems()

Mimosa_prionopus.stipule = new Stipule()
Mimosa_prionopus.stipule.margin = new MarginStipule()
Mimosa_prionopus.stipule.adaxial = new AdaxialStipule()
Mimosa_prionopus.stipule.abaxial = new AbaxialStipule()

Mimosa_prionopus.leaf = new Leaf()
Mimosa_prionopus.leaf.petiole = new Petiole()
Mimosa_prionopus.leaf.bipinnate = new Bipinnate()
Mimosa_prionopus.leaf.bipinnate.rachis = new Rachis()
Mimosa_prionopus.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_prionopus.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_prionopus.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_prionopus.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_prionopus.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_prionopus.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(12)
Mimosa_prionopus.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 32)
Mimosa_prionopus.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_prionopus.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_prionopus.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_prionopus.inflorescence = new Inflorescence()
Mimosa_prionopus.inflorescence.peduncle = new Peduncle()
Mimosa_prionopus.inflorescence.capitate = new CapitateInflorescence()

Mimosa_prionopus.flower = new Flower()
Mimosa_prionopus.flower.bracteole = new Bracteole()
Mimosa_prionopus.flower.merism = '4-merous'
Mimosa_prionopus.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_prionopus.flower.calyx = new Calyx()
Mimosa_prionopus.flower.calyx.shape = ['paleaceous', 'campanulate']
Mimosa_prionopus.flower.corolla = new Corolla()
Mimosa_prionopus.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_prionopus.androecium = new Androecium()
Mimosa_prionopus.androecium.filaments = new Filaments()

Mimosa_prionopus.ginoecium = new Ginoecium()
Mimosa_prionopus.ginoecium.ovary = new Ovary()

Mimosa_prionopus.fruit = new Fruit()
Mimosa_prionopus.fruit.stipe = new Stipe()
Mimosa_prionopus.fruit.replum = new Replum()
Mimosa_prionopus.fruit.epicarp = new Epicarp()

Mimosa_prionopus.seed = new Seed()


// Description authorship
Mimosa_prionopus.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_prionopus.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa prionopus
export { Mimosa_prionopus }