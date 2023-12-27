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


// Description of Mimosa nothacacia
const Mimosa_nothacacia = new Mimosa()
Mimosa_nothacacia.specificEpithet = 'nothacacia'

Mimosa_nothacacia.stems = new Stems()

Mimosa_nothacacia.stipule = new Stipule()
Mimosa_nothacacia.stipule.margin = new MarginStipule()
Mimosa_nothacacia.stipule.adaxial = new AdaxialStipule()
Mimosa_nothacacia.stipule.abaxial = new AbaxialStipule()

Mimosa_nothacacia.leaf = new Leaf()
Mimosa_nothacacia.leaf.petiole = new Petiole()
Mimosa_nothacacia.leaf.bipinnate = new Bipinnate()
Mimosa_nothacacia.leaf.bipinnate.rachis = new Rachis()
Mimosa_nothacacia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_nothacacia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_nothacacia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(12, 19)
Mimosa_nothacacia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_nothacacia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_nothacacia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_nothacacia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 16)
Mimosa_nothacacia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_nothacacia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_nothacacia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_nothacacia.inflorescence = new Inflorescence()
Mimosa_nothacacia.inflorescence.peduncle = new Peduncle()
Mimosa_nothacacia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_nothacacia.flower = new Flower()
Mimosa_nothacacia.flower.bracteole = new Bracteole()
Mimosa_nothacacia.flower.merism = '4-merous'
Mimosa_nothacacia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_nothacacia.flower.calyx = new Calyx()
Mimosa_nothacacia.flower.calyx.shape = ['turbinate', 'campanulate']
Mimosa_nothacacia.flower.corolla = new Corolla()
Mimosa_nothacacia.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_nothacacia.androecium = new Androecium()
Mimosa_nothacacia.androecium.filaments = new Filaments()
Mimosa_nothacacia.androecium.filaments.colour = 'whitenish'

Mimosa_nothacacia.ginoecium = new Ginoecium()
Mimosa_nothacacia.ginoecium.ovary = new Ovary()

Mimosa_nothacacia.fruit = new Fruit()
Mimosa_nothacacia.fruit.stipe = new Stipe()
Mimosa_nothacacia.fruit.replum = new Replum()
Mimosa_nothacacia.fruit.epicarp = new Epicarp()

Mimosa_nothacacia.seed = new Seed()


// Description authorship
Mimosa_nothacacia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_nothacacia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa nothacacia
export { Mimosa_nothacacia }