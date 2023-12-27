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


// Description of Mimosa barrancana
const Mimosa_barrancana = new Mimosa()
Mimosa_barrancana.specificEpithet = 'barrancana'

Mimosa_barrancana.stems = new Stems()

Mimosa_barrancana.stipule = new Stipule()
Mimosa_barrancana.stipule.margin = new MarginStipule()
Mimosa_barrancana.stipule.adaxial = new AdaxialStipule()
Mimosa_barrancana.stipule.abaxial = new AbaxialStipule()

Mimosa_barrancana.leaf = new Leaf()
Mimosa_barrancana.leaf.petiole = new Petiole()
Mimosa_barrancana.leaf.bipinnate = new Bipinnate()
Mimosa_barrancana.leaf.bipinnate.rachis = new Rachis()
Mimosa_barrancana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_barrancana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_barrancana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 5)
Mimosa_barrancana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_barrancana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_barrancana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_barrancana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_barrancana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_barrancana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_barrancana.inflorescence = new Inflorescence()
Mimosa_barrancana.inflorescence.peduncle = new Peduncle()
Mimosa_barrancana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_barrancana.flower = new Flower()
Mimosa_barrancana.flower.bracteole = new Bracteole()
Mimosa_barrancana.flower.merism = ['4-merous', '5-merous']
Mimosa_barrancana.flower.calyx = new Calyx()
Mimosa_barrancana.flower.calyx.shape = 'campanulate'
Mimosa_barrancana.flower.corolla = new Corolla()

Mimosa_barrancana.androecium = new Androecium()
Mimosa_barrancana.androecium.filaments = new Filaments()

Mimosa_barrancana.ginoecium = new Ginoecium()
Mimosa_barrancana.ginoecium.ovary = new Ovary()

Mimosa_barrancana.fruit = new Fruit()
Mimosa_barrancana.fruit.stipe = new Stipe()
Mimosa_barrancana.fruit.replum = new Replum()
Mimosa_barrancana.fruit.epicarp = new Epicarp()

Mimosa_barrancana.seed = new Seed()


// Description authorship
Mimosa_barrancana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_barrancana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa barrancana
export { Mimosa_barrancana }