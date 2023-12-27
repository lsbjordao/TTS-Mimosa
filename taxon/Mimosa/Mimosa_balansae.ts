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


// Description of Mimosa balansae
const Mimosa_balansae = new Mimosa()
Mimosa_balansae.specificEpithet = 'balansae'

Mimosa_balansae.stems = new Stems()

Mimosa_balansae.stipule = new Stipule()
Mimosa_balansae.stipule.margin = new MarginStipule()
Mimosa_balansae.stipule.adaxial = new AdaxialStipule()
Mimosa_balansae.stipule.abaxial = new AbaxialStipule()

Mimosa_balansae.leaf = new Leaf()
Mimosa_balansae.leaf.petiole = new Petiole()
Mimosa_balansae.leaf.bipinnate = new Bipinnate()
Mimosa_balansae.leaf.bipinnate.rachis = new Rachis()
Mimosa_balansae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_balansae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_balansae.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_balansae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_balansae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_balansae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_balansae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(10)
Mimosa_balansae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 21)
Mimosa_balansae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(23)
Mimosa_balansae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_balansae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_balansae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_balansae.inflorescence = new Inflorescence()
Mimosa_balansae.inflorescence.peduncle = new Peduncle()
Mimosa_balansae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_balansae.flower = new Flower()
Mimosa_balansae.flower.bracteole = new Bracteole()
Mimosa_balansae.flower.merism = '4-merous'
Mimosa_balansae.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_balansae.flower.calyx = new Calyx()
Mimosa_balansae.flower.corolla = new Corolla()
Mimosa_balansae.flower.corolla.shape = 'turbinate'

Mimosa_balansae.androecium = new Androecium()
Mimosa_balansae.androecium.filaments = new Filaments()
Mimosa_balansae.androecium.filaments.colour = 'pinkish'

Mimosa_balansae.ginoecium = new Ginoecium()
Mimosa_balansae.ginoecium.ovary = new Ovary()

Mimosa_balansae.fruit = new Fruit()
Mimosa_balansae.fruit.stipe = new Stipe()
Mimosa_balansae.fruit.replum = new Replum()
Mimosa_balansae.fruit.epicarp = new Epicarp()

Mimosa_balansae.seed = new Seed()


// Description authorship
Mimosa_balansae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_balansae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa balansae
export { Mimosa_balansae }