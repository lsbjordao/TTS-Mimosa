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


// Description of Mimosa nycteridis
const Mimosa_nycteridis = new Mimosa()
Mimosa_nycteridis.specificEpithet = 'nycteridis'

Mimosa_nycteridis.stems = new Stems()

Mimosa_nycteridis.stipule = new Stipule()
Mimosa_nycteridis.stipule.margin = new MarginStipule()
Mimosa_nycteridis.stipule.adaxial = new AdaxialStipule()
Mimosa_nycteridis.stipule.abaxial = new AbaxialStipule()

Mimosa_nycteridis.leaf = new Leaf()
Mimosa_nycteridis.leaf.petiole = new Petiole()
Mimosa_nycteridis.leaf.bipinnate = new Bipinnate()
Mimosa_nycteridis.leaf.bipinnate.rachis = new Rachis()
Mimosa_nycteridis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_nycteridis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_nycteridis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_nycteridis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_nycteridis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_nycteridis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_nycteridis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 17)
Mimosa_nycteridis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_nycteridis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_nycteridis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_nycteridis.inflorescence = new Inflorescence()
Mimosa_nycteridis.inflorescence.peduncle = new Peduncle()
Mimosa_nycteridis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_nycteridis.flower = new Flower()
Mimosa_nycteridis.flower.bracteole = new Bracteole()
Mimosa_nycteridis.flower.merism = '4-merous'
Mimosa_nycteridis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_nycteridis.flower.calyx = new Calyx()
Mimosa_nycteridis.flower.calyx.shape = 'campanulate'
Mimosa_nycteridis.flower.corolla = new Corolla()

Mimosa_nycteridis.androecium = new Androecium()
Mimosa_nycteridis.androecium.filaments = new Filaments()

Mimosa_nycteridis.ginoecium = new Ginoecium()
Mimosa_nycteridis.ginoecium.ovary = new Ovary()

Mimosa_nycteridis.fruit = new Fruit()
Mimosa_nycteridis.fruit.stipe = new Stipe()
Mimosa_nycteridis.fruit.replum = new Replum()
Mimosa_nycteridis.fruit.epicarp = new Epicarp()

Mimosa_nycteridis.seed = new Seed()


// Description authorship
Mimosa_nycteridis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_nycteridis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa nycteridis
export { Mimosa_nycteridis }