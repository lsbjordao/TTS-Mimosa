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


// Description of Mimosa margaritae
const Mimosa_margaritae = new Mimosa()
Mimosa_margaritae.specificEpithet = 'margaritae'

Mimosa_margaritae.stems = new Stems()

Mimosa_margaritae.stipule = new Stipule()
Mimosa_margaritae.stipule.margin = new MarginStipule()
Mimosa_margaritae.stipule.adaxial = new AdaxialStipule()
Mimosa_margaritae.stipule.abaxial = new AbaxialStipule()

Mimosa_margaritae.leaf = new Leaf()
Mimosa_margaritae.leaf.petiole = new Petiole()
Mimosa_margaritae.leaf.bipinnate = new Bipinnate()
Mimosa_margaritae.leaf.bipinnate.rachis = new Rachis()
Mimosa_margaritae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_margaritae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_margaritae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_margaritae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_margaritae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_margaritae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_margaritae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_margaritae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_margaritae.inflorescence = new Inflorescence()
Mimosa_margaritae.inflorescence.peduncle = new Peduncle()
Mimosa_margaritae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_margaritae.flower = new Flower()
Mimosa_margaritae.flower.bracteole = new Bracteole()
Mimosa_margaritae.flower.calyx = new Calyx()
Mimosa_margaritae.flower.corolla = new Corolla()

Mimosa_margaritae.androecium = new Androecium()
Mimosa_margaritae.androecium.filaments = new Filaments()

Mimosa_margaritae.ginoecium = new Ginoecium()
Mimosa_margaritae.ginoecium.ovary = new Ovary()

Mimosa_margaritae.fruit = new Fruit()
Mimosa_margaritae.fruit.stipe = new Stipe()
Mimosa_margaritae.fruit.replum = new Replum()
Mimosa_margaritae.fruit.epicarp = new Epicarp()

Mimosa_margaritae.seed = new Seed()


// Description authorship
Mimosa_margaritae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_margaritae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa margaritae
export { Mimosa_margaritae }