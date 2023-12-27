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


// Description of Mimosa humivagans
const Mimosa_humivagans = new Mimosa()
Mimosa_humivagans.specificEpithet = 'humivagans'

Mimosa_humivagans.stems = new Stems()

Mimosa_humivagans.stipule = new Stipule()
Mimosa_humivagans.stipule.margin = new MarginStipule()
Mimosa_humivagans.stipule.adaxial = new AdaxialStipule()
Mimosa_humivagans.stipule.abaxial = new AbaxialStipule()

Mimosa_humivagans.leaf = new Leaf()
Mimosa_humivagans.leaf.petiole = new Petiole()
Mimosa_humivagans.leaf.bipinnate = new Bipinnate()
Mimosa_humivagans.leaf.bipinnate.rachis = new Rachis()
Mimosa_humivagans.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_humivagans.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_humivagans.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 12)
Mimosa_humivagans.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_humivagans.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_humivagans.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_humivagans.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(23, 35)
Mimosa_humivagans.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_humivagans.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_humivagans.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_humivagans.inflorescence = new Inflorescence()
Mimosa_humivagans.inflorescence.peduncle = new Peduncle()
Mimosa_humivagans.inflorescence.capitate = new CapitateInflorescence()

Mimosa_humivagans.flower = new Flower()
Mimosa_humivagans.flower.bracteole = new Bracteole()
Mimosa_humivagans.flower.merism = '4-merous'
Mimosa_humivagans.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_humivagans.flower.calyx = new Calyx()
Mimosa_humivagans.flower.calyx.shape = 'campanulate'
Mimosa_humivagans.flower.corolla = new Corolla()

Mimosa_humivagans.androecium = new Androecium()
Mimosa_humivagans.androecium.filaments = new Filaments()
Mimosa_humivagans.androecium.filaments.colour = 'pinkish'

Mimosa_humivagans.ginoecium = new Ginoecium()
Mimosa_humivagans.ginoecium.ovary = new Ovary()

Mimosa_humivagans.fruit = new Fruit()
Mimosa_humivagans.fruit.stipe = new Stipe()
Mimosa_humivagans.fruit.replum = new Replum()
Mimosa_humivagans.fruit.epicarp = new Epicarp()

Mimosa_humivagans.seed = new Seed()


// Description authorship
Mimosa_humivagans.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_humivagans.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa humivagans
export { Mimosa_humivagans }