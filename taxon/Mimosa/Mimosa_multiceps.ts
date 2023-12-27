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


// Description of Mimosa multiceps
const Mimosa_multiceps = new Mimosa()
Mimosa_multiceps.specificEpithet = 'multiceps'

Mimosa_multiceps.stems = new Stems()

Mimosa_multiceps.stipule = new Stipule()
Mimosa_multiceps.stipule.margin = new MarginStipule()
Mimosa_multiceps.stipule.adaxial = new AdaxialStipule()
Mimosa_multiceps.stipule.abaxial = new AbaxialStipule()

Mimosa_multiceps.leaf = new Leaf()
Mimosa_multiceps.leaf.petiole = new Petiole()
Mimosa_multiceps.leaf.bipinnate = new Bipinnate()
Mimosa_multiceps.leaf.bipinnate.rachis = new Rachis()
Mimosa_multiceps.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_multiceps.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_multiceps.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_multiceps.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(4)
Mimosa_multiceps.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_multiceps.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_multiceps.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_multiceps.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_multiceps.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_multiceps.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_multiceps.inflorescence = new Inflorescence()
Mimosa_multiceps.inflorescence.peduncle = new Peduncle()
Mimosa_multiceps.inflorescence.capitate = new CapitateInflorescence()

Mimosa_multiceps.flower = new Flower()
Mimosa_multiceps.flower.bracteole = new Bracteole()
Mimosa_multiceps.flower.merism = ['4-merous', '5-merous', '6-merous']
Mimosa_multiceps.flower.calyx = new Calyx()
Mimosa_multiceps.flower.calyx.shape = 'campanulate'
Mimosa_multiceps.flower.corolla = new Corolla()

Mimosa_multiceps.androecium = new Androecium()
Mimosa_multiceps.androecium.filaments = new Filaments()
Mimosa_multiceps.androecium.filaments.colour = 'pinkish'

Mimosa_multiceps.ginoecium = new Ginoecium()
Mimosa_multiceps.ginoecium.ovary = new Ovary()

Mimosa_multiceps.fruit = new Fruit()
Mimosa_multiceps.fruit.stipe = new Stipe()
Mimosa_multiceps.fruit.replum = new Replum()
Mimosa_multiceps.fruit.epicarp = new Epicarp()

Mimosa_multiceps.seed = new Seed()


// Description authorship
Mimosa_multiceps.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_multiceps.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa multiceps
export { Mimosa_multiceps }