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


// Description of Mimosa scaberrima
const Mimosa_scaberrima = new Mimosa()
Mimosa_scaberrima.specificEpithet = 'scaberrima'

Mimosa_scaberrima.stems = new Stems()

Mimosa_scaberrima.stipule = new Stipule()
Mimosa_scaberrima.stipule.margin = new MarginStipule()
Mimosa_scaberrima.stipule.adaxial = new AdaxialStipule()
Mimosa_scaberrima.stipule.abaxial = new AbaxialStipule()

Mimosa_scaberrima.leaf = new Leaf()
Mimosa_scaberrima.leaf.petiole = new Petiole()
Mimosa_scaberrima.leaf.bipinnate = new Bipinnate()
Mimosa_scaberrima.leaf.bipinnate.rachis = new Rachis()
Mimosa_scaberrima.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_scaberrima.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_scaberrima.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 3)
Mimosa_scaberrima.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(4)
Mimosa_scaberrima.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_scaberrima.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_scaberrima.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_scaberrima.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 17)
Mimosa_scaberrima.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_scaberrima.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_scaberrima.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_scaberrima.inflorescence = new Inflorescence()
Mimosa_scaberrima.inflorescence.peduncle = new Peduncle()
Mimosa_scaberrima.inflorescence.capitate = new CapitateInflorescence()

Mimosa_scaberrima.flower = new Flower()
Mimosa_scaberrima.flower.bracteole = new Bracteole()
Mimosa_scaberrima.flower.merism = '4-merous'
Mimosa_scaberrima.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_scaberrima.flower.calyx = new Calyx()
Mimosa_scaberrima.flower.calyx.shape = 'campanulate'
Mimosa_scaberrima.flower.corolla = new Corolla()
Mimosa_scaberrima.flower.corolla.shape = 'turbinate'

Mimosa_scaberrima.androecium = new Androecium()
Mimosa_scaberrima.androecium.filaments = new Filaments()
Mimosa_scaberrima.androecium.filaments.colour = 'pinkish'

Mimosa_scaberrima.ginoecium = new Ginoecium()
Mimosa_scaberrima.ginoecium.ovary = new Ovary()

Mimosa_scaberrima.fruit = new Fruit()
Mimosa_scaberrima.fruit.stipe = new Stipe()
Mimosa_scaberrima.fruit.replum = new Replum()
Mimosa_scaberrima.fruit.epicarp = new Epicarp()

Mimosa_scaberrima.seed = new Seed()


// Description authorship
Mimosa_scaberrima.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_scaberrima.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa scaberrima
export { Mimosa_scaberrima }