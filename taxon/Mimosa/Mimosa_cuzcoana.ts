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


// Description of Mimosa cuzcoana
const Mimosa_cuzcoana = new Mimosa()
Mimosa_cuzcoana.specificEpithet = 'cuzcoana'

Mimosa_cuzcoana.stems = new Stems()

Mimosa_cuzcoana.stipule = new Stipule()
Mimosa_cuzcoana.stipule.margin = new MarginStipule()
Mimosa_cuzcoana.stipule.adaxial = new AdaxialStipule()
Mimosa_cuzcoana.stipule.abaxial = new AbaxialStipule()

Mimosa_cuzcoana.leaf = new Leaf()
Mimosa_cuzcoana.leaf.petiole = new Petiole()
Mimosa_cuzcoana.leaf.bipinnate = new Bipinnate()
Mimosa_cuzcoana.leaf.bipinnate.rachis = new Rachis()
Mimosa_cuzcoana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cuzcoana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cuzcoana.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_cuzcoana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cuzcoana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cuzcoana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cuzcoana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(10)
Mimosa_cuzcoana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 22)
Mimosa_cuzcoana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cuzcoana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cuzcoana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cuzcoana.inflorescence = new Inflorescence()
Mimosa_cuzcoana.inflorescence.peduncle = new Peduncle()
Mimosa_cuzcoana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cuzcoana.flower = new Flower()
Mimosa_cuzcoana.flower.bracteole = new Bracteole()
Mimosa_cuzcoana.flower.merism = '4-merous'
Mimosa_cuzcoana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_cuzcoana.flower.calyx = new Calyx()
Mimosa_cuzcoana.flower.calyx.shape = 'campanulate'
Mimosa_cuzcoana.flower.corolla = new Corolla()
Mimosa_cuzcoana.flower.corolla.shape = 'turbinate'

Mimosa_cuzcoana.androecium = new Androecium()
Mimosa_cuzcoana.androecium.filaments = new Filaments()
Mimosa_cuzcoana.androecium.filaments.colour = 'pinkish'

Mimosa_cuzcoana.ginoecium = new Ginoecium()
Mimosa_cuzcoana.ginoecium.ovary = new Ovary()

Mimosa_cuzcoana.fruit = new Fruit()
Mimosa_cuzcoana.fruit.stipe = new Stipe()
Mimosa_cuzcoana.fruit.replum = new Replum()
Mimosa_cuzcoana.fruit.epicarp = new Epicarp()

Mimosa_cuzcoana.seed = new Seed()


// Description authorship
Mimosa_cuzcoana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cuzcoana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa cuzcoana
export { Mimosa_cuzcoana }