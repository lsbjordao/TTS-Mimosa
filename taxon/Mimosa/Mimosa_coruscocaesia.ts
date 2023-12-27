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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa coruscocaesia
const Mimosa_coruscocaesia = new Mimosa()
Mimosa_coruscocaesia.specificEpithet = 'coruscocaesia'

Mimosa_coruscocaesia.stems = new Stems()

Mimosa_coruscocaesia.stipule = new Stipule()
Mimosa_coruscocaesia.stipule.margin = new MarginStipule()
Mimosa_coruscocaesia.stipule.adaxial = new AdaxialStipule()
Mimosa_coruscocaesia.stipule.abaxial = new AbaxialStipule()

Mimosa_coruscocaesia.leaf = new Leaf()
Mimosa_coruscocaesia.leaf.petiole = new Petiole()
Mimosa_coruscocaesia.leaf.bipinnate = new Bipinnate()
Mimosa_coruscocaesia.leaf.bipinnate.rachis = new Rachis()
Mimosa_coruscocaesia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_coruscocaesia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_coruscocaesia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 12)
Mimosa_coruscocaesia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_coruscocaesia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_coruscocaesia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_coruscocaesia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 13)
Mimosa_coruscocaesia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(15)
Mimosa_coruscocaesia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_coruscocaesia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_coruscocaesia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_coruscocaesia.inflorescence = new Inflorescence()
Mimosa_coruscocaesia.inflorescence.peduncle = new Peduncle()
Mimosa_coruscocaesia.inflorescence.spicate = new Spicate()

Mimosa_coruscocaesia.flower = new Flower()
Mimosa_coruscocaesia.flower.bracteole = new Bracteole()
Mimosa_coruscocaesia.flower.merism = '4-merous'
Mimosa_coruscocaesia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_coruscocaesia.flower.calyx = new Calyx()
Mimosa_coruscocaesia.flower.calyx.shape = 'campanulate'
Mimosa_coruscocaesia.flower.corolla = new Corolla()

Mimosa_coruscocaesia.androecium = new Androecium()
Mimosa_coruscocaesia.androecium.filaments = new Filaments()
Mimosa_coruscocaesia.androecium.filaments.colour = 'pinkish'

Mimosa_coruscocaesia.ginoecium = new Ginoecium()
Mimosa_coruscocaesia.ginoecium.ovary = new Ovary()

Mimosa_coruscocaesia.fruit = new Fruit()
Mimosa_coruscocaesia.fruit.stipe = new Stipe()
Mimosa_coruscocaesia.fruit.replum = new Replum()
Mimosa_coruscocaesia.fruit.epicarp = new Epicarp()

Mimosa_coruscocaesia.seed = new Seed()


// Description authorship
Mimosa_coruscocaesia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_coruscocaesia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa coruscocaesia
export { Mimosa_coruscocaesia }