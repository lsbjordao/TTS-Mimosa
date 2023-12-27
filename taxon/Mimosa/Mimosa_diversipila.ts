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


// Description of Mimosa diversipila
const Mimosa_diversipila = new Mimosa()
Mimosa_diversipila.specificEpithet = 'diversipila'

Mimosa_diversipila.stems = new Stems()

Mimosa_diversipila.stipule = new Stipule()
Mimosa_diversipila.stipule.margin = new MarginStipule()
Mimosa_diversipila.stipule.adaxial = new AdaxialStipule()
Mimosa_diversipila.stipule.abaxial = new AbaxialStipule()

Mimosa_diversipila.leaf = new Leaf()
Mimosa_diversipila.leaf.petiole = new Petiole()
Mimosa_diversipila.leaf.bipinnate = new Bipinnate()
Mimosa_diversipila.leaf.bipinnate.rachis = new Rachis()
Mimosa_diversipila.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_diversipila.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_diversipila.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_diversipila.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_diversipila.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_diversipila.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_diversipila.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 15)
Mimosa_diversipila.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_diversipila.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_diversipila.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_diversipila.inflorescence = new Inflorescence()
Mimosa_diversipila.inflorescence.peduncle = new Peduncle()
Mimosa_diversipila.inflorescence.capitate = new CapitateInflorescence()

Mimosa_diversipila.flower = new Flower()
Mimosa_diversipila.flower.bracteole = new Bracteole()
Mimosa_diversipila.flower.merism = '4-merous'
Mimosa_diversipila.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_diversipila.flower.calyx = new Calyx()
Mimosa_diversipila.flower.calyx.shape = 'cup-shaped'
Mimosa_diversipila.flower.corolla = new Corolla()

Mimosa_diversipila.androecium = new Androecium()
Mimosa_diversipila.androecium.filaments = new Filaments()

Mimosa_diversipila.ginoecium = new Ginoecium()
Mimosa_diversipila.ginoecium.ovary = new Ovary()

Mimosa_diversipila.fruit = new Fruit()
Mimosa_diversipila.fruit.stipe = new Stipe()
Mimosa_diversipila.fruit.replum = new Replum()
Mimosa_diversipila.fruit.epicarp = new Epicarp()

Mimosa_diversipila.seed = new Seed()


// Description authorship
Mimosa_diversipila.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_diversipila.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa diversipila
export { Mimosa_diversipila }