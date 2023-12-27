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


// Description of Mimosa invisa
const Mimosa_invisa = new Mimosa()
Mimosa_invisa.specificEpithet = 'invisa'

Mimosa_invisa.stems = new Stems()

Mimosa_invisa.stipule = new Stipule()
Mimosa_invisa.stipule.margin = new MarginStipule()
Mimosa_invisa.stipule.adaxial = new AdaxialStipule()
Mimosa_invisa.stipule.abaxial = new AbaxialStipule()

Mimosa_invisa.leaf = new Leaf()
Mimosa_invisa.leaf.petiole = new Petiole()
Mimosa_invisa.leaf.bipinnate = new Bipinnate()
Mimosa_invisa.leaf.bipinnate.rachis = new Rachis()
Mimosa_invisa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_invisa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_invisa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(3)
Mimosa_invisa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 21)
Mimosa_invisa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_invisa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_invisa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_invisa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_invisa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_invisa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_invisa.inflorescence = new Inflorescence()
Mimosa_invisa.inflorescence.peduncle = new Peduncle()
Mimosa_invisa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_invisa.flower = new Flower()
Mimosa_invisa.flower.bracteole = new Bracteole()
Mimosa_invisa.flower.merism = ['4-merous', '5-merous', '6-merous']
Mimosa_invisa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_invisa.flower.calyx = new Calyx()
Mimosa_invisa.flower.calyx.shape = 'campanulate'
Mimosa_invisa.flower.corolla = new Corolla()
Mimosa_invisa.flower.corolla.shape = ['turbinate', 'funnelform']

Mimosa_invisa.androecium = new Androecium()
Mimosa_invisa.androecium.filaments = new Filaments()
Mimosa_invisa.androecium.filaments.colour = 'pinkish'

Mimosa_invisa.ginoecium = new Ginoecium()
Mimosa_invisa.ginoecium.ovary = new Ovary()

Mimosa_invisa.fruit = new Fruit()
Mimosa_invisa.fruit.stipe = new Stipe()
Mimosa_invisa.fruit.replum = new Replum()
Mimosa_invisa.fruit.epicarp = new Epicarp()

Mimosa_invisa.seed = new Seed()


// Description authorship
Mimosa_invisa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_invisa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa invisa
export { Mimosa_invisa }