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


// Description of Mimosa papposa
const Mimosa_papposa = new Mimosa()
Mimosa_papposa.specificEpithet = 'papposa'

Mimosa_papposa.stems = new Stems()

Mimosa_papposa.stipule = new Stipule()
Mimosa_papposa.stipule.margin = new MarginStipule()
Mimosa_papposa.stipule.adaxial = new AdaxialStipule()
Mimosa_papposa.stipule.abaxial = new AbaxialStipule()

Mimosa_papposa.leaf = new Leaf()
Mimosa_papposa.leaf.petiole = new Petiole()
Mimosa_papposa.leaf.bipinnate = new Bipinnate()
Mimosa_papposa.leaf.bipinnate.rachis = new Rachis()
Mimosa_papposa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_papposa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_papposa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_papposa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_papposa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_papposa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(27, 35)
Mimosa_papposa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_papposa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_papposa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_papposa.inflorescence = new Inflorescence()
Mimosa_papposa.inflorescence.peduncle = new Peduncle()
Mimosa_papposa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_papposa.flower = new Flower()
Mimosa_papposa.flower.bracteole = new Bracteole()
Mimosa_papposa.flower.calyx = new Calyx()
Mimosa_papposa.flower.corolla = new Corolla()

Mimosa_papposa.androecium = new Androecium()
Mimosa_papposa.androecium.filaments = new Filaments()
Mimosa_papposa.androecium.filaments.colour = 'pinkish'

Mimosa_papposa.ginoecium = new Ginoecium()
Mimosa_papposa.ginoecium.ovary = new Ovary()

Mimosa_papposa.fruit = new Fruit()
Mimosa_papposa.fruit.stipe = new Stipe()
Mimosa_papposa.fruit.replum = new Replum()
Mimosa_papposa.fruit.epicarp = new Epicarp()

Mimosa_papposa.seed = new Seed()


// Description authorship
Mimosa_papposa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_papposa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa papposa
export { Mimosa_papposa }