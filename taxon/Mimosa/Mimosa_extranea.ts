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


// Description of Mimosa extranea
const Mimosa_extranea = new Mimosa()
Mimosa_extranea.specificEpithet = 'extranea'

Mimosa_extranea.stems = new Stems()

Mimosa_extranea.stipule = new Stipule()
Mimosa_extranea.stipule.margin = new MarginStipule()
Mimosa_extranea.stipule.adaxial = new AdaxialStipule()
Mimosa_extranea.stipule.abaxial = new AbaxialStipule()

Mimosa_extranea.leaf = new Leaf()
Mimosa_extranea.leaf.petiole = new Petiole()
Mimosa_extranea.leaf.bipinnate = new Bipinnate()
Mimosa_extranea.leaf.bipinnate.rachis = new Rachis()
Mimosa_extranea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_extranea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_extranea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_extranea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_extranea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_extranea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 9)
Mimosa_extranea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_extranea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_extranea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_extranea.inflorescence = new Inflorescence()
Mimosa_extranea.inflorescence.peduncle = new Peduncle()
Mimosa_extranea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_extranea.flower = new Flower()
Mimosa_extranea.flower.bracteole = new Bracteole()
Mimosa_extranea.flower.merism = ['4-merous', '5-merous']
Mimosa_extranea.flower.calyx = new Calyx()
Mimosa_extranea.flower.calyx.shape = 'campanulate'
Mimosa_extranea.flower.corolla = new Corolla()
Mimosa_extranea.flower.corolla.shape = 'trumpet-shaped'

Mimosa_extranea.androecium = new Androecium()
Mimosa_extranea.androecium.filaments = new Filaments()
Mimosa_extranea.androecium.filaments.colour = 'whitenish'

Mimosa_extranea.ginoecium = new Ginoecium()
Mimosa_extranea.ginoecium.ovary = new Ovary()

Mimosa_extranea.fruit = new Fruit()
Mimosa_extranea.fruit.stipe = new Stipe()
Mimosa_extranea.fruit.replum = new Replum()
Mimosa_extranea.fruit.epicarp = new Epicarp()

Mimosa_extranea.seed = new Seed()


// Description authorship
Mimosa_extranea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_extranea.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa extranea
export { Mimosa_extranea }