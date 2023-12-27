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


// Description of Mimosa echinocaula
const Mimosa_echinocaula = new Mimosa()
Mimosa_echinocaula.specificEpithet = 'echinocaula'

Mimosa_echinocaula.stems = new Stems()

Mimosa_echinocaula.stipule = new Stipule()
Mimosa_echinocaula.stipule.margin = new MarginStipule()
Mimosa_echinocaula.stipule.adaxial = new AdaxialStipule()
Mimosa_echinocaula.stipule.abaxial = new AbaxialStipule()

Mimosa_echinocaula.leaf = new Leaf()
Mimosa_echinocaula.leaf.petiole = new Petiole()
Mimosa_echinocaula.leaf.bipinnate = new Bipinnate()
Mimosa_echinocaula.leaf.bipinnate.rachis = new Rachis()
Mimosa_echinocaula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_echinocaula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_echinocaula.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 5)
Mimosa_echinocaula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_echinocaula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_echinocaula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_echinocaula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 45)
Mimosa_echinocaula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_echinocaula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_echinocaula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_echinocaula.inflorescence = new Inflorescence()
Mimosa_echinocaula.inflorescence.peduncle = new Peduncle()
Mimosa_echinocaula.inflorescence.capitate = new CapitateInflorescence()

Mimosa_echinocaula.flower = new Flower()
Mimosa_echinocaula.flower.bracteole = new Bracteole()
Mimosa_echinocaula.flower.merism = '4-merous'
Mimosa_echinocaula.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_echinocaula.flower.calyx = new Calyx()
Mimosa_echinocaula.flower.calyx.shape = 'cup-shaped'
Mimosa_echinocaula.flower.corolla = new Corolla()
Mimosa_echinocaula.flower.corolla.shape = ['turbinate', 'funnelform']

Mimosa_echinocaula.androecium = new Androecium()
Mimosa_echinocaula.androecium.filaments = new Filaments()
Mimosa_echinocaula.androecium.filaments.colour = 'pinkish'

Mimosa_echinocaula.ginoecium = new Ginoecium()
Mimosa_echinocaula.ginoecium.ovary = new Ovary()

Mimosa_echinocaula.fruit = new Fruit()
Mimosa_echinocaula.fruit.stipe = new Stipe()
Mimosa_echinocaula.fruit.replum = new Replum()
Mimosa_echinocaula.fruit.epicarp = new Epicarp()

Mimosa_echinocaula.seed = new Seed()


// Description authorship
Mimosa_echinocaula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_echinocaula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa echinocaula
export { Mimosa_echinocaula }