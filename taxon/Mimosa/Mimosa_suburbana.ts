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


// Description of Mimosa suburbana
const Mimosa_suburbana = new Mimosa()
Mimosa_suburbana.specificEpithet = 'suburbana'

Mimosa_suburbana.stems = new Stems()

Mimosa_suburbana.stipule = new Stipule()
Mimosa_suburbana.stipule.margin = new MarginStipule()
Mimosa_suburbana.stipule.adaxial = new AdaxialStipule()
Mimosa_suburbana.stipule.abaxial = new AbaxialStipule()

Mimosa_suburbana.leaf = new Leaf()
Mimosa_suburbana.leaf.petiole = new Petiole()
Mimosa_suburbana.leaf.bipinnate = new Bipinnate()
Mimosa_suburbana.leaf.bipinnate.rachis = new Rachis()
Mimosa_suburbana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_suburbana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_suburbana.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(3)
Mimosa_suburbana.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(5)
Mimosa_suburbana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_suburbana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_suburbana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_suburbana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(21, 35)
Mimosa_suburbana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_suburbana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_suburbana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_suburbana.inflorescence = new Inflorescence()
Mimosa_suburbana.inflorescence.peduncle = new Peduncle()
Mimosa_suburbana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_suburbana.flower = new Flower()
Mimosa_suburbana.flower.bracteole = new Bracteole()
Mimosa_suburbana.flower.calyx = new Calyx()
Mimosa_suburbana.flower.calyx.shape = 'campanulate'
Mimosa_suburbana.flower.corolla = new Corolla()
Mimosa_suburbana.flower.corolla.shape = 'turbinate'

Mimosa_suburbana.androecium = new Androecium()
Mimosa_suburbana.androecium.filaments = new Filaments()
Mimosa_suburbana.androecium.filaments.colour = 'pinkish'

Mimosa_suburbana.ginoecium = new Ginoecium()
Mimosa_suburbana.ginoecium.ovary = new Ovary()

Mimosa_suburbana.fruit = new Fruit()
Mimosa_suburbana.fruit.stipe = new Stipe()
Mimosa_suburbana.fruit.replum = new Replum()
Mimosa_suburbana.fruit.epicarp = new Epicarp()

Mimosa_suburbana.seed = new Seed()


// Description authorship
Mimosa_suburbana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_suburbana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa suburbana
export { Mimosa_suburbana }