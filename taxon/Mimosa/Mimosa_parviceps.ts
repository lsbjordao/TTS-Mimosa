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


// Description of Mimosa parviceps
const Mimosa_parviceps = new Mimosa()
Mimosa_parviceps.specificEpithet = 'parviceps'

Mimosa_parviceps.stems = new Stems()

Mimosa_parviceps.stipule = new Stipule()
Mimosa_parviceps.stipule.margin = new MarginStipule()
Mimosa_parviceps.stipule.adaxial = new AdaxialStipule()
Mimosa_parviceps.stipule.abaxial = new AbaxialStipule()

Mimosa_parviceps.leaf = new Leaf()
Mimosa_parviceps.leaf.petiole = new Petiole()
Mimosa_parviceps.leaf.bipinnate = new Bipinnate()
Mimosa_parviceps.leaf.bipinnate.rachis = new Rachis()
Mimosa_parviceps.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_parviceps.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_parviceps.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_parviceps.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_parviceps.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_parviceps.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_parviceps.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 15)
Mimosa_parviceps.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_parviceps.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_parviceps.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_parviceps.inflorescence = new Inflorescence()
Mimosa_parviceps.inflorescence.peduncle = new Peduncle()
Mimosa_parviceps.inflorescence.capitate = new CapitateInflorescence()

Mimosa_parviceps.flower = new Flower()
Mimosa_parviceps.flower.bracteole = new Bracteole()
Mimosa_parviceps.flower.merism = '4-merous'
Mimosa_parviceps.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_parviceps.flower.calyx = new Calyx()
Mimosa_parviceps.flower.calyx.shape = 'campanulate'
Mimosa_parviceps.flower.corolla = new Corolla()
Mimosa_parviceps.flower.corolla.shape = 'funnelform'

Mimosa_parviceps.androecium = new Androecium()
Mimosa_parviceps.androecium.filaments = new Filaments()
Mimosa_parviceps.androecium.filaments.colour = 'pinkish'

Mimosa_parviceps.ginoecium = new Ginoecium()
Mimosa_parviceps.ginoecium.ovary = new Ovary()

Mimosa_parviceps.fruit = new Fruit()
Mimosa_parviceps.fruit.stipe = new Stipe()
Mimosa_parviceps.fruit.replum = new Replum()
Mimosa_parviceps.fruit.epicarp = new Epicarp()

Mimosa_parviceps.seed = new Seed()


// Description authorship
Mimosa_parviceps.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_parviceps.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa parviceps
export { Mimosa_parviceps }