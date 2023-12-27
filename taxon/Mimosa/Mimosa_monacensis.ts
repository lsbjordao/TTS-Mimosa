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


// Description of Mimosa monacensis
const Mimosa_monacensis = new Mimosa()
Mimosa_monacensis.specificEpithet = 'monacensis'

Mimosa_monacensis.stems = new Stems()

Mimosa_monacensis.stipule = new Stipule()
Mimosa_monacensis.stipule.margin = new MarginStipule()
Mimosa_monacensis.stipule.adaxial = new AdaxialStipule()
Mimosa_monacensis.stipule.abaxial = new AbaxialStipule()

Mimosa_monacensis.leaf = new Leaf()
Mimosa_monacensis.leaf.petiole = new Petiole()
Mimosa_monacensis.leaf.bipinnate = new Bipinnate()
Mimosa_monacensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_monacensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_monacensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_monacensis.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_monacensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_monacensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_monacensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_monacensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_monacensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_monacensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_monacensis.inflorescence = new Inflorescence()
Mimosa_monacensis.inflorescence.peduncle = new Peduncle()
Mimosa_monacensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_monacensis.flower = new Flower()
Mimosa_monacensis.flower.bracteole = new Bracteole()
Mimosa_monacensis.flower.merism = '4-merous'
Mimosa_monacensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_monacensis.flower.calyx = new Calyx()
Mimosa_monacensis.flower.calyx.shape = 'campanulate'
Mimosa_monacensis.flower.corolla = new Corolla()
Mimosa_monacensis.flower.corolla.shape = 'turbinate'

Mimosa_monacensis.androecium = new Androecium()
Mimosa_monacensis.androecium.filaments = new Filaments()

Mimosa_monacensis.ginoecium = new Ginoecium()
Mimosa_monacensis.ginoecium.ovary = new Ovary()

Mimosa_monacensis.fruit = new Fruit()
Mimosa_monacensis.fruit.stipe = new Stipe()
Mimosa_monacensis.fruit.replum = new Replum()
Mimosa_monacensis.fruit.epicarp = new Epicarp()

Mimosa_monacensis.seed = new Seed()


// Description authorship
Mimosa_monacensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_monacensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa monacensis
export { Mimosa_monacensis }