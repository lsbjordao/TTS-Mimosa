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


// Description of Mimosa castanoclada
const Mimosa_castanoclada = new Mimosa()
Mimosa_castanoclada.specificEpithet = 'castanoclada'

Mimosa_castanoclada.stems = new Stems()

Mimosa_castanoclada.stipule = new Stipule()
Mimosa_castanoclada.stipule.margin = new MarginStipule()
Mimosa_castanoclada.stipule.adaxial = new AdaxialStipule()
Mimosa_castanoclada.stipule.abaxial = new AbaxialStipule()

Mimosa_castanoclada.leaf = new Leaf()
Mimosa_castanoclada.leaf.petiole = new Petiole()
Mimosa_castanoclada.leaf.bipinnate = new Bipinnate()
Mimosa_castanoclada.leaf.bipinnate.rachis = new Rachis()
Mimosa_castanoclada.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_castanoclada.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_castanoclada.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_castanoclada.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_castanoclada.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_castanoclada.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_castanoclada.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 22)
Mimosa_castanoclada.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_castanoclada.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_castanoclada.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_castanoclada.inflorescence = new Inflorescence()
Mimosa_castanoclada.inflorescence.peduncle = new Peduncle()
Mimosa_castanoclada.inflorescence.capitate = new CapitateInflorescence()

Mimosa_castanoclada.flower = new Flower()
Mimosa_castanoclada.flower.bracteole = new Bracteole()
Mimosa_castanoclada.flower.merism = '4-merous'
Mimosa_castanoclada.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_castanoclada.flower.calyx = new Calyx()
Mimosa_castanoclada.flower.calyx.shape = 'campanulate'
Mimosa_castanoclada.flower.corolla = new Corolla()
Mimosa_castanoclada.flower.corolla.shape = 'trumpet-shaped'

Mimosa_castanoclada.androecium = new Androecium()
Mimosa_castanoclada.androecium.filaments = new Filaments()
Mimosa_castanoclada.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_castanoclada.ginoecium = new Ginoecium()
Mimosa_castanoclada.ginoecium.ovary = new Ovary()

Mimosa_castanoclada.fruit = new Fruit()
Mimosa_castanoclada.fruit.stipe = new Stipe()
Mimosa_castanoclada.fruit.replum = new Replum()
Mimosa_castanoclada.fruit.epicarp = new Epicarp()

Mimosa_castanoclada.seed = new Seed()


// Description authorship
Mimosa_castanoclada.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_castanoclada.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa castanoclada
export { Mimosa_castanoclada }