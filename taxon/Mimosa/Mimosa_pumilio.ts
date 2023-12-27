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


// Description of Mimosa pumilio
const Mimosa_pumilio = new Mimosa()
Mimosa_pumilio.specificEpithet = 'pumilio'

Mimosa_pumilio.stems = new Stems()

Mimosa_pumilio.stipule = new Stipule()
Mimosa_pumilio.stipule.margin = new MarginStipule()
Mimosa_pumilio.stipule.adaxial = new AdaxialStipule()
Mimosa_pumilio.stipule.abaxial = new AbaxialStipule()

Mimosa_pumilio.leaf = new Leaf()
Mimosa_pumilio.leaf.petiole = new Petiole()
Mimosa_pumilio.leaf.bipinnate = new Bipinnate()
Mimosa_pumilio.leaf.bipinnate.rachis = new Rachis()
Mimosa_pumilio.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pumilio.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pumilio.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pumilio.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pumilio.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pumilio.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pumilio.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(8)
Mimosa_pumilio.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 16)
Mimosa_pumilio.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(17)
Mimosa_pumilio.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pumilio.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pumilio.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pumilio.inflorescence = new Inflorescence()
Mimosa_pumilio.inflorescence.peduncle = new Peduncle()
Mimosa_pumilio.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pumilio.flower = new Flower()
Mimosa_pumilio.flower.bracteole = new Bracteole()
Mimosa_pumilio.flower.merism = ['4-merous', '6-merous']
Mimosa_pumilio.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pumilio.flower.calyx = new Calyx()
Mimosa_pumilio.flower.calyx.shape = 'paleaceous'
Mimosa_pumilio.flower.corolla = new Corolla()
Mimosa_pumilio.flower.corolla.shape = 'turbinate'

Mimosa_pumilio.androecium = new Androecium()
Mimosa_pumilio.androecium.filaments = new Filaments()
Mimosa_pumilio.androecium.filaments.colour = 'pinkish'

Mimosa_pumilio.ginoecium = new Ginoecium()
Mimosa_pumilio.ginoecium.ovary = new Ovary()

Mimosa_pumilio.fruit = new Fruit()
Mimosa_pumilio.fruit.stipe = new Stipe()
Mimosa_pumilio.fruit.replum = new Replum()
Mimosa_pumilio.fruit.epicarp = new Epicarp()

Mimosa_pumilio.seed = new Seed()


// Description authorship
Mimosa_pumilio.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pumilio.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa pumilio
export { Mimosa_pumilio }