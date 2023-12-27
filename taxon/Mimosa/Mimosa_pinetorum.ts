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


// Description of Mimosa pinetorum
const Mimosa_pinetorum = new Mimosa()
Mimosa_pinetorum.specificEpithet = 'pinetorum'

Mimosa_pinetorum.stems = new Stems()

Mimosa_pinetorum.stipule = new Stipule()
Mimosa_pinetorum.stipule.margin = new MarginStipule()
Mimosa_pinetorum.stipule.adaxial = new AdaxialStipule()
Mimosa_pinetorum.stipule.abaxial = new AbaxialStipule()

Mimosa_pinetorum.leaf = new Leaf()
Mimosa_pinetorum.leaf.petiole = new Petiole()
Mimosa_pinetorum.leaf.bipinnate = new Bipinnate()
Mimosa_pinetorum.leaf.bipinnate.rachis = new Rachis()
Mimosa_pinetorum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pinetorum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pinetorum.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pinetorum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pinetorum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pinetorum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pinetorum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(4)
Mimosa_pinetorum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 15)
Mimosa_pinetorum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(19)
Mimosa_pinetorum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pinetorum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pinetorum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pinetorum.inflorescence = new Inflorescence()
Mimosa_pinetorum.inflorescence.peduncle = new Peduncle()
Mimosa_pinetorum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pinetorum.flower = new Flower()
Mimosa_pinetorum.flower.bracteole = new Bracteole()
Mimosa_pinetorum.flower.merism = '4-merous'
Mimosa_pinetorum.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pinetorum.flower.calyx = new Calyx()
Mimosa_pinetorum.flower.calyx.shape = 'campanulate'
Mimosa_pinetorum.flower.corolla = new Corolla()
Mimosa_pinetorum.flower.corolla.shape = 'vase-shaped'

Mimosa_pinetorum.androecium = new Androecium()
Mimosa_pinetorum.androecium.filaments = new Filaments()

Mimosa_pinetorum.ginoecium = new Ginoecium()
Mimosa_pinetorum.ginoecium.ovary = new Ovary()

Mimosa_pinetorum.fruit = new Fruit()
Mimosa_pinetorum.fruit.stipe = new Stipe()
Mimosa_pinetorum.fruit.replum = new Replum()
Mimosa_pinetorum.fruit.epicarp = new Epicarp()

Mimosa_pinetorum.seed = new Seed()


// Description authorship
Mimosa_pinetorum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pinetorum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pinetorum
export { Mimosa_pinetorum }