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


// Description of Mimosa paupera
const Mimosa_paupera = new Mimosa()
Mimosa_paupera.specificEpithet = 'paupera'

Mimosa_paupera.stems = new Stems()

Mimosa_paupera.stipule = new Stipule()
Mimosa_paupera.stipule.margin = new MarginStipule()
Mimosa_paupera.stipule.adaxial = new AdaxialStipule()
Mimosa_paupera.stipule.abaxial = new AbaxialStipule()

Mimosa_paupera.leaf = new Leaf()
Mimosa_paupera.leaf.petiole = new Petiole()
Mimosa_paupera.leaf.bipinnate = new Bipinnate()
Mimosa_paupera.leaf.bipinnate.rachis = new Rachis()
Mimosa_paupera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_paupera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_paupera.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_paupera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_paupera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_paupera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_paupera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(10)
Mimosa_paupera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 15)
Mimosa_paupera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_paupera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_paupera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_paupera.inflorescence = new Inflorescence()
Mimosa_paupera.inflorescence.peduncle = new Peduncle()
Mimosa_paupera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_paupera.flower = new Flower()
Mimosa_paupera.flower.bracteole = new Bracteole()
Mimosa_paupera.flower.merism = '4-merous'
Mimosa_paupera.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_paupera.flower.calyx = new Calyx()
Mimosa_paupera.flower.corolla = new Corolla()
Mimosa_paupera.flower.corolla.shape = ['funnelform', 'subcylindric']

Mimosa_paupera.androecium = new Androecium()
Mimosa_paupera.androecium.filaments = new Filaments()
Mimosa_paupera.androecium.filaments.colour = ['pinkish', 'lilac']

Mimosa_paupera.ginoecium = new Ginoecium()
Mimosa_paupera.ginoecium.ovary = new Ovary()

Mimosa_paupera.fruit = new Fruit()
Mimosa_paupera.fruit.stipe = new Stipe()
Mimosa_paupera.fruit.replum = new Replum()
Mimosa_paupera.fruit.epicarp = new Epicarp()

Mimosa_paupera.seed = new Seed()


// Description authorship
Mimosa_paupera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_paupera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa paupera
export { Mimosa_paupera }