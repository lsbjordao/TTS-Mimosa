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


// Description of Mimosa leucaenoides
const Mimosa_leucaenoides = new Mimosa()
Mimosa_leucaenoides.specificEpithet = 'leucaenoides'

Mimosa_leucaenoides.stems = new Stems()

Mimosa_leucaenoides.stipule = new Stipule()
Mimosa_leucaenoides.stipule.margin = new MarginStipule()
Mimosa_leucaenoides.stipule.adaxial = new AdaxialStipule()
Mimosa_leucaenoides.stipule.abaxial = new AbaxialStipule()

Mimosa_leucaenoides.leaf = new Leaf()
Mimosa_leucaenoides.leaf.petiole = new Petiole()
Mimosa_leucaenoides.leaf.bipinnate = new Bipinnate()
Mimosa_leucaenoides.leaf.bipinnate.rachis = new Rachis()
Mimosa_leucaenoides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_leucaenoides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_leucaenoides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_leucaenoides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_leucaenoides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_leucaenoides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(2, 4)
Mimosa_leucaenoides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_leucaenoides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_leucaenoides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_leucaenoides.inflorescence = new Inflorescence()
Mimosa_leucaenoides.inflorescence.peduncle = new Peduncle()
Mimosa_leucaenoides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_leucaenoides.flower = new Flower()
Mimosa_leucaenoides.flower.bracteole = new Bracteole()
Mimosa_leucaenoides.flower.merism = '4-merous'
Mimosa_leucaenoides.flower.calyx = new Calyx()
Mimosa_leucaenoides.flower.calyx.shape = 'campanulate'
Mimosa_leucaenoides.flower.corolla = new Corolla()
Mimosa_leucaenoides.flower.corolla.shape = 'vase-shaped'

Mimosa_leucaenoides.androecium = new Androecium()
Mimosa_leucaenoides.androecium.filaments = new Filaments()
Mimosa_leucaenoides.androecium.filaments.colour = 'pinkish'

Mimosa_leucaenoides.ginoecium = new Ginoecium()
Mimosa_leucaenoides.ginoecium.ovary = new Ovary()

Mimosa_leucaenoides.fruit = new Fruit()
Mimosa_leucaenoides.fruit.stipe = new Stipe()
Mimosa_leucaenoides.fruit.replum = new Replum()
Mimosa_leucaenoides.fruit.epicarp = new Epicarp()

Mimosa_leucaenoides.seed = new Seed()


// Description authorship
Mimosa_leucaenoides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_leucaenoides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa leucaenoides
export { Mimosa_leucaenoides }