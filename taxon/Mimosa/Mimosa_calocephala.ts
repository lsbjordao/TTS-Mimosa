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


// Description of Mimosa calocephala
const Mimosa_calocephala = new Mimosa()
Mimosa_calocephala.specificEpithet = 'calocephala'

Mimosa_calocephala.stems = new Stems()

Mimosa_calocephala.stipule = new Stipule()
Mimosa_calocephala.stipule.margin = new MarginStipule()
Mimosa_calocephala.stipule.adaxial = new AdaxialStipule()
Mimosa_calocephala.stipule.abaxial = new AbaxialStipule()

Mimosa_calocephala.leaf = new Leaf()
Mimosa_calocephala.leaf.petiole = new Petiole()
Mimosa_calocephala.leaf.bipinnate = new Bipinnate()
Mimosa_calocephala.leaf.bipinnate.rachis = new Rachis()
Mimosa_calocephala.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_calocephala.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_calocephala.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_calocephala.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_calocephala.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_calocephala.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_calocephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(11)
Mimosa_calocephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 40)
Mimosa_calocephala.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_calocephala.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_calocephala.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_calocephala.inflorescence = new Inflorescence()
Mimosa_calocephala.inflorescence.peduncle = new Peduncle()
Mimosa_calocephala.inflorescence.capitate = new CapitateInflorescence()

Mimosa_calocephala.flower = new Flower()
Mimosa_calocephala.flower.bracteole = new Bracteole()
Mimosa_calocephala.flower.merism = '4-merous'
Mimosa_calocephala.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_calocephala.flower.calyx = new Calyx()
Mimosa_calocephala.flower.calyx.shape = 'campanulate'
Mimosa_calocephala.flower.corolla = new Corolla()

Mimosa_calocephala.androecium = new Androecium()
Mimosa_calocephala.androecium.filaments = new Filaments()

Mimosa_calocephala.ginoecium = new Ginoecium()
Mimosa_calocephala.ginoecium.ovary = new Ovary()

Mimosa_calocephala.fruit = new Fruit()
Mimosa_calocephala.fruit.stipe = new Stipe()
Mimosa_calocephala.fruit.replum = new Replum()
Mimosa_calocephala.fruit.epicarp = new Epicarp()

Mimosa_calocephala.seed = new Seed()


// Description authorship
Mimosa_calocephala.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_calocephala.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa calocephala
export { Mimosa_calocephala }