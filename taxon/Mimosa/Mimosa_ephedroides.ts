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


// Description of Mimosa ephedroides
const Mimosa_ephedroides = new Mimosa()
Mimosa_ephedroides.specificEpithet = 'ephedroides'

Mimosa_ephedroides.stems = new Stems()

Mimosa_ephedroides.stipule = new Stipule()
Mimosa_ephedroides.stipule.margin = new MarginStipule()
Mimosa_ephedroides.stipule.adaxial = new AdaxialStipule()
Mimosa_ephedroides.stipule.abaxial = new AbaxialStipule()

Mimosa_ephedroides.leaf = new Leaf()
Mimosa_ephedroides.leaf.petiole = new Petiole()
Mimosa_ephedroides.leaf.bipinnate = new Bipinnate()
Mimosa_ephedroides.leaf.bipinnate.rachis = new Rachis()
Mimosa_ephedroides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ephedroides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ephedroides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ephedroides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ephedroides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ephedroides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(21, 33)
Mimosa_ephedroides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ephedroides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ephedroides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ephedroides.inflorescence = new Inflorescence()
Mimosa_ephedroides.inflorescence.peduncle = new Peduncle()
Mimosa_ephedroides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ephedroides.flower = new Flower()
Mimosa_ephedroides.flower.bracteole = new Bracteole()
Mimosa_ephedroides.flower.merism = ['4-merous', '5-merous']
Mimosa_ephedroides.flower.calyx = new Calyx()
Mimosa_ephedroides.flower.calyx.shape = 'campanulate'
Mimosa_ephedroides.flower.corolla = new Corolla()
Mimosa_ephedroides.flower.corolla.shape = 'vase-shaped'

Mimosa_ephedroides.androecium = new Androecium()
Mimosa_ephedroides.androecium.filaments = new Filaments()
Mimosa_ephedroides.androecium.filaments.colour = 'whitenish'

Mimosa_ephedroides.ginoecium = new Ginoecium()
Mimosa_ephedroides.ginoecium.ovary = new Ovary()

Mimosa_ephedroides.fruit = new Fruit()
Mimosa_ephedroides.fruit.stipe = new Stipe()
Mimosa_ephedroides.fruit.replum = new Replum()
Mimosa_ephedroides.fruit.epicarp = new Epicarp()

Mimosa_ephedroides.seed = new Seed()


// Description authorship
Mimosa_ephedroides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ephedroides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa ephedroides
export { Mimosa_ephedroides }