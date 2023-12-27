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


// Description of Mimosa psittacina
const Mimosa_psittacina = new Mimosa()
Mimosa_psittacina.specificEpithet = 'psittacina'

Mimosa_psittacina.stems = new Stems()

Mimosa_psittacina.stipule = new Stipule()
Mimosa_psittacina.stipule.margin = new MarginStipule()
Mimosa_psittacina.stipule.adaxial = new AdaxialStipule()
Mimosa_psittacina.stipule.abaxial = new AbaxialStipule()

Mimosa_psittacina.leaf = new Leaf()
Mimosa_psittacina.leaf.petiole = new Petiole()
Mimosa_psittacina.leaf.bipinnate = new Bipinnate()
Mimosa_psittacina.leaf.bipinnate.rachis = new Rachis()
Mimosa_psittacina.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_psittacina.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_psittacina.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_psittacina.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_psittacina.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_psittacina.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_psittacina.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 33)
Mimosa_psittacina.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_psittacina.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_psittacina.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_psittacina.inflorescence = new Inflorescence()
Mimosa_psittacina.inflorescence.peduncle = new Peduncle()
Mimosa_psittacina.inflorescence.capitate = new CapitateInflorescence()

Mimosa_psittacina.flower = new Flower()
Mimosa_psittacina.flower.bracteole = new Bracteole()
Mimosa_psittacina.flower.merism = '4-merous'
Mimosa_psittacina.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_psittacina.flower.calyx = new Calyx()
Mimosa_psittacina.flower.calyx.shape = 'cup-shaped'
Mimosa_psittacina.flower.corolla = new Corolla()
Mimosa_psittacina.flower.corolla.shape = 'turbinate'

Mimosa_psittacina.androecium = new Androecium()
Mimosa_psittacina.androecium.filaments = new Filaments()
Mimosa_psittacina.androecium.filaments.colour = ['whitenish', 'creamish']

Mimosa_psittacina.ginoecium = new Ginoecium()
Mimosa_psittacina.ginoecium.ovary = new Ovary()

Mimosa_psittacina.fruit = new Fruit()
Mimosa_psittacina.fruit.stipe = new Stipe()
Mimosa_psittacina.fruit.replum = new Replum()
Mimosa_psittacina.fruit.epicarp = new Epicarp()

Mimosa_psittacina.seed = new Seed()


// Description authorship
Mimosa_psittacina.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_psittacina.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa psittacina
export { Mimosa_psittacina }