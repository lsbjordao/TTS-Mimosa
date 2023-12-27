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


// Description of Mimosa aspera
const Mimosa_aspera = new Mimosa()
Mimosa_aspera.specificEpithet = 'aspera'

Mimosa_aspera.stems = new Stems()

Mimosa_aspera.stipule = new Stipule()
Mimosa_aspera.stipule.margin = new MarginStipule()
Mimosa_aspera.stipule.adaxial = new AdaxialStipule()
Mimosa_aspera.stipule.abaxial = new AbaxialStipule()

Mimosa_aspera.leaf = new Leaf()
Mimosa_aspera.leaf.petiole = new Petiole()
Mimosa_aspera.leaf.bipinnate = new Bipinnate()
Mimosa_aspera.leaf.bipinnate.rachis = new Rachis()
Mimosa_aspera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_aspera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_aspera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_aspera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_aspera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_aspera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_aspera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_aspera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_aspera.inflorescence = new Inflorescence()
Mimosa_aspera.inflorescence.peduncle = new Peduncle()
Mimosa_aspera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_aspera.flower = new Flower()
Mimosa_aspera.flower.bracteole = new Bracteole()
Mimosa_aspera.flower.calyx = new Calyx()
Mimosa_aspera.flower.corolla = new Corolla()

Mimosa_aspera.androecium = new Androecium()
Mimosa_aspera.androecium.filaments = new Filaments()

Mimosa_aspera.ginoecium = new Ginoecium()
Mimosa_aspera.ginoecium.ovary = new Ovary()

Mimosa_aspera.fruit = new Fruit()
Mimosa_aspera.fruit.stipe = new Stipe()
Mimosa_aspera.fruit.replum = new Replum()
Mimosa_aspera.fruit.epicarp = new Epicarp()

Mimosa_aspera.seed = new Seed()


// Description authorship
Mimosa_aspera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_aspera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa aspera
export { Mimosa_aspera }