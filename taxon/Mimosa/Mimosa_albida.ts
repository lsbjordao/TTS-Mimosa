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


// Description of Mimosa albida
const Mimosa_albida = new Mimosa()
Mimosa_albida.specificEpithet = 'albida'

Mimosa_albida.stems = new Stems()

Mimosa_albida.stipule = new Stipule()
Mimosa_albida.stipule.margin = new MarginStipule()
Mimosa_albida.stipule.adaxial = new AdaxialStipule()
Mimosa_albida.stipule.abaxial = new AbaxialStipule()

Mimosa_albida.leaf = new Leaf()
Mimosa_albida.leaf.petiole = new Petiole()
Mimosa_albida.leaf.bipinnate = new Bipinnate()
Mimosa_albida.leaf.bipinnate.rachis = new Rachis()
Mimosa_albida.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_albida.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_albida.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_albida.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_albida.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_albida.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_albida.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_albida.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_albida.inflorescence = new Inflorescence()
Mimosa_albida.inflorescence.peduncle = new Peduncle()
Mimosa_albida.inflorescence.capitate = new CapitateInflorescence()

Mimosa_albida.flower = new Flower()
Mimosa_albida.flower.bracteole = new Bracteole()
Mimosa_albida.flower.calyx = new Calyx()
Mimosa_albida.flower.corolla = new Corolla()

Mimosa_albida.androecium = new Androecium()
Mimosa_albida.androecium.filaments = new Filaments()

Mimosa_albida.ginoecium = new Ginoecium()
Mimosa_albida.ginoecium.ovary = new Ovary()

Mimosa_albida.fruit = new Fruit()
Mimosa_albida.fruit.stipe = new Stipe()
Mimosa_albida.fruit.replum = new Replum()
Mimosa_albida.fruit.epicarp = new Epicarp()

Mimosa_albida.seed = new Seed()


// Description authorship
Mimosa_albida.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_albida.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa albida
export { Mimosa_albida }