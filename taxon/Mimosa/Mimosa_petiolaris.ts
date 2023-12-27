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


// Description of Mimosa petiolaris
const Mimosa_petiolaris = new Mimosa()
Mimosa_petiolaris.specificEpithet = 'petiolaris'

Mimosa_petiolaris.stems = new Stems()

Mimosa_petiolaris.stipule = new Stipule()
Mimosa_petiolaris.stipule.margin = new MarginStipule()
Mimosa_petiolaris.stipule.adaxial = new AdaxialStipule()
Mimosa_petiolaris.stipule.abaxial = new AbaxialStipule()

Mimosa_petiolaris.leaf = new Leaf()
Mimosa_petiolaris.leaf.petiole = new Petiole()
Mimosa_petiolaris.leaf.bipinnate = new Bipinnate()
Mimosa_petiolaris.leaf.bipinnate.rachis = new Rachis()
Mimosa_petiolaris.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_petiolaris.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_petiolaris.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_petiolaris.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_petiolaris.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_petiolaris.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_petiolaris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(28)
Mimosa_petiolaris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 54)
Mimosa_petiolaris.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_petiolaris.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_petiolaris.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_petiolaris.inflorescence = new Inflorescence()
Mimosa_petiolaris.inflorescence.peduncle = new Peduncle()
Mimosa_petiolaris.inflorescence.capitate = new CapitateInflorescence()

Mimosa_petiolaris.flower = new Flower()
Mimosa_petiolaris.flower.bracteole = new Bracteole()
Mimosa_petiolaris.flower.merism = '4-merous'
Mimosa_petiolaris.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_petiolaris.flower.calyx = new Calyx()
Mimosa_petiolaris.flower.calyx.shape = 'paleaceous'
Mimosa_petiolaris.flower.corolla = new Corolla()
Mimosa_petiolaris.flower.corolla.shape = 'funnelform'

Mimosa_petiolaris.androecium = new Androecium()
Mimosa_petiolaris.androecium.filaments = new Filaments()
Mimosa_petiolaris.androecium.filaments.colour = 'pinkish'

Mimosa_petiolaris.ginoecium = new Ginoecium()
Mimosa_petiolaris.ginoecium.ovary = new Ovary()

Mimosa_petiolaris.fruit = new Fruit()
Mimosa_petiolaris.fruit.stipe = new Stipe()
Mimosa_petiolaris.fruit.replum = new Replum()
Mimosa_petiolaris.fruit.epicarp = new Epicarp()

Mimosa_petiolaris.seed = new Seed()


// Description authorship
Mimosa_petiolaris.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_petiolaris.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa petiolaris
export { Mimosa_petiolaris }