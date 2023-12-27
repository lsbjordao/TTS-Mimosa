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


// Description of Mimosa dolens
const Mimosa_dolens = new Mimosa()
Mimosa_dolens.specificEpithet = 'dolens'

Mimosa_dolens.stems = new Stems()

Mimosa_dolens.stipule = new Stipule()
Mimosa_dolens.stipule.margin = new MarginStipule()
Mimosa_dolens.stipule.adaxial = new AdaxialStipule()
Mimosa_dolens.stipule.abaxial = new AbaxialStipule()

Mimosa_dolens.leaf = new Leaf()
Mimosa_dolens.leaf.petiole = new Petiole()
Mimosa_dolens.leaf.bipinnate = new Bipinnate()
Mimosa_dolens.leaf.bipinnate.rachis = new Rachis()
Mimosa_dolens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dolens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dolens.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_dolens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dolens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dolens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dolens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(11)
Mimosa_dolens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 18)
Mimosa_dolens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(20)
Mimosa_dolens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dolens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dolens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dolens.inflorescence = new Inflorescence()
Mimosa_dolens.inflorescence.peduncle = new Peduncle()
Mimosa_dolens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_dolens.flower = new Flower()
Mimosa_dolens.flower.bracteole = new Bracteole()
Mimosa_dolens.flower.merism = '4-merous'
Mimosa_dolens.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_dolens.flower.calyx = new Calyx()
Mimosa_dolens.flower.calyx.shape = ['collar', 'cup-shaped']
Mimosa_dolens.flower.corolla = new Corolla()
Mimosa_dolens.flower.corolla.shape = ['funnelform', 'subcylindric']

Mimosa_dolens.androecium = new Androecium()
Mimosa_dolens.androecium.filaments = new Filaments()
Mimosa_dolens.androecium.filaments.colour = 'pinkish'

Mimosa_dolens.ginoecium = new Ginoecium()
Mimosa_dolens.ginoecium.ovary = new Ovary()

Mimosa_dolens.fruit = new Fruit()
Mimosa_dolens.fruit.stipe = new Stipe()
Mimosa_dolens.fruit.replum = new Replum()
Mimosa_dolens.fruit.epicarp = new Epicarp()

Mimosa_dolens.seed = new Seed()


// Description authorship
Mimosa_dolens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dolens.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa dolens
export { Mimosa_dolens }