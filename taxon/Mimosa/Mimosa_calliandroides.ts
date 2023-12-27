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


// Description of Mimosa calliandroides
const Mimosa_calliandroides = new Mimosa()
Mimosa_calliandroides.specificEpithet = 'calliandroides'

Mimosa_calliandroides.stems = new Stems()

Mimosa_calliandroides.stipule = new Stipule()
Mimosa_calliandroides.stipule.margin = new MarginStipule()
Mimosa_calliandroides.stipule.adaxial = new AdaxialStipule()
Mimosa_calliandroides.stipule.abaxial = new AbaxialStipule()

Mimosa_calliandroides.leaf = new Leaf()
Mimosa_calliandroides.leaf.petiole = new Petiole()
Mimosa_calliandroides.leaf.bipinnate = new Bipinnate()
Mimosa_calliandroides.leaf.bipinnate.rachis = new Rachis()
Mimosa_calliandroides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_calliandroides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_calliandroides.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 14)
Mimosa_calliandroides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_calliandroides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_calliandroides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_calliandroides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_calliandroides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_calliandroides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_calliandroides.inflorescence = new Inflorescence()
Mimosa_calliandroides.inflorescence.peduncle = new Peduncle()
Mimosa_calliandroides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_calliandroides.flower = new Flower()
Mimosa_calliandroides.flower.bracteole = new Bracteole()
Mimosa_calliandroides.flower.calyx = new Calyx()
Mimosa_calliandroides.flower.calyx.shape = 'campanulate'
Mimosa_calliandroides.flower.corolla = new Corolla()
Mimosa_calliandroides.flower.corolla.shape = 'turbinate'

Mimosa_calliandroides.androecium = new Androecium()
Mimosa_calliandroides.androecium.filaments = new Filaments()
Mimosa_calliandroides.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_calliandroides.ginoecium = new Ginoecium()
Mimosa_calliandroides.ginoecium.ovary = new Ovary()

Mimosa_calliandroides.fruit = new Fruit()
Mimosa_calliandroides.fruit.stipe = new Stipe()
Mimosa_calliandroides.fruit.replum = new Replum()
Mimosa_calliandroides.fruit.epicarp = new Epicarp()

Mimosa_calliandroides.seed = new Seed()


// Description authorship
Mimosa_calliandroides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_calliandroides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa calliandroides
export { Mimosa_calliandroides }