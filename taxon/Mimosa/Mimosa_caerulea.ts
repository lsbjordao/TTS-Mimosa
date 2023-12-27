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


// Description of Mimosa caerulea
const Mimosa_caerulea = new Mimosa()
Mimosa_caerulea.specificEpithet = 'caerulea'

Mimosa_caerulea.stems = new Stems()

Mimosa_caerulea.stipule = new Stipule()
Mimosa_caerulea.stipule.margin = new MarginStipule()
Mimosa_caerulea.stipule.adaxial = new AdaxialStipule()
Mimosa_caerulea.stipule.abaxial = new AbaxialStipule()

Mimosa_caerulea.leaf = new Leaf()
Mimosa_caerulea.leaf.petiole = new Petiole()
Mimosa_caerulea.leaf.bipinnate = new Bipinnate()
Mimosa_caerulea.leaf.bipinnate.rachis = new Rachis()
Mimosa_caerulea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_caerulea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_caerulea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_caerulea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_caerulea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_caerulea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(2, 4)
Mimosa_caerulea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(5)
Mimosa_caerulea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_caerulea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_caerulea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_caerulea.inflorescence = new Inflorescence()
Mimosa_caerulea.inflorescence.peduncle = new Peduncle()
Mimosa_caerulea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_caerulea.flower = new Flower()
Mimosa_caerulea.flower.bracteole = new Bracteole()
Mimosa_caerulea.flower.calyx = new Calyx()
Mimosa_caerulea.flower.corolla = new Corolla()

Mimosa_caerulea.androecium = new Androecium()
Mimosa_caerulea.androecium.filaments = new Filaments()

Mimosa_caerulea.ginoecium = new Ginoecium()
Mimosa_caerulea.ginoecium.ovary = new Ovary()

Mimosa_caerulea.fruit = new Fruit()
Mimosa_caerulea.fruit.stipe = new Stipe()
Mimosa_caerulea.fruit.replum = new Replum()
Mimosa_caerulea.fruit.epicarp = new Epicarp()

Mimosa_caerulea.seed = new Seed()


// Description authorship
Mimosa_caerulea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_caerulea.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa caerulea
export { Mimosa_caerulea }