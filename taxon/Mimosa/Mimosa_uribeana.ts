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


// Description of Mimosa uribeana
const Mimosa_uribeana = new Mimosa()
Mimosa_uribeana.specificEpithet = 'uribeana'

Mimosa_uribeana.stems = new Stems()

Mimosa_uribeana.stipule = new Stipule()
Mimosa_uribeana.stipule.margin = new MarginStipule()
Mimosa_uribeana.stipule.adaxial = new AdaxialStipule()
Mimosa_uribeana.stipule.abaxial = new AbaxialStipule()

Mimosa_uribeana.leaf = new Leaf()
Mimosa_uribeana.leaf.petiole = new Petiole()
Mimosa_uribeana.leaf.bipinnate = new Bipinnate()
Mimosa_uribeana.leaf.bipinnate.rachis = new Rachis()
Mimosa_uribeana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_uribeana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_uribeana.leaf.bipinnate.pinnae.setNumberOfPairs(5)
Mimosa_uribeana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_uribeana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_uribeana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_uribeana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(17, 22)
Mimosa_uribeana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_uribeana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_uribeana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_uribeana.inflorescence = new Inflorescence()
Mimosa_uribeana.inflorescence.peduncle = new Peduncle()
Mimosa_uribeana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_uribeana.flower = new Flower()
Mimosa_uribeana.flower.bracteole = new Bracteole()
Mimosa_uribeana.flower.calyx = new Calyx()
Mimosa_uribeana.flower.corolla = new Corolla()

Mimosa_uribeana.androecium = new Androecium()
Mimosa_uribeana.androecium.filaments = new Filaments()
Mimosa_uribeana.androecium.filaments.colour = 'whitenish'

Mimosa_uribeana.ginoecium = new Ginoecium()
Mimosa_uribeana.ginoecium.ovary = new Ovary()

Mimosa_uribeana.fruit = new Fruit()
Mimosa_uribeana.fruit.stipe = new Stipe()
Mimosa_uribeana.fruit.replum = new Replum()
Mimosa_uribeana.fruit.epicarp = new Epicarp()

Mimosa_uribeana.seed = new Seed()


// Description authorship
Mimosa_uribeana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_uribeana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa uribeana
export { Mimosa_uribeana }