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


// Description of Mimosa orbignyana
const Mimosa_orbignyana = new Mimosa()
Mimosa_orbignyana.specificEpithet = 'orbignyana'

Mimosa_orbignyana.stems = new Stems()

Mimosa_orbignyana.stipule = new Stipule()
Mimosa_orbignyana.stipule.margin = new MarginStipule()
Mimosa_orbignyana.stipule.adaxial = new AdaxialStipule()
Mimosa_orbignyana.stipule.abaxial = new AbaxialStipule()

Mimosa_orbignyana.leaf = new Leaf()
Mimosa_orbignyana.leaf.petiole = new Petiole()
Mimosa_orbignyana.leaf.bipinnate = new Bipinnate()
Mimosa_orbignyana.leaf.bipinnate.rachis = new Rachis()
Mimosa_orbignyana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_orbignyana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_orbignyana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(17, 21)
Mimosa_orbignyana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_orbignyana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_orbignyana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_orbignyana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_orbignyana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_orbignyana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_orbignyana.inflorescence = new Inflorescence()
Mimosa_orbignyana.inflorescence.peduncle = new Peduncle()
Mimosa_orbignyana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_orbignyana.flower = new Flower()
Mimosa_orbignyana.flower.bracteole = new Bracteole()
Mimosa_orbignyana.flower.merism = '4-merous'
Mimosa_orbignyana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_orbignyana.flower.calyx = new Calyx()
Mimosa_orbignyana.flower.calyx.shape = 'pappiform'
Mimosa_orbignyana.flower.corolla = new Corolla()
Mimosa_orbignyana.flower.corolla.shape = 'funnelform'

Mimosa_orbignyana.androecium = new Androecium()
Mimosa_orbignyana.androecium.filaments = new Filaments()
Mimosa_orbignyana.androecium.filaments.colour = 'pinkish'

Mimosa_orbignyana.ginoecium = new Ginoecium()
Mimosa_orbignyana.ginoecium.ovary = new Ovary()

Mimosa_orbignyana.fruit = new Fruit()
Mimosa_orbignyana.fruit.stipe = new Stipe()
Mimosa_orbignyana.fruit.replum = new Replum()
Mimosa_orbignyana.fruit.epicarp = new Epicarp()

Mimosa_orbignyana.seed = new Seed()


// Description authorship
Mimosa_orbignyana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_orbignyana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa orbignyana
export { Mimosa_orbignyana }