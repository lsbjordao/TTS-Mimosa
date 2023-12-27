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


// Description of Mimosa distans
const Mimosa_distans = new Mimosa()
Mimosa_distans.specificEpithet = 'distans'

Mimosa_distans.stems = new Stems()

Mimosa_distans.stipule = new Stipule()
Mimosa_distans.stipule.margin = new MarginStipule()
Mimosa_distans.stipule.adaxial = new AdaxialStipule()
Mimosa_distans.stipule.abaxial = new AbaxialStipule()

Mimosa_distans.leaf = new Leaf()
Mimosa_distans.leaf.petiole = new Petiole()
Mimosa_distans.leaf.bipinnate = new Bipinnate()
Mimosa_distans.leaf.bipinnate.rachis = new Rachis()
Mimosa_distans.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_distans.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_distans.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 8)
Mimosa_distans.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_distans.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_distans.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_distans.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 30)
Mimosa_distans.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_distans.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_distans.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_distans.inflorescence = new Inflorescence()
Mimosa_distans.inflorescence.peduncle = new Peduncle()
Mimosa_distans.inflorescence.capitate = new CapitateInflorescence()

Mimosa_distans.flower = new Flower()
Mimosa_distans.flower.bracteole = new Bracteole()
Mimosa_distans.flower.merism = '4-merous'
Mimosa_distans.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_distans.flower.calyx = new Calyx()
Mimosa_distans.flower.corolla = new Corolla()

Mimosa_distans.androecium = new Androecium()
Mimosa_distans.androecium.filaments = new Filaments()
Mimosa_distans.androecium.filaments.colour = 'pinkish'

Mimosa_distans.ginoecium = new Ginoecium()
Mimosa_distans.ginoecium.ovary = new Ovary()

Mimosa_distans.fruit = new Fruit()
Mimosa_distans.fruit.stipe = new Stipe()
Mimosa_distans.fruit.replum = new Replum()
Mimosa_distans.fruit.epicarp = new Epicarp()

Mimosa_distans.seed = new Seed()


// Description authorship
Mimosa_distans.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_distans.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa distans
export { Mimosa_distans }