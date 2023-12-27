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


// Description of Mimosa eriorrhachis
const Mimosa_eriorrhachis = new Mimosa()
Mimosa_eriorrhachis.specificEpithet = 'eriorrhachis'

Mimosa_eriorrhachis.stems = new Stems()

Mimosa_eriorrhachis.stipule = new Stipule()
Mimosa_eriorrhachis.stipule.margin = new MarginStipule()
Mimosa_eriorrhachis.stipule.adaxial = new AdaxialStipule()
Mimosa_eriorrhachis.stipule.abaxial = new AbaxialStipule()

Mimosa_eriorrhachis.leaf = new Leaf()
Mimosa_eriorrhachis.leaf.petiole = new Petiole()
Mimosa_eriorrhachis.leaf.bipinnate = new Bipinnate()
Mimosa_eriorrhachis.leaf.bipinnate.rachis = new Rachis()
Mimosa_eriorrhachis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_eriorrhachis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(12, 25)
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(6)
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 16)
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(17)
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_eriorrhachis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_eriorrhachis.inflorescence = new Inflorescence()
Mimosa_eriorrhachis.inflorescence.peduncle = new Peduncle()
Mimosa_eriorrhachis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_eriorrhachis.flower = new Flower()
Mimosa_eriorrhachis.flower.bracteole = new Bracteole()
Mimosa_eriorrhachis.flower.merism = '4-merous'
Mimosa_eriorrhachis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_eriorrhachis.flower.calyx = new Calyx()
Mimosa_eriorrhachis.flower.calyx.shape = 'turbinate'
Mimosa_eriorrhachis.flower.corolla = new Corolla()
Mimosa_eriorrhachis.flower.corolla.shape = 'funnelform'

Mimosa_eriorrhachis.androecium = new Androecium()
Mimosa_eriorrhachis.androecium.filaments = new Filaments()
Mimosa_eriorrhachis.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_eriorrhachis.ginoecium = new Ginoecium()
Mimosa_eriorrhachis.ginoecium.ovary = new Ovary()

Mimosa_eriorrhachis.fruit = new Fruit()
Mimosa_eriorrhachis.fruit.stipe = new Stipe()
Mimosa_eriorrhachis.fruit.replum = new Replum()
Mimosa_eriorrhachis.fruit.epicarp = new Epicarp()

Mimosa_eriorrhachis.seed = new Seed()


// Description authorship
Mimosa_eriorrhachis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_eriorrhachis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa eriorrhachis
export { Mimosa_eriorrhachis }