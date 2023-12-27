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


// Description of Mimosa callidryas
const Mimosa_callidryas = new Mimosa()
Mimosa_callidryas.specificEpithet = 'callidryas'

Mimosa_callidryas.stems = new Stems()

Mimosa_callidryas.stipule = new Stipule()
Mimosa_callidryas.stipule.margin = new MarginStipule()
Mimosa_callidryas.stipule.adaxial = new AdaxialStipule()
Mimosa_callidryas.stipule.abaxial = new AbaxialStipule()

Mimosa_callidryas.leaf = new Leaf()
Mimosa_callidryas.leaf.petiole = new Petiole()
Mimosa_callidryas.leaf.bipinnate = new Bipinnate()
Mimosa_callidryas.leaf.bipinnate.rachis = new Rachis()
Mimosa_callidryas.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_callidryas.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_callidryas.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 10)
Mimosa_callidryas.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_callidryas.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_callidryas.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_callidryas.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 9)
Mimosa_callidryas.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_callidryas.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_callidryas.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_callidryas.inflorescence = new Inflorescence()
Mimosa_callidryas.inflorescence.peduncle = new Peduncle()
Mimosa_callidryas.inflorescence.capitate = new CapitateInflorescence()

Mimosa_callidryas.flower = new Flower()
Mimosa_callidryas.flower.bracteole = new Bracteole()
Mimosa_callidryas.flower.merism = '4-merous'
Mimosa_callidryas.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_callidryas.flower.calyx = new Calyx()
Mimosa_callidryas.flower.corolla = new Corolla()

Mimosa_callidryas.androecium = new Androecium()
Mimosa_callidryas.androecium.filaments = new Filaments()
Mimosa_callidryas.androecium.filaments.colour = 'redish'

Mimosa_callidryas.ginoecium = new Ginoecium()
Mimosa_callidryas.ginoecium.ovary = new Ovary()

Mimosa_callidryas.fruit = new Fruit()
Mimosa_callidryas.fruit.stipe = new Stipe()
Mimosa_callidryas.fruit.replum = new Replum()
Mimosa_callidryas.fruit.epicarp = new Epicarp()

Mimosa_callidryas.seed = new Seed()


// Description authorship
Mimosa_callidryas.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_callidryas.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa callidryas
export { Mimosa_callidryas }