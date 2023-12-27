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


// Description of Mimosa apodocarpa
const Mimosa_apodocarpa = new Mimosa()
Mimosa_apodocarpa.specificEpithet = 'apodocarpa'

Mimosa_apodocarpa.stems = new Stems()

Mimosa_apodocarpa.stipule = new Stipule()
Mimosa_apodocarpa.stipule.margin = new MarginStipule()
Mimosa_apodocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_apodocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_apodocarpa.leaf = new Leaf()
Mimosa_apodocarpa.leaf.petiole = new Petiole()
Mimosa_apodocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_apodocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_apodocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_apodocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_apodocarpa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(11, 20)
Mimosa_apodocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_apodocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_apodocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_apodocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 40)
Mimosa_apodocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_apodocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_apodocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_apodocarpa.inflorescence = new Inflorescence()
Mimosa_apodocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_apodocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_apodocarpa.flower = new Flower()
Mimosa_apodocarpa.flower.bracteole = new Bracteole()
Mimosa_apodocarpa.flower.merism = '4-merous'
Mimosa_apodocarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_apodocarpa.flower.calyx = new Calyx()
Mimosa_apodocarpa.flower.calyx.shape = 'campanulate'
Mimosa_apodocarpa.flower.corolla = new Corolla()

Mimosa_apodocarpa.androecium = new Androecium()
Mimosa_apodocarpa.androecium.filaments = new Filaments()
Mimosa_apodocarpa.androecium.filaments.colour = 'whitenish'

Mimosa_apodocarpa.ginoecium = new Ginoecium()
Mimosa_apodocarpa.ginoecium.ovary = new Ovary()

Mimosa_apodocarpa.fruit = new Fruit()
Mimosa_apodocarpa.fruit.stipe = new Stipe()
Mimosa_apodocarpa.fruit.replum = new Replum()
Mimosa_apodocarpa.fruit.epicarp = new Epicarp()

Mimosa_apodocarpa.seed = new Seed()


// Description authorship
Mimosa_apodocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_apodocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa apodocarpa
export { Mimosa_apodocarpa }