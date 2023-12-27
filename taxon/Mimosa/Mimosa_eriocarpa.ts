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


// Description of Mimosa eriocarpa
const Mimosa_eriocarpa = new Mimosa()
Mimosa_eriocarpa.specificEpithet = 'eriocarpa'

Mimosa_eriocarpa.stems = new Stems()

Mimosa_eriocarpa.stipule = new Stipule()
Mimosa_eriocarpa.stipule.margin = new MarginStipule()
Mimosa_eriocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_eriocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_eriocarpa.leaf = new Leaf()
Mimosa_eriocarpa.leaf.petiole = new Petiole()
Mimosa_eriocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_eriocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_eriocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_eriocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_eriocarpa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 6)
Mimosa_eriocarpa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(8)
Mimosa_eriocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_eriocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_eriocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_eriocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 12)
Mimosa_eriocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_eriocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_eriocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_eriocarpa.inflorescence = new Inflorescence()
Mimosa_eriocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_eriocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_eriocarpa.flower = new Flower()
Mimosa_eriocarpa.flower.bracteole = new Bracteole()
Mimosa_eriocarpa.flower.merism = '4-merous'
Mimosa_eriocarpa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_eriocarpa.flower.calyx = new Calyx()
Mimosa_eriocarpa.flower.corolla = new Corolla()
Mimosa_eriocarpa.flower.corolla.shape = 'campanulate'

Mimosa_eriocarpa.androecium = new Androecium()
Mimosa_eriocarpa.androecium.filaments = new Filaments()

Mimosa_eriocarpa.ginoecium = new Ginoecium()
Mimosa_eriocarpa.ginoecium.ovary = new Ovary()

Mimosa_eriocarpa.fruit = new Fruit()
Mimosa_eriocarpa.fruit.stipe = new Stipe()
Mimosa_eriocarpa.fruit.replum = new Replum()
Mimosa_eriocarpa.fruit.epicarp = new Epicarp()

Mimosa_eriocarpa.seed = new Seed()


// Description authorship
Mimosa_eriocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_eriocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa eriocarpa
export { Mimosa_eriocarpa }