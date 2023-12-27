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


// Description of Mimosa orthacantha
const Mimosa_orthacantha = new Mimosa()
Mimosa_orthacantha.specificEpithet = 'orthacantha'

Mimosa_orthacantha.stems = new Stems()

Mimosa_orthacantha.stipule = new Stipule()
Mimosa_orthacantha.stipule.margin = new MarginStipule()
Mimosa_orthacantha.stipule.adaxial = new AdaxialStipule()
Mimosa_orthacantha.stipule.abaxial = new AbaxialStipule()

Mimosa_orthacantha.leaf = new Leaf()
Mimosa_orthacantha.leaf.petiole = new Petiole()
Mimosa_orthacantha.leaf.bipinnate = new Bipinnate()
Mimosa_orthacantha.leaf.bipinnate.rachis = new Rachis()
Mimosa_orthacantha.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_orthacantha.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_orthacantha.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_orthacantha.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_orthacantha.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_orthacantha.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_orthacantha.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_orthacantha.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_orthacantha.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_orthacantha.inflorescence = new Inflorescence()
Mimosa_orthacantha.inflorescence.peduncle = new Peduncle()
Mimosa_orthacantha.inflorescence.capitate = new CapitateInflorescence()

Mimosa_orthacantha.flower = new Flower()
Mimosa_orthacantha.flower.bracteole = new Bracteole()
Mimosa_orthacantha.flower.merism = '4-merous'
Mimosa_orthacantha.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_orthacantha.flower.calyx = new Calyx()
Mimosa_orthacantha.flower.calyx.shape = 'campanulate'
Mimosa_orthacantha.flower.corolla = new Corolla()
Mimosa_orthacantha.flower.corolla.shape = 'funnelform'

Mimosa_orthacantha.androecium = new Androecium()
Mimosa_orthacantha.androecium.filaments = new Filaments()
Mimosa_orthacantha.androecium.filaments.colour = 'pinkish'

Mimosa_orthacantha.ginoecium = new Ginoecium()
Mimosa_orthacantha.ginoecium.ovary = new Ovary()

Mimosa_orthacantha.fruit = new Fruit()
Mimosa_orthacantha.fruit.stipe = new Stipe()
Mimosa_orthacantha.fruit.replum = new Replum()
Mimosa_orthacantha.fruit.epicarp = new Epicarp()

Mimosa_orthacantha.seed = new Seed()


// Description authorship
Mimosa_orthacantha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_orthacantha.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709353 
})


// Sources


// Export Mimosa orthacantha
export { Mimosa_orthacantha }