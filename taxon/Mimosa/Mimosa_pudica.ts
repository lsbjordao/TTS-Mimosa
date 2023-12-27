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


// Description of Mimosa pudica
const Mimosa_pudica = new Mimosa()
Mimosa_pudica.specificEpithet = 'pudica'

Mimosa_pudica.stems = new Stems()

Mimosa_pudica.stipule = new Stipule()
Mimosa_pudica.stipule.margin = new MarginStipule()
Mimosa_pudica.stipule.adaxial = new AdaxialStipule()
Mimosa_pudica.stipule.abaxial = new AbaxialStipule()

Mimosa_pudica.leaf = new Leaf()
Mimosa_pudica.leaf.petiole = new Petiole()
Mimosa_pudica.leaf.bipinnate = new Bipinnate()
Mimosa_pudica.leaf.bipinnate.rachis = new Rachis()
Mimosa_pudica.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pudica.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pudica.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_pudica.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pudica.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pudica.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pudica.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 32)
Mimosa_pudica.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pudica.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pudica.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pudica.inflorescence = new Inflorescence()
Mimosa_pudica.inflorescence.peduncle = new Peduncle()
Mimosa_pudica.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pudica.flower = new Flower()
Mimosa_pudica.flower.bracteole = new Bracteole()
Mimosa_pudica.flower.merism = '4-merous'
Mimosa_pudica.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pudica.flower.calyx = new Calyx()
Mimosa_pudica.flower.calyx.shape = ['campanulate', 'cup-shaped']
Mimosa_pudica.flower.corolla = new Corolla()
Mimosa_pudica.flower.corolla.shape = ['vase-shaped', 'subtubular', 'turbinate']

Mimosa_pudica.androecium = new Androecium()
Mimosa_pudica.androecium.filaments = new Filaments()
Mimosa_pudica.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_pudica.ginoecium = new Ginoecium()
Mimosa_pudica.ginoecium.ovary = new Ovary()

Mimosa_pudica.fruit = new Fruit()
Mimosa_pudica.fruit.stipe = new Stipe()
Mimosa_pudica.fruit.replum = new Replum()
Mimosa_pudica.fruit.epicarp = new Epicarp()

Mimosa_pudica.seed = new Seed()


// Description authorship
Mimosa_pudica.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pudica.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pudica
export { Mimosa_pudica }