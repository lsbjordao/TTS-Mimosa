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


// Description of Mimosa sensitiva
const Mimosa_sensitiva = new Mimosa()
Mimosa_sensitiva.specificEpithet = 'sensitiva'

Mimosa_sensitiva.stems = new Stems()

Mimosa_sensitiva.stipule = new Stipule()
Mimosa_sensitiva.stipule.margin = new MarginStipule()
Mimosa_sensitiva.stipule.adaxial = new AdaxialStipule()
Mimosa_sensitiva.stipule.abaxial = new AbaxialStipule()

Mimosa_sensitiva.leaf = new Leaf()
Mimosa_sensitiva.leaf.petiole = new Petiole()
Mimosa_sensitiva.leaf.bipinnate = new Bipinnate()
Mimosa_sensitiva.leaf.bipinnate.rachis = new Rachis()
Mimosa_sensitiva.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sensitiva.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sensitiva.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_sensitiva.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sensitiva.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sensitiva.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sensitiva.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sensitiva.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sensitiva.inflorescence = new Inflorescence()
Mimosa_sensitiva.inflorescence.peduncle = new Peduncle()
Mimosa_sensitiva.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sensitiva.flower = new Flower()
Mimosa_sensitiva.flower.bracteole = new Bracteole()
Mimosa_sensitiva.flower.merism = '4-merous'
Mimosa_sensitiva.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_sensitiva.flower.calyx = new Calyx()
Mimosa_sensitiva.flower.calyx.shape = 'pappiform'
Mimosa_sensitiva.flower.corolla = new Corolla()
Mimosa_sensitiva.flower.corolla.shape = ['funnelform', 'subtubular']

Mimosa_sensitiva.androecium = new Androecium()
Mimosa_sensitiva.androecium.filaments = new Filaments()

Mimosa_sensitiva.ginoecium = new Ginoecium()
Mimosa_sensitiva.ginoecium.ovary = new Ovary()

Mimosa_sensitiva.fruit = new Fruit()
Mimosa_sensitiva.fruit.stipe = new Stipe()
Mimosa_sensitiva.fruit.replum = new Replum()
Mimosa_sensitiva.fruit.epicarp = new Epicarp()

Mimosa_sensitiva.seed = new Seed()


// Description authorship
Mimosa_sensitiva.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sensitiva.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa sensitiva
export { Mimosa_sensitiva }