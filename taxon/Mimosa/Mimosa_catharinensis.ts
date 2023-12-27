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


// Description of Mimosa catharinensis
const Mimosa_catharinensis = new Mimosa()
Mimosa_catharinensis.specificEpithet = 'catharinensis'

Mimosa_catharinensis.stems = new Stems()

Mimosa_catharinensis.stipule = new Stipule()
Mimosa_catharinensis.stipule.margin = new MarginStipule()
Mimosa_catharinensis.stipule.adaxial = new AdaxialStipule()
Mimosa_catharinensis.stipule.abaxial = new AbaxialStipule()

Mimosa_catharinensis.leaf = new Leaf()
Mimosa_catharinensis.leaf.petiole = new Petiole()
Mimosa_catharinensis.leaf.bipinnate = new Bipinnate()
Mimosa_catharinensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_catharinensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_catharinensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_catharinensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 5)
Mimosa_catharinensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_catharinensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_catharinensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_catharinensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_catharinensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_catharinensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_catharinensis.inflorescence = new Inflorescence()
Mimosa_catharinensis.inflorescence.peduncle = new Peduncle()
Mimosa_catharinensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_catharinensis.flower = new Flower()
Mimosa_catharinensis.flower.bracteole = new Bracteole()
Mimosa_catharinensis.flower.merism = '4-merous'
Mimosa_catharinensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_catharinensis.flower.calyx = new Calyx()
Mimosa_catharinensis.flower.calyx.shape = 'campanulate'
Mimosa_catharinensis.flower.corolla = new Corolla()

Mimosa_catharinensis.androecium = new Androecium()
Mimosa_catharinensis.androecium.filaments = new Filaments()

Mimosa_catharinensis.ginoecium = new Ginoecium()
Mimosa_catharinensis.ginoecium.ovary = new Ovary()

Mimosa_catharinensis.fruit = new Fruit()
Mimosa_catharinensis.fruit.stipe = new Stipe()
Mimosa_catharinensis.fruit.replum = new Replum()
Mimosa_catharinensis.fruit.epicarp = new Epicarp()

Mimosa_catharinensis.seed = new Seed()


// Description authorship
Mimosa_catharinensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_catharinensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa catharinensis
export { Mimosa_catharinensis }