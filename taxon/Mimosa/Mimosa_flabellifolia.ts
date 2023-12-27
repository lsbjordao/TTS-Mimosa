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


// Description of Mimosa flabellifolia
const Mimosa_flabellifolia = new Mimosa()
Mimosa_flabellifolia.specificEpithet = 'flabellifolia'

Mimosa_flabellifolia.stems = new Stems()

Mimosa_flabellifolia.stipule = new Stipule()
Mimosa_flabellifolia.stipule.margin = new MarginStipule()
Mimosa_flabellifolia.stipule.adaxial = new AdaxialStipule()
Mimosa_flabellifolia.stipule.abaxial = new AbaxialStipule()

Mimosa_flabellifolia.leaf = new Leaf()
Mimosa_flabellifolia.leaf.petiole = new Petiole()
Mimosa_flabellifolia.leaf.bipinnate = new Bipinnate()
Mimosa_flabellifolia.leaf.bipinnate.rachis = new Rachis()
Mimosa_flabellifolia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_flabellifolia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_flabellifolia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_flabellifolia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_flabellifolia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_flabellifolia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_flabellifolia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_flabellifolia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_flabellifolia.inflorescence = new Inflorescence()
Mimosa_flabellifolia.inflorescence.peduncle = new Peduncle()
Mimosa_flabellifolia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_flabellifolia.flower = new Flower()
Mimosa_flabellifolia.flower.bracteole = new Bracteole()
Mimosa_flabellifolia.flower.calyx = new Calyx()
Mimosa_flabellifolia.flower.corolla = new Corolla()

Mimosa_flabellifolia.androecium = new Androecium()
Mimosa_flabellifolia.androecium.filaments = new Filaments()

Mimosa_flabellifolia.ginoecium = new Ginoecium()
Mimosa_flabellifolia.ginoecium.ovary = new Ovary()

Mimosa_flabellifolia.fruit = new Fruit()
Mimosa_flabellifolia.fruit.stipe = new Stipe()
Mimosa_flabellifolia.fruit.replum = new Replum()
Mimosa_flabellifolia.fruit.epicarp = new Epicarp()

Mimosa_flabellifolia.seed = new Seed()


// Description authorship
Mimosa_flabellifolia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_flabellifolia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa flabellifolia
export { Mimosa_flabellifolia }